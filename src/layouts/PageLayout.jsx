import { Footer, Navbar, WhatsappBtn } from "../components";

export const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <WhatsappBtn />
      <Footer />
    </div>
  );
};
