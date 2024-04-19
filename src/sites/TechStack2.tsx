import React from "react";
import Frame from "../components/Frame";
import IconsContainer from "../components/IconsContainer";

import mjml from "../assets/mjml-logo.png";
import gitlab from "../assets/gitlab-logo.png";
import windows from "../assets/windows-logo.png";
import macos from "../assets/macos-logo.png";
import php from "../assets/php-logo.svg";
import bootstrap from "../assets/bootstrap-logo.png";
import wordpress from "../assets/wordpress-logo.png";
import sass from "../assets/sass-logo.png";
import astroDark from "../assets/astro-logo-dark.png"
import astro from '../assets/astro-logo.png'
import docker from "../assets/docker-logo.png"

import NextBtn from "../components/NextBtn";
import { ActiveIndexContext } from "../helpers/ActiveIndexContext";
import { isMobile } from "react-device-detect";
interface TechStackProps {
  goTo: (index: number) => void;
}

interface TechStackState {
  isScrolled: boolean;
}

export default class TechStack2 extends React.Component<
  TechStackProps,
  TechStackState
> {
  constructor(props: TechStackProps) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    const container = document.getElementById("techStack")?.parentElement;

    if (container) {
      container.addEventListener("scroll", () => {
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight - 30
        ) {
          this.setState({ isScrolled: true });
        }
      });
    }
  }
  render(): JSX.Element {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const { goTo } = this.props;
    return (
      <div
        id="techStack2"
        className=" flex h-full  w-full flex-col items-center  gap-4 sm:px-8 lg:px-20"
      >
        <h1
          className="
         grow
         basis-0 
         text-center
         sm:self-start 
         sm:py-3 
         sm:text-2xl 
         md:py-5 
         md:text-4xl"
        >
          Technologie II
        </h1>
        <div className="mx-6 sm:mx-0">
          <Frame cornersOffsets={"12px"}>
            {!isMobile && (
              <p className="frame-content p-4 text-base">
                Po najechaniu na logo zostanie wyświetlony opis mojej znajomości
                danej technologii/narzędzia{" "}
              </p>
            )}
          </Frame>
        </div>

        <div className="faster-wrap content-container   mt-12 flex flex-wrap justify-center  gap-16  sm:gap-8 sm:pb-0   lg:mt-24 lg:max-w-[1300px] xl:gap-x-24">
          <IconsContainer
            image1={mjml}
            image2={gitlab}
            tooltipText1="Podstawowe elementy mjml, pisanie responsywnych mailingów"
            tooltipText2="Podstawowy workflow, issue, merge requesty, review, commity itd."
          />
          <IconsContainer
            image1={bootstrap}
            image2={sass}
            tooltipText1="Wykorzystanie klas, implemetowanie komponentów, grid layout system, breakpointy"
            tooltipText2="Zagnieżdżaniem, rozdzielanie stylów do komponentów, stosowanie metodyki BEM"
          />
          <IconsContainer
            image1={php}
            image2={wordpress}
            tooltipText1="Podstawy: zmienne, pobieranie wartości z cms, intsrukcje warunkowe, pętle"
            tooltipText2="Podstawy tworzenia motywu, wtyczka ACF, dodawanie elementów"
          />
          <IconsContainer
            image1={windows}
            image2={macos}
            tooltipText1="Podstawowa obsługa, ponadto: podstawowa obsługa CMD i rejestru, ustawianie zmiennych środowiskowych, PowerToys"
            tooltipText2="Podstawowa obsługa, ponadto: OhMyZSH, homebrew, amethyst, Karabiner-Elements"
          />
           <IconsContainer
            image1={isDarkMode ? astroDark : astro}
            image2={docker}
            tooltipText1="Znajmość koncepcji i narzędzi: Astro Islands, smoothTransition API, SSR, routing, Layout"
            tooltipText2="kontenery, woluminy (utrzymanie stanu), docker-compose, mapowanie portów, komunikacja między kontenerami(docker network), doceker image, dockerfile (tworzenie obrazu), sprawdzanie plików w środowisku kontenera, wykonywanie komend w środowisku kontenera"
          />
        </div>
        <div className=" flex justify-center py-20 ">
          <ActiveIndexContext.Consumer>
            {({ setActiveIndex }) => (
              <NextBtn
                isMobile
                onClick={() => {
                  goTo(4);
                  setActiveIndex(4);
                }}
                isScrolled={this.state.isScrolled}
              />
            )}
          </ActiveIndexContext.Consumer>
        </div>
        <div className="grow basis-0 "></div>
      </div>
    );
  }
}
