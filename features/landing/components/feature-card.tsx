import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex gap-3.5">
      <div className="mb-4 text-primary">{icon}</div>
      <div>
        <h3 className="text-xl font-medium text-black mb-2">{title}</h3>
        <p className="font-normal max-w-76">{description}</p>
      </div>
    </div>
  );
};
