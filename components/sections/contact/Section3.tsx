import { useTranslations } from "next-intl";

function Section3() {
  const t = useTranslations("ContactPage");
  return (
    <div
      className="contact-inner-section sp1"
      style={{ backgroundColor: "#fff", backgroundImage: "../" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="memory-header text-center heading2 space-margin60">
              <h5 data-aos="fade-left" data-aos-duration={800}>
                {t("section3.title")}
              </h5>
              <div className="space16" />
              <h2 className="text-anime-style-3">{t("section3.subtitle")} </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-12"
            style={{
              paddingTop: 11,
              paddingBottom: 11,
              borderRadius: 10,
              borderColor: "#a88a7b",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderStyle: "solid",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26709.817557352668!2d-8.588655!3d33.195027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda919236ccd5a91%3A0xec525f0bcca21984!2sMoulay%20Abdallah%20Amghar%2C%20Morocco!5e0!3m2!1sen!2sus!4v1746522671849!5m2!1sen!2sus"
              width={1300}
              height={650}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
