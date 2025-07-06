import { useEffect, useState, useCallback } from "react";
import { createClient } from "pexels";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

interface CachedData {
  photos: Photo[];
  timestamp: number;
}

const CACHE_KEY = "gallery_photos_cache";
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

export const useGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if cached data is still valid
  const isCacheValid = useCallback((cachedData: CachedData): boolean => {
    const now = Date.now();
    return now - cachedData.timestamp < CACHE_DURATION;
  }, []);

  // Load data from localStorage
  const loadFromCache = useCallback((): Photo[] | null => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const cachedData: CachedData = JSON.parse(cached);
      if (isCacheValid(cachedData)) {
        return cachedData.photos;
      } else {
        // Remove expired cache
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
    } catch (error) {
      console.error("Error loading from cache:", error);
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
  }, [isCacheValid]);

  // Save data to localStorage
  const saveToCache = useCallback((photos: Photo[]) => {
    try {
      const cacheData: CachedData = {
        photos,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error("Error saving to cache:", error);
    }
  }, []);

  const fetchPhotos = useCallback(async () => {
    try {
      const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || "");
      const response = await client.photos.search({
        query: "ai generated art",
        per_page: 80,
      });

      if ("error" in response) {
        throw new Error(response.error);
      }

      const formattedPhotos = response.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt || "Untitled",
        description: photo.alt || "No description available",
        image: photo.src.large2x,
        tags: ["Abstract", "Digital", "Art"],
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
      }));

      setPhotos(formattedPhotos);
      saveToCache(formattedPhotos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [saveToCache]);

  const retryFetch = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchPhotos();
  }, [fetchPhotos]);

  // Clear cache manually
  const clearCache = useCallback(() => {
    localStorage.removeItem(CACHE_KEY);
  }, []);

  useEffect(() => {
    // Check cache first
    const cachedPhotos = loadFromCache();

    if (cachedPhotos && cachedPhotos.length > 0) {
      // Use cached data
      setPhotos(cachedPhotos);
      setLoading(false);
      console.log("Gallery data loaded from cache");
    } else {
      // Fetch from API
      console.log("Fetching gallery data from API");
      fetchPhotos();
    }
  }, [loadFromCache, fetchPhotos]);

  return {
    photos,
    loading,
    error,
    retryFetch,
    clearCache,
  };
};
