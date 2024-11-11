'use client';

import { useEffect, useState } from 'react';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

const libraries: Libraries = ['places', 'drawing', 'geometry'];

export function MapProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  // Ensures the component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries,
  });

  if (!isClient) return null; // Prevent server-side rendering of this component

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading...</p>;

  return <>{children}</>;
}