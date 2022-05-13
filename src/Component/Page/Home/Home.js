import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Card from "./Card";
import MakeApponment from "../MakeApponment/MakeApponment";
import Tastmonial from "../Tastmonial/Tastmonial";
import HomeContact from "../HomeContact/HomeContact";
import Footer from "../../Shered/Footer/Footer";
import ServiceProp from "../Services/ServiceProp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <Services></Services>
      <ServiceProp></ServiceProp>
      <MakeApponment></MakeApponment>
      <Tastmonial></Tastmonial>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
