export interface Place {
  id: number;
  name: string;
  category: string[];
  location: string;
  description: string;
  howToReach: string;
  duration: string;
  bestSeason: string;
  rating: number;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  highlights: string[];
}

export const places: Place[] = [
  // I'll import from the existing data
];

// localStorage helpers
const STORAGE_KEY = 'nepal-tourism-favorites';
const VISITED_KEY = 'nepal-tourism-visited';

export function getFavorites(): number[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function toggleFavorite(id: number): boolean {
  const favorites = getFavorites();
  const index = favorites.indexOf(id);
  
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    return false;
  } else {
    favorites.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    return true;
  }
}

export function isFavorite(id: number): boolean {
  return getFavorites().includes(id);
}

export function getVisited(): number[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(VISITED_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function toggleVisited(id: number): boolean {
  const visited = getVisited();
  const index = visited.indexOf(id);
  
  if (index > -1) {
    visited.splice(index, 1);
    localStorage.setItem(VISITED_KEY, JSON.stringify(visited));
    return false;
  } else {
    visited.push(id);
    localStorage.setItem(VISITED_KEY, JSON.stringify(visited));
    return true;
  }
}

export function isVisited(id: number): boolean {
  return getVisited().includes(id);
}
