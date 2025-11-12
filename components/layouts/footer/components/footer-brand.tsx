import Image from "next/image";

export const FooterBrand = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/footer-logo.svg"
          alt="Footer Logo"
          width={100}
          height={40}
        />
      </div>
      {/* <p className="font-medium text-white/77">
        Descriptive line about what your company does.
      </p> */}
    </div>
  );
};
