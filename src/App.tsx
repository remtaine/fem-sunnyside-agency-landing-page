import Header from "components/Header";
import React from "react";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App max-w-screen min-h-screen bg-fem-50 font-barlow font-semibold selection:bg-fem-600 selection:text-fem-50">
      <Navbar />
      <Header />
      <main className="">
        <Testimonials />
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
