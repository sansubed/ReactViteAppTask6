import About from "./about/about";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import Navigation from "./navigation/navigation";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Home />
        <About />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
