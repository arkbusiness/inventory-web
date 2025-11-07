import { Container } from "@/components/layouts/container";
import { BarChart3, GitBranch, HandCoins, Kanban, TrendingUp, Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";
import { FeatureIcons } from "./feature-icons";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Real-Time Visibility",
    description:
      "Get instant insight into stock levels, order status, and low-stock alerts across all warehouses and outlets.",
  },
  {
    icon: <Kanban className="w-8 h-8" />,
    title: "End-to-End Traceability",
    description:
      "Track every step — from purchase requests and POs to warehouse transfers and final dispatch.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Scalable SaaS",
    description:
      "Expand effortlessly with a cloud-based platform that grows with your business — add warehouses, users, and locations in minutes.",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "Easy Integrations",
    description:
      "Import/export data via Excel/CSV or connect via API to your existing ERP, accounting, or BI tools.",
  },
  {
    icon: <HandCoins className="w-8 h-8" />,
    title: "Cost & Waste Reduction",
    description:
      "Avoid overstocking, stockouts, and duplicate orders — saving money and minimizing losses.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Data-Driven Insights",
    description:
      "Monitor inventory, approve requests, and manage operations from any device, on the go.",
  },
];

export const WhyARK = () => {
  return (
    <section className="w-full pt-16 pb-[6.13rem] px-16 bg-highlight">
      <Container>
        <>
          <div className="text-center">
            <p className="text-primary font-semibold  mb-3">
              Features
            </p>
            <h2 className="text-[2.25rem] font-semibold text-black font-montserrat">
              Why ARK?
            </h2>
            <p className="text-xl max-w-6xl mx-auto font-normal mt-5">
              At ARK, we offer comprehensive inventory management and event-driven commerce solutions tailored to your unique needs
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(18.63rem,1fr))] xl:grid-cols-[23.63rem_23.63rem_23.63rem] justify-center gap-x-8 gap-y-25 mt-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <FeatureIcons />
        </>
      </Container>
    </section>
  );
};
