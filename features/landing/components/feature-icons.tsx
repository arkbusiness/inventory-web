import React from "react";
import { BarChart3, Link2, Cloud, ShoppingCart } from "lucide-react";
import { BarChartSVG, ChainSVG, CloudSVG, PlugSVG } from "@/components/ui/icons";

interface FeatureIconCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureIconCard = ({ icon, title }: FeatureIconCardProps) => {
  return (
    <div className="flex flex-col justify-center p-8 pb-[5.63rem] rounded-2xl bg-black/5">
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <div className="text-primary mt-8">
        {icon}
      </div>

    </div>
  );
};

const features = [
  {
    icon: <BarChartSVG  />,
    title: "Real-time Tracking",
  },
  {
    icon: <ChainSVG />,
    title: "Procurement & PO Management",
  },
  {
    icon: <CloudSVG />,
    title: "Reporting & Analytics",
  },
  {
    icon: <PlugSVG />,
    title: "Global Commerce Tools",
  },
];

export const FeatureIcons = () => {
  return (
    <section className="w-full mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(16.5rem,1fr))] gap-8">
          {features.map((feature, index) => (
            <FeatureIconCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
