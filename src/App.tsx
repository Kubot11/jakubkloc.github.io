import React from "react";

import LoadingBar from "./components/LoadingBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactIcons from "./components/ContactIcons";

// React-Elastic-Carousel
import Carousel, {
  type RenderArrowProps,
} from "@itseasy21/react-elastic-carousel";
import Item from "./components/Item";
import myArrow from "./CarouselFunctions/myArrow";
import goTo from "./CarouselFunctions/goTo";

// sites
import AboutMe from "./sites/AboutMe";
import Projects from "./sites/Projects";
import TechStack from "./sites/TechStack";
import KnowledgeBase from "./sites/KnowledgeBase";

import ThemePicker from "./sites/ThemePicker";

interface ExtendedCarousel extends Carousel {
  goTo: (index: number) => void;
}

function App(): JSX.Element {
  const [start, setStart] = React.useState(false);
  const [loadingBarFinished, setLoadingBarFinished] = React.useState(false);

  const carouselRef = React.useRef<ExtendedCarousel>(null);

  return (
    <div className="">
      {!start && (
        <ThemePicker
          setStart={setStart}
          setLoadingBarFinished={setLoadingBarFinished}
        />
      )}

      {start && (
        <Navbar
          goTo={goTo.bind(null, carouselRef)}
          setStart={setStart}
          setLoadingBarFinished={setLoadingBarFinished}
        />
      )}

      {start &&
        (loadingBarFinished ? (
          <Carousel
            enableSwipe={false}
            verticalMode
            className="carusel-position"
            itemsToShow={1}
            isRTL={false}
            renderPagination={() => <></>}
            renderArrow={(props: RenderArrowProps) => myArrow(props)}
            enableMouseSwipe={false}
            ref={carouselRef}
          >
            <Item>
              {" "}
              <AboutMe />{" "}
            </Item>
            <Item>
              <Projects />
            </Item>
            <Item>
              <TechStack />
            </Item>
            <Item>
              <KnowledgeBase />
            </Item>
          </Carousel>
        ) : (
          <LoadingBar />
        ))}

      {start && <ContactIcons />}
      {start && <Footer />}
    </div>
  );
}

export default App;
