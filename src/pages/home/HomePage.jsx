import React from "react";
import { Navbar, WhatsappBtn } from "../../components";
import { MapSection, Presentation } from "./components";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <MapSection />
      <WhatsappBtn />
    </div>
  );
};
