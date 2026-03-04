import { Metadata } from 'next';
import PlaceDetailClient from './PlaceDetailClient';
import { places } from '@/lib/places';

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
