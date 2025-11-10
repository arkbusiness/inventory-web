"use client";

import { Container } from "@/components/layouts/container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { PRICING_PERIODS, PRICING_PLANS } from "@/constants/pricing";
import { IntervalEnum } from "@/types";
import { useMemo, useState } from "react";
import { PlanCard } from "./plan-card";

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
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} multiplier={multiplier} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
