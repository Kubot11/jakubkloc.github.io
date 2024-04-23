import React from "react";
import { useEffect } from "react";
import LoadingBar from "./components/LoadingBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactIcons from "./components/ContactIcons";
import backArrow from "./assets/back-arrow.png";

// React-Elastic-Carousel
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from "./components/Item";
import myArrow from "./CarouselFunctions/myArrow";
import goTo from "./CarouselFunctions/goTo";

// sites
import AboutMe from "./sites/AboutMe";
import Projects from "./sites/Projects";
import TechStack from "./sites/TechStack";
import TechStack2 from "./sites/TechStack2";
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
  const [isScrolling, setIsScrolling] = React.useState(false);

  useEffect(() => {
    if (!isMobile) {
      const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        const isTargetTable = target.closest(".table-container") !== null;
        const isLastSlide = activeIndex === 4;

        if (isTargetTable && isLastSlide) {
          return;
        }

        if (!isScrolling) {
          setIsScrolling(true);
          let nextIndex = activeIndex;

          if (e.deltaY < 0 && activeIndex > 0) {
            nextIndex = (activeIndex - 1 + 5) % 5;
          } else if (e.deltaY > 0 && activeIndex < 4) {
            nextIndex = (activeIndex + 1) % 5;
          }
          if (carouselRef.current && nextIndex !== activeIndex) {
            carouselRef.current.goTo(nextIndex);
            setActiveIndex(nextIndex);
          }
          setTimeout(() => setIsScrolling(false), 500);
        }
      };

      window.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [activeIndex, isScrolling, isMobile]);

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
              renderArrow={(props: any) =>
                myArrow({ ...props, setActiveIndex })
              }
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
                <TechStack2 goTo={goTo.bind(null, carouselRef)} />
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
        <div className="mobile-table">
          <div className="fixed left-0 top-0 z-40 h-full w-full portrait:hidden">
            <Table />
            <button
              onClick={() => setMobileTable(false)}
              className="fixed bottom-2 right-5 z-50 "
            >
              <img className="h-8 w-8 rounded-full" src={backArrow} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
