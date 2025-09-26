import AboutBanner from "@/app/_components/AboutBanner";
import AboutHero from "@/app/_components/AboutHero";
import AboutSecond from "@/app/_components/AboutSecond";
import AboutSocial from "@/app/_components/AboutSocials";
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
