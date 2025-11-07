import React from "react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="w-full bg-linear-to-br from-[#FFF5E6] to-[#FFE8D6] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path
            d="M20,50 Q30,20 50,20 T80,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-secondary"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-10 left-10 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-secondary" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          You didn't start your business to manage spreadsheets.
        </h2>
        
        <Button
          size="default"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full"
        >
          Get started
        </Button>
      </div>
    </section>
  );
};
