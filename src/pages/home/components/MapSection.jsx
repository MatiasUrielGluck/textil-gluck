import { StyledMapSection } from "../styled-components";

export const MapSection = () => {
  return (
    <StyledMapSection>
      <h1>Visitá nuestro local</h1>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.7627564967306!2d-58.39822671464821!3d-34.60350939814087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaecaec40c35%3A0x1090754610e2cbb8!2sTextil%20Gluck!5e0!3m2!1ses-419!2sar!4v1673743181774!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </StyledMapSection>
  );
};
