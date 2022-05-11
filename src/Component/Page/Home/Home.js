import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Card from "./Card";
import ServiceHero from "../Services/ServiceHero";
import MakeApponment from "../MakeApponment/MakeApponment";
import Tastmonial from "../Tastmonial/Tastmonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <Services></Services>
      <ServiceHero></ServiceHero>
      <MakeApponment></MakeApponment>
      <Tastmonial></Tastmonial>
    </div>
  );
};

export default Home;
