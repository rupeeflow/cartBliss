import AboutBanner from "@/app/components/AboutBanner";
import AboutHero from "@/app/components/AboutHero";
import AboutSecond from "@/app/components/AboutSecond";
import AboutSocial from "@/app/components/AboutSocials";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutSecond />
      <AboutBanner />
      <AboutSocial />
    </div>
  );
};

export default AboutPage;
