import React from "react";

import LoadingBar from "./components/LoadingBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactIcons from "./components/ContactIcons";
import backArrow from "./assets/back-arrow.png";

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

import { ActiveIndexContext } from "./helpers/ActiveIndexContext";

import { isMobile } from "react-device-detect";
import Table from "./components/Table";
interface ExtendedCarousel extends Carousel {
  goTo: (index: number) => void;
}

function App(): JSX.Element {
  const [start, setStart] = React.useState(false);
  const [loadingBarFinished, setLoadingBarFinished] = React.useState(false);
  const carouselRef = React.useRef<ExtendedCarousel>(null);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [mobileTable, setMobileTable] = React.useState(false);

  return (
    <div>
      <ActiveIndexContext.Provider value={{ activeIndex, setActiveIndex }}>
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
                <AboutMe goTo={goTo.bind(null, carouselRef)} />{" "}
              </Item>
              <Item>
                <Projects goTo={goTo.bind(null, carouselRef)} />
              </Item>
              <Item>
                <TechStack goTo={goTo.bind(null, carouselRef)} />
              </Item>
              <Item>
                <KnowledgeBase
                  setMobileTable={() => {
                    setMobileTable(true);
                  }}
                />
              </Item>
            </Carousel>
          ) : (
            <LoadingBar />
          ))}
      </ActiveIndexContext.Provider>
      {start && <ContactIcons />}
      {start && <Footer />}

      {isMobile && mobileTable && (
        <div className="mobile-table fixed left-0 top-0 z-40 h-full w-full">
          <Table />
          <button
            onClick={() => setMobileTable(false)}
            className="fixed bottom-2 right-5 z-50 "
          >
            <img className="h-8 w-8 rounded-full" src={backArrow} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
