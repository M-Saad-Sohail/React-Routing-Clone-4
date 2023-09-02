import React from "react";
import Navbar from "./navbar";
import Section from "./Section";
function Home() {
  let styleImg = {
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    color: "#fff",
    backgroundImage:
      "url(https://preview.colorlib.com/theme/fitnessclub/assets/img/hero/h1_hero.png)",
  };
  return (
    <div className="App">
      <div style={styleImg}>
        <Navbar />
      </div>
      <Section />
    </div>
  );
}

export default Home;
