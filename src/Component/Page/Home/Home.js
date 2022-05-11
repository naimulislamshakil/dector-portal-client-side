import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Card from "./Card";
import ServiceHero from "../Services/ServiceHero";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <Services></Services>
      <ServiceHero></ServiceHero>
    </div>
  );
};

export default Home;
