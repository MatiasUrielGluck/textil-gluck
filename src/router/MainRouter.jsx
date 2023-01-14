import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
