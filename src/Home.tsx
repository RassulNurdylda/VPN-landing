import React from "react";
import Hug from "./components/Hug";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Table from "./components/Table";
import Map from "./components/Map";
import Feedback from "./components/Feedback";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Hug />
      <Table />
      <Info />
      <Plan />
      <Map />
      <Feedback />
      <Subscribe />
      <Footer />
    </main>
  );
};
