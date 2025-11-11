"use client";

import { Container } from "@/components/layouts/container";
import Image from "next/image";
import { useState } from "react";

export const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-full py-16 bg-secondary">
      <Container>
        <div className="mx-auto">
          {/* Video Container */}
          <div className="relative w-full h-[60vw] overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail */}
                <Image
                  src="https://img.youtube.com/vi/fbgZLNacTa0/maxresdefault.jpg"
                  alt="ARK Demo Video"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  aria-label="Play video"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 transition-all group-hover:scale-110">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap">
                    Watch a 2 minute demo
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/fbgZLNacTa0?autoplay=1"
                title="ARK Inventory Management Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
