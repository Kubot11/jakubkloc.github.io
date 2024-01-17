import React from "react";
import Frame from "../components/Frame";
import IconsContainer from "../components/IconsContainer";

import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";
import javascript from "../assets/js-logo.png";
import typescript from "../assets/typescript-logo.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind-logo.png";
import vite from "../assets/vite-logo.png";
import npm from "../assets/npm-logo.png";
import vscode from "../assets/vscode-logo.png";
import github from "../assets/github-logo.png";
import NextBtn from "../components/NextBtn";
import { ActiveIndexContext } from "../helpers/ActiveIndexContext";
import { isMobile } from "react-device-detect";
interface TechStackProps {
  goTo: (index: number) => void;
}

interface TechStackState {
  isScrolled: boolean;
}

export default class TechStack extends React.Component<
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
    const { goTo } = this.props;
    return (
      <div
        id="techStack"
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
          Technologie I 
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
            image1={html}
            image2={css}
            tooltipText1="Podstawowe elementy, elementy semantyczne, aria-label i atrybut alt, formularze, znaki specjalne, elementy meta, id, class, atrubuty zdarzeń, tabindex, style, script defer"
            tooltipText2="Podstawowe i zaawansowane właściwości, box model,  display, specyficzność, !important, zapytania media, jednostki, selektory, pseudoklasy i pseudoelementy, z-index, pozycjonowanie, animacje, zmienne, calc(), flexbox, grid, hsla(), rgba()"
          />
          <IconsContainer
            image1={javascript}
            image2={typescript}
            tooltipText1="Znajomość składni, pętla zdarzeń, asynchroniczność, promisy, this, ternary operator, destrukturyzacja, zakres zmiennych, obsługa błędów, dynamiczne importowanie, manipulacja DOM, metody window, delegacja zdarzeń, formularze, Fetch API, teoretyczna znajomość prostych wzorów projektowych"
            tooltipText2="Podstawowe typy, tworzenie interfejsów, union type, prosta konfiguracja projektu"
          />
          <IconsContainer
            image1={react}
            image2={tailwind}
            tooltipText1="Komponenty funkcyjne i klasowe, zarządzeni stanem, useEffect, React refs, React context, customowe hooki"
            tooltipText2="Konfiguracja, responsywność, własne klasy i animacje, nadpisywanie domyślnych styli, motywy"
          />
          <IconsContainer
            image1={vite}
            image2={npm}
            tooltipText1="Konfiguracja z: ESLint, Prettier, TypeScript, Tailwind, React"
            tooltipText2="npm scripts, znajomość pakietów: React Router, i18next, Prop Types, nanoid, AG Grid, nodemon"
          />
          <IconsContainer
            image1={vscode}
            image2={github}
            tooltipText1="Znajomość pluginów ułatwiających pracę (m.in. ESLint i Prettier), skróty klawiszowe, prosta konfiguracja ustawień użytkownika, praca na wbudowanej konsoli"
            tooltipText2="Podstawowa obsługa poleceń git: init, clone, push, commit, sprawdzanie statusu, śledzenie zmian. Forkowanie repozytorium, konfiguracja .gitignore, wdrażanie repozytorium na serwisy typu Netlify i GitHub Pages"
          />
        </div>
        <div className=" flex justify-center py-20 ">
          <ActiveIndexContext.Consumer>
            {({ setActiveIndex }) => (
              <NextBtn
                isMobile
                onClick={() => {
                  goTo(3);
                  setActiveIndex(3);
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
