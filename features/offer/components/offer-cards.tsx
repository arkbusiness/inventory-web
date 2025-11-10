import { Container } from "@/components/layouts/container";
import {
  OnboardingSVG,
  WarehouseSVG,
  SupplierSVG,
  PaymentSVG,
  IntegrationSVG,
} from "@/components/ui";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: OnboardingSVG,
    title: "Onboarding & Access Control",
    description:
      "Quickly set up your organization with role-based permissions and SSO support. Invite team members in minutes, define approval workflows, and ensure everyone has the right level of access.",
    bg: "bg-white/60",
  },
  {
    icon: WarehouseSVG,
    title: "Inventory & Warehouse",
    description:
      "Centralize stock management across multiple warehouses and outlets. Transfer items, manage catalogs, and track movement in real-time—no more disconnected spreadsheets.",
    bg: "bg-white",
  },
  {
    icon: SupplierSVG,
    title: "Procurement & Supplier",
    description:
      "Automate the full procurement cycle — from purchase requests and approvals to live supplier database management and purchase order generation.",
    bg: "bg-white",
  },
  {
    icon: PaymentSVG,
    title: "Billing & Payments",
    description:
      "Issue invoices, monitor payments, and manage overdue accounts securely inside ARK. Simplify reconciliation and reduce revenue leakage with clear, real-time payment tracking.",
    bg: "bg-white/60",
  },
  {
    icon: IntegrationSVG,
    title: "Reporting & Integrations",
    description:
      "Access real-time dashboards, pre-built reports, and forecasting tools. Import/export with Excel, or integrate directly with ERP, accounting, and BI platforms through ARK's API.",
    bg: "bg-white/60",
  },
];

export const OfferCards = () => {
  return (
    <section className="w-full  pt-0 sm:pt-16 pb-16  bg-highlight">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-2xl py-8 px-5.5 transition-shadow",
                  feature.bg,
                )}
              >
                <div className="flex justify-center mb-6">
                  <Icon />
                </div>
                <h3 className="text-3xl font-bold text-black text-center mb-6">
                  {feature.title}
                </h3>
                <p className="text-base text-center leading-relaxed font-normal mb-20 max-w-115 mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
