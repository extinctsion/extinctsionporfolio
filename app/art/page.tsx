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
        {/* <img
          src={url}
          alt="Artwork enlarged view"
          className="max-h-[60vh] w-auto object-contain rounded mb-4"
          style={{ background: '#f3f3f3' }}
        /> */}
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
      <h1 className="text-4xl font-bold mb-8">Art Gallery</h1>
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
            <button
              className="mt-2 px-4 py-1 bg-primary text-white rounded shadow hover:bg-primary/80 focus:outline-none w-full"
              onClick={() => handleFullscreen(idx, art.url)}
            >
              View Fullscreen
            </button>
            <div className="mt-3 text-center">
              <div className="font-semibold text-lg">{art.title}</div>
              <div className="text-gray-500 text-sm">{art.description}</div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 rounded-lg pointer-events-none">
              <div className="font-bold text-xl mb-2">{art.title}</div>
              <div className="text-base">{art.description}</div>
            </div>
          </div>
        ))}
      </div>
      {fullscreenUrl && <FullscreenModal url={fullscreenUrl} onClose={() => setFullscreenUrl(null)} />}
    </main>
  );
}
