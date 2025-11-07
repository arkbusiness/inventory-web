import React from "react";
import { FooterBrand } from "./footer-brand";
import { FooterSection } from "./footer-section";
import { FooterSocial } from "./footer-social";
import { footerSections } from "../config/footer-links";

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <FooterBrand />

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <FooterSocial />

          {/* Copyright */}
          <p className="text-sm text-white/60">
            © 2025 Copyright ARK. Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
