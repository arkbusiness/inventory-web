import { Container } from "@/components/layouts/container";
import { SolutionFeatureCard } from "./feature-card";
import {
  AnalyticsSVG,
  BillingSVG,
  FulfillmentSVG,
  InventoryControlSVG,
  ProcurementSVG,
} from "@/components/ui";

const solutions = [
  {
    icon: <InventoryControlSVG />,
    title: "Inventory Control",
    description:
      "Gain full visibility and control of your stock across multiple warehouses and outlets. Track items in real time, set smart reorder points, and avoid costly stockouts or overstocking.",
  },
  {
    icon: <ProcurementSVG />,
    title: "Procurement Automation",
    description:
      "Streamline requests, approvals, and purchase orders with automated workflows. Maintain supplier databases, manage PO lifecycles, and ensure accountability with built-in audit trails.",
  },
  {
    icon: <FulfillmentSVG />,
    title: "Fulfillment Management",
    description:
      "Easily manage transfers between warehouses, replenish outlets, and track deliveries to completion. Optimize fulfillment speed and accuracy, so customers and teams get what they need faster.",
  },
  {
    icon: <BillingSVG />,
    title: "Billing",
    description:
      "Handle invoices and payments directly within ARK. Track partial payments, overdue invoices, and payment histories securely — reducing revenue leakage and manual reconciliation work.",
  },
  {
    icon: <AnalyticsSVG />,
    title: "Analytics & Reporting",
    description:
      "Turn data into decisions with live dashboards and customizable reports. Export to Excel or integrate with BI tools to track performance, forecast demand, and monitor spend patterns.",
  },
];

export const SolutionFeatures = () => {
  return (
    <section className="w-full bg-highlight py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-6">
            {solutions.map((solution, index) => (
              <SolutionFeatureCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
