import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  // "@sanity/client": "^5.4.2",
  //   "@sanity/image-url": "^1.0.2",
  //   "@testing-library/jest-dom": "^5.16.5",
  //   "@testing-library/react": "^14.0.0",
  //   "@testing-library/user-event": "^14.4.3",
  //   "framer-motion": "^10.11.2",
  //   "react": "^18.2.0",
  //   "react-dom": "^18.2.0",
  //   "react-scripts": "^5.0.1",
  //   "sass": "^1.61.0",
  //   "web-vitals": "^3.3.1"
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
