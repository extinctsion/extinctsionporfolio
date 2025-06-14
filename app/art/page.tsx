'use client'

import React, { useRef, useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Artwork {
  title: string;
  description: string;
  url: string;
}

function FullscreenModal({ url, onClose }: { url: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={onClose}>
      <div
        className="relative bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center max-w-lg w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-60 rounded px-3 py-1 hover:bg-opacity-80"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ArtPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    fetch("/art.json")
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ArtGallery artworks={artworks} />
      </main>
      <Footer />
    </div>
  );
}

function ArtGallery({ artworks }: { artworks: Artwork[] }) {
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleFullscreen = (idx: number, url: string) => {
    const img = imgRefs.current[idx];
    if (img && img.requestFullscreen) {
      img.requestFullscreen();
    } else {
      setFullscreenUrl(url);
    }
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">My Art Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
        {artworks.map((art, idx) => (
          <div
            key={idx}
            className="mb-6 break-inside-avoid relative group w-full"
          >
            <div className="overflow-hidden rounded-lg shadow-lg w-full">
              <img
                ref={el => {
                  imgRefs.current[idx] = el;
                }}
                src={art.url}
                alt={art.title}
                className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105 bg-[#f3f3f3]"
                style={{ display: 'block' }}
              />
            </div>
            <div
              onClick={() => handleFullscreen(idx, art.url)}
              className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 rounded-lg cursor-pointer"
            >
              <div className="font-bold text-xl mb-2">Click to view full screen</div>
                <div className="absolute left-4 bottom-4 text-left">
                  <div className="font-bold text-xl mb-2">{art.title}</div>
                  <div className="text-base">{art.description}</div>
                </div>
            </div>

          </div>
        ))}
      </div>
      {fullscreenUrl && <FullscreenModal url={fullscreenUrl} onClose={() => setFullscreenUrl(null)} />}
    </main>
  );
}
