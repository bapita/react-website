import React from "react";
import Common from './Common';
import homeimg from "../src/images/img2.svg";

const Home = () => {
  return(
    <>
        <Common
        text="Grow Your Business With "
        strtext="Automation Testing"
        paratext="I am having 5+ years of experience in Testing. I love doing automation tests using Selenium Webdriver JAVA, 
        and reports using TestNG framework. I have learnt Cypress too. If interested, let's discuss."
        img={homeimg}
        />
    </>
  );
}

export default Home;