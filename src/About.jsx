import React from "react";
import Common from './Common';
import aboutimg from "../src/images/img3.svg";

const About = () => {
  return(
    <>
        <Common
        text="Thanks for spending your precious time on an "
        strtext="Automation Tester"
        paratext="I do RSKM, CAPA, QA audit for ISO and CMMi L3 processes as well as Selenium Java architecture
        build up"
        img={aboutimg}
        />
    </>
  );
}

export default About;