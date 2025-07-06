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

export const useGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  const retryFetch = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchPhotos();
  }, [fetchPhotos]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return {
    photos,
    loading,
    error,
    retryFetch,
  };
};
