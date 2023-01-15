import { PageLayout } from "../../layouts";
import { MapSection, Presentation } from "./components";

export const HomePage = () => {
  return (
    <PageLayout>
      <div>
        <Presentation />
        <MapSection />
      </div>
    </PageLayout>
  );
};
