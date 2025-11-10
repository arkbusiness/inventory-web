"use client";

import { Container } from "@/components/layouts/container";
import {
  LinkButton,
  RightCircleIcon,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { PRICING_PERIODS, PRICING_PLANS } from "@/constants/pricing";
import { cn } from "@/lib/utils";
import { IntervalEnum } from "@/types";
import { formatCurrency } from "@/utils/format-currency";
import { X } from "lucide-react";
import { useMemo, useState } from "react";

export const PricingCards = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(IntervalEnum.MONTHLY);

  const handlePeriodChange = (period: IntervalEnum) => {
    setSelectedPeriod(period);
  };

  const plans = useMemo(() => {
    return PRICING_PLANS[selectedPeriod];
  }, [selectedPeriod]);

  const getIntervalMultiplier = () => {
    if (!selectedPeriod) return null;

    const intervalLower = selectedPeriod.toLowerCase();
    if (intervalLower.includes("month")) return 3;
    if (intervalLower.includes("semester")) return 6;
    if (intervalLower.includes("annual") || intervalLower.includes("year"))
      return 12;

    return null;
  };

  const multiplier = getIntervalMultiplier();

  return (
    <section className="w-full py-6 bg-highlight">
      <Container>
        <div className="max-w-7xl mx-auto px-4">
          {/* Period Selector */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <Tabs value={selectedPeriod} className="w-auto">
              <TabsList className="bg-cta h-auto py-2 px-10">
                {PRICING_PERIODS.map((period) => (
                  <TabsTrigger
                    key={period.value}
                    value={period.value}
                    className="px-12 h-13 text-secondary data-[state=active]:font-semibold data-[state=active]:bg-white data-[state=active]:text-primary border-0! shadow-none! rounded-[12px]"
                    onClick={() => handlePeriodChange(period.value)}
                  >
                    {period.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {plans.map((plan) => {
              const isPopular = plan.name.includes("Plus");
              const isBasic = plan.name.includes("Basic");
              const isStandard = plan.name.includes("Standard");
              const isBasicPlus = plan.name.includes("Basic Plus");
              return (
                <div
                  key={plan.id}
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
                      <p className="text-foreground leading-relaxed">
                        {plan.description}
                      </p>
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
                            <span className="text-[0.86rem] text-primary ">
                              {multiplier}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      {/* CTA Button */}
                      <LinkButton
                        href="#"
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
                    <p className="font-medium text-primary">
                      {isBasicPlus && "Everything in Basic Plus"}
                      {isBasic && "Everything in Basic"}
                      {isStandard && "All Standard plan features"}
                    </p>
                    <ul className="space-y-4 mt-4">
                      {plan.summary.map((ft, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <RightCircleIcon
                            size={20}
                            className="shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed font-normal">
                            {ft}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
