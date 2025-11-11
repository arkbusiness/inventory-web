import { Container } from "@/components/layouts/container";
import { companyDescription, valuesData } from "@/constants";
import { cn } from "@/lib/utils";

export const CompanyValues = () => {
  return (
    <section className="w-full py-16 bg-background">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Company Description */}
          <div className="text-center mb-16">
            <h2 className="text-black font-semibold text-[clamp(1.5rem,4vw,2rem)] font-montserrat leading-[120%] mb-5">
              {companyDescription.title}
            </h2>
            <p className="text-foreground text-lg leading-relaxed font-medium">
              {companyDescription.description}
            </p>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-black font-semibold text-[clamp(1.5rem,4vw,2rem)] font-montserrat leading-[120%] text-center mb-16">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valuesData.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[280px]",
                    value.backgroundColor,
                    index === 4 && "md:col-span-1",
                  )}
                >
                  <h3 className="text-black font-semibold text-3xl mb-6">
                    {value.title}
                  </h3>
                  <p className="text-black text-base leading-relaxed font-normal max-w-md w-full mx-auto">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
