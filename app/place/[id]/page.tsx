import { Metadata } from 'next';
import PlaceDetailClient from './PlaceDetailClient';

// Demo data - must match PlaceDetailClient
const places = [
  { 
    id: 1, 
    name: "Everest Base Camp Trek", 
    category: ["trekking"], 
    location: "Solukhumbu", 
    rating: 4.8,
    duration: "12-14 days",
    bestSeason: "March-May, Sep-Nov",
    description: "World's most famous trek to the base of Mount Everest (8,848m). Stunning views of world's highest peaks.",
    howToReach: "Fly to Lukla from Kathmandu, then trek",
    highlights: ["Kala Patthar viewpoint", "Namche Bazaar", "Tengboche Monastery"]
  },
  { 
    id: 2, 
    name: "Annapurna Base Camp Trek", 
    category: ["trekking"], 
    location: "Kaski", 
    rating: 4.7,
    duration: "7-10 days",
    bestSeason: "March-May, Sep-Nov",
    description: "Classic trek to the heart of Annapurna sanctuary with 360° mountain views.",
    howToReach: "Drive to Nayapul from Pokhara, then trek",
    highlights: ["Machhapuchhre views", "Annapurna I", "Jhinu hot springs"]
  },
  { id: 3, name: "Pokhara", category: ["nature", "adventure"], location: "Kaski", rating: 4.9, duration: "2-3 days", description: "Tourism capital with lakes and mountains", howToReach: "Drive or fly from Kathmandu", highlights: ["Phewa Lake", "Sarangkot", "Peace Pagoda"] },
];

export function generateStaticParams() {
  return places.map((place) => ({
    id: place.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const place = places.find(p => p.id === Number(params.id));
  return {
    title: place ? `${place.name} - Nepal Tourism` : 'Place Not Found',
  };
}

export default function PlaceDetailPage({ params }: { params: { id: string } }) {
  return <PlaceDetailClient id={Number(params.id)} />;
}
