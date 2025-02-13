"use client";

import React from "react";
import { Container } from "react-bootstrap";

import cchp from "@/public/images/cchp.jpg";

export default function CCHPSystem() {
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "72vh",
          backgroundImage:
            "url('https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg')",
          backgroundOrigin: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            position: "relative",
          }}
        >
          <div
            className="display-2"
            style={{
              position: "absolute",
              bottom: 0,
              left: isMobile ? "-1rem" : "5rem",
              margin: isMobile ? "2rem" : "5rem",
              fontWeight: "700",
            }}
            data-aos="fade-up"
          >
            BROAD CCHP
          </div>
        </div>
      </div>
      <Container style={{ margin: isMobile ? "1rem 0.5rem" : "5rem 6rem" }}>
        <div className="display-6 mb-4">COMBINED COOLING-HEATING-POWER</div>
        <div className="row">
          <div className="col-md-12">
            <img src={cchp.src} alt="cchp" style={{ width: "100%" }} />
          </div>
          <br />
          <br />
          <div className="col-md-12 mt-3">
            <ul>
              <li>Achieves zero emission with exhaust heat as power source.</li>
              <li>
                For more than 100 years, thermal power plants have been located
                a considerable distance from urban areas and waste heat can not
                be easily utilized. The energy loss from voltage fluctuation and
                long-distance power transmission has reached 2/3 in most cases,
                but this centralized energy model has been regarded as
                reasonable enough all the time.
              </li>
              <li>
                In 1999, BROAD pioneered the distributed energy model - the CCHP
                System powered by exhaust heat from a turbine generator. This
                system has been applied in more than 70 countries and has
                typically doubled the energy efficiency of most projects, and is
                equals to - zero energy cost for cooling and heating.
              </li>
              <li>
                With the growing awareness of the climate change crisis, local
                distributed CCHP systems will ultimately displace the bulk grid
                ones, just as wireless communications largely replacing hard
                wired communications.
              </li>
            </ul>
            <a href="/files/CCHP.pdf" className="btn btn-primary">
              Download Catalog
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
