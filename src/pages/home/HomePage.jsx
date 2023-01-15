import React from "react";
import { Navbar } from "../../components";
import { MapSection, Presentation } from "./components";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <MapSection />
    </div>
  );
};
