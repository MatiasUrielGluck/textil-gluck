import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage } from "../pages";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
