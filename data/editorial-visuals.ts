export const heroPhotography = {
  arcticNight:
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2400&q=85",
  polarForest:
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=85",
  cabinGlow:
    "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=2200&q=85",
  winterRoad:
    "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=2200&q=85",
};

export const destinationPhotography: Record<string, string> = {
  rovaniemi:
    "https://unsplash.com/photos/a-reindeer-wearing-a-harness-standing-next-to-a-tree-WpcjfHXOYoU",
  levi: "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=1400&q=80",
  saariselka:
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=1400&q=80",
  yllas:
    "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=80",
};

export const activityPhotography: Record<string, string> = {
  "snow-safari":
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
  "husky-safari":
    "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1400&q=80",
  "aurora-hunting":
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=80",
  "reindeer-safari":
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
  "ice-fishing":
    "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1400&q=80",
  "skiing-snowboard":
    "https://images.unsplash.com/photo-1551524164-6cf2ac833fb4?auto=format&fit=crop&w=1400&q=80",
};

export const seasonMoods = [
  "linear-gradient(145deg, rgba(7,24,39,0.92), rgba(16,42,67,0.78)), url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(11,31,53,0.85), rgba(166,122,58,0.42)), url('https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(7,24,39,0.82), rgba(176,199,213,0.34)), url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(7,24,39,0.78), rgba(218,143,79,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
];

export const blogAccents = ["Aurora file", "Field notes", "Arctic brief"];

export function editorialHero(image: string) {
  return {
    backgroundImage: `linear-gradient(90deg, rgba(7,24,39,0.95) 0%, rgba(11,31,53,0.82) 48%, rgba(11,31,53,0.34) 100%), linear-gradient(180deg, rgba(7,24,39,0.14) 0%, rgba(7,24,39,0.82) 78%, var(--midnight) 100%), url('${image}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
}
