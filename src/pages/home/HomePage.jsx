import React from "react";
import { Footer, Navbar, WhatsappBtn } from "../../components";
import { MapSection, Presentation } from "./components";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <MapSection />
      <WhatsappBtn />
      <Footer />
    </div>
  );
};
