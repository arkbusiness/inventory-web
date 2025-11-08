import { Container } from "@/components/layouts/container";
import {
  CTASection,
  DashboardPreview,
  Hero,
  WhyARK
} from "@/features/landing";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Container className="mt-12">
        <DashboardPreview />
      </Container>
      <div className="mt-12">
        <WhyARK />
      </div>
      <CTASection />
    </>
  );
}
