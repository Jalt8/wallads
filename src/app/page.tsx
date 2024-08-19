import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CTA from "@/components/home/CTASection";
import BenefitsOverview from "@/components/home/BenefitsOverview";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import ExistingWalls from "@/components/home/ExistingWalls";
import EasySteps from "@/components/home/EasySteps";
import TestimonialsSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsOverview />
      <PortfolioShowcase />
      <ExistingWalls />
      <EasySteps />
      <TestimonialsSection />
      <CTA
        title="Turn Walls into Wonders with Impactful Advertising"
        subtitle="Transform blank spaces into powerful brand messages that captivate and convert"
        features={[
          "Eye-catching designs that demand attention",
          "Custom murals tailored to your brand identity",
          "Proven to increase foot traffic and sales",
        ]}
        buttonText="Get Your Free Quote"
        buttonLink="/quote"
      />
    </main>
  );
}
