import { LinkButton, RightCircleIcon } from "@/components/ui";
import { APP_ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/format-currency";
import { X } from "lucide-react";

type PlanCardProps = {
  plan: {
    id: string;
    name: string;
    description: string;
    price: number;
    summary: string[];
  };
  multiplier: number | null;
};

export const PlanCard = ({ plan, multiplier }: PlanCardProps) => {
  const isPopular = plan.name.includes("Plus");
  const isBasic = plan.name.includes("Basic") && !isPopular;
  const isStandard = plan.name.includes("Standard");
  const isBasicPlus = plan.name.includes("Basic Plus");

  const getFeaturesTitle = () => {
    if (isBasicPlus) return "Everything in Basic";
    if (isStandard) return "Everything in Basic Plus";
    if (!isBasic) return "All Standard plan features";
    return null;
  };

  return (
    <div
      className={cn(
        "transition-all border border-border/70 bg-white rounded-[24px] rounded-t-none",
        {
          "border-primary": isPopular,
        },
      )}
    >
      <div className="px-6 py-5.5 bg-cta mb-6">
        {/* Plan Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-6">
            <h3
              className={cn(
                "text-xl font-semibold text-black bg-white rounded-[6px] p-1",
                {
                  "bg-primary text-white": isPopular,
                },
              )}
            >
              {plan.name}
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-12">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-black font-montserrat">
              {formatCurrency({ amount: plan.price })}
            </span>
            {multiplier && plan.price > 0 && (
              <div className="flex -top-1 relative font-semibold">
                <X size={18} className="text-primary" />
                <span className="text-[0.86rem] text-primary">
                  {multiplier}
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* CTA Button */}
          <LinkButton
            href={APP_ROUTES.app()}
            target="_blank"
            rel="noopener noreferrer"
            variant={isPopular ? "default" : "outline"}
            className={cn("w-full rounded-full h-12", {
              "bg-transparent border-primary": !isPopular,
            })}
          >
            Get started now
          </LinkButton>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-5.5 min-h-[400px]">
        {getFeaturesTitle() && (
          <p className="font-medium text-primary">{getFeaturesTitle()}</p>
        )}
        <ul className="space-y-4 mt-4">
          {plan.summary.map((ft, index) => (
            <li key={index} className="flex items-start gap-2">
              <RightCircleIcon size={20} className="shrink-0 mt-0.5" />
              <span className="leading-relaxed font-normal">{ft}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
