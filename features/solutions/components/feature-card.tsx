import { ReactNode } from "react";
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const SolutionFeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl p-6 pb-9.5 bg-background justify-center">
      <h3 className="text-xl font-medium text-black">{title}</h3>
      <p className="font-normal">{description}</p>
      <div>{icon}</div>
    </div>
  );
};
