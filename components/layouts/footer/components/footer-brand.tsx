import React from "react";

export const FooterBrand = () => {
  return (
    <div className="lg:col-span-1">
      <div className="flex items-center gap-2 mb-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            d="M16 4L4 12V28H12V20H20V28H28V12L16 4Z"
            fill="white"
          />
          <circle cx="16" cy="14" r="2" fill="#E71623" />
        </svg>
        <span className="text-2xl font-bold">ARK</span>
      </div>
      <p className="text-sm text-white/80">
        Streamline the way you track your inventory data.
      </p>
    </div>
  );
};
