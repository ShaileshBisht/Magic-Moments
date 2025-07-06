export const galleryImages = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/${i + 1}.png`,
  alt: `AI Generated Artwork ${i + 1}`,
  title: `AI Art ${i + 1}`,
}));
