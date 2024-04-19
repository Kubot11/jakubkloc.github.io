import React from "react";
import Project from "../components/Project";
import NextBtn from "../components/NextBtn";
import { ActiveIndexContext } from "../helpers/ActiveIndexContext";

import portfolioPoster from "../assets/portfolio-poster.png";
import TMDBPoster from "../assets/TMDB-poster.png";
import tenziesPoster from "../assets/tenzies-poster.png";
import quizzicalPoster from "../assets/quizzical-poster.png";
import portfolioMKPoster from "../assets/portfolioMK-poster.png"

interface ProjectsProps {
  goTo: (index: number) => void;
}

interface ProjectsState {
  isScrolled: boolean;
}

export default class Projects extends React.Component<
  ProjectsProps,
  ProjectsState
> {
  constructor(props: ProjectsProps) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    const container = document.getElementById("projects")?.parentElement;

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
        id="projects"
        className="md:px-15 flex h-full w-full flex-col items-center gap-4 sm:px-8 lg:px-20"
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
          Wybrane Projekty
        </h1>

        <div className="content-container flex w-full  flex-col  gap-y-20 sm:gap-y-12 sm:pb-12">
          <div className="flex flex-col justify-evenly gap-y-20 sm:mb-0 sm:flex-row sm:gap-y-[normal] ">
            {/* TMDB WEBSITE */}
            <Project
              description={
                <p className="p-4 text-left text-base sm:max-lg:p-2 sm:max-lg:text-[12px] sm:max-lg:leading-4 ">
                  Wyszukiwarka filmów z bazy danych The Movie Database zbudowana
                  na podstawie kursu&nbsp;
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://youtu.be/nTeuhbP7wdE"
                  >
                    FreeCodeCamp
                  </a>
                  , synchronizuje ocenione filmy z kontem na{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.themoviedb.org/?language=pl"
                  >
                    &nbsp; TMDB&nbsp;
                  </a>{" "}
                  i wyświetla oceny już ocenionych Wykorzystuje
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://styled-components.com/"
                  >
                    &nbsp; Styled Components
                  </a>
                  ,
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://reactrouter.com/en/main"
                  >
                    &nbsp; React Router&nbsp;
                  </a>{" "}
                  oraz
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.npmjs.com/package/prop-types"
                  >
                    &nbsp; PropTypes
                  </a>
                  . Wykorzystane API:
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://developer.themoviedb.org/reference/intro/getting-started"
                  >
                    &nbsp; TMDB API&nbsp;
                  </a>
                  Funkcjonalność wprowadzona przeze mnie ponad to co zawierał
                  kurs:
                  <br /> - ukrycie API KEY za pomocą wykorzystania
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.netlify.com/products/functions/"
                  >
                    &nbsp; Netlify Functions&nbsp;
                  </a>
                  ,<br />
                  -przetłumaczenie strony na język polski z użyciem biblioteki
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.i18next.com/"
                  >
                    &nbsp; i18next,
                    <br />
                  </a>
                  - poprawienie logowania, oceniania filmu i responsywności na
                  urządzeniach mobilnych
                </p>
              }
              imgSource={TMDBPoster}
              codeLink="https://github.com/jakubkloc/react-rmdb-app"
              demoLink="https://react-app-movie-database.netlify.app"
            />
            {/* QUIZZICAL APP */}
            <Project
              description={
                <p className="p-4 text-left text-base sm:max-lg:p-2 sm:max-lg:text-[12px] sm:max-lg:leading-4 ">
                  Aplikacja quizowa napisana na podstawie kursu{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://scrimba.com/learn/learnreact/solo-project-pro-quizzical-co63f4a65ac316545d08e1674"
                  >
                    Scrimba
                  </a>
                  . Z wykorzystaniem API{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://opentdb.com/"
                  >
                    Open Trivia DB
                  </a>
                  . Autor kursu udostępnił jedynie design w{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.figma.com/"
                  >
                    figmie
                  </a>{" "}
                  oraz wskazał, z którego API skorzystać. Cała logika aplikacji,
                  zapytania do API, strona z ustawieniami i dostosowanie
                  aplikacji na urządzenia mobilne zostały zakodowane przeze
                  mnie. Wykorzystałem biblioteki{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://reactrouter.com/en/main"
                  >
                    React Router
                  </a>
                  &nbsp;i&nbsp;
                  <a
                    target="_blank"
                    href="https://www.npmjs.com/package/prop-types"
                    className="font-bold text-[--color]"
                  >
                    Prop Types
                  </a>
                  .
                </p>
              }
              imgSource={quizzicalPoster}
              codeLink="https://github.com/jakubkloc/quizzical-app"
              demoLink="https://quizzical-react-app-scrimba.netlify.app"
            />
          </div>
          <div className=" flex flex-col justify-evenly gap-y-20 sm:mb-0 sm:flex-row sm:gap-y-[normal] ">
            {/* TENZIES GAME */}
            <Project
              description={
                <p className="p-4 text-left text-base sm:max-lg:p-2 sm:max-lg:text-[12px] sm:max-lg:leading-4 ">
                  Gra w{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://scrimba.com/playlist/pYkgpAP"
                  >
                    &nbsp;React&nbsp;
                  </a>{" "}
                  polegająca na rzucie kośćmi zbudowana na podstawie kursu:{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://scrimba.com/playlist/pYkgpAP"
                  >
                    Scrimba
                  </a>
                  . Design został odwzorowany z{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.figma.com/file/FqsxRUhAaXM4ezddQK0CdR/Tenzies?type=design&node-id=0-1&mode=design"
                  >
                    &nbsp; Figmy
                  </a>
                  . Rozbudowałem grę o elementy proponowane przez autora kursu,
                  ponadto: dodałem ekran startowy, animacje potrząsania kośćmi,
                  efekty dźwiękowe, zadbałem o funkcjonowanie na urządzeniach
                  mobilnych i wykorzystałem bibliotekę{" "}
                  <a
                    target="_blank"
                    href="https://www.npmjs.com/package/prop-types"
                    className="font-bold text-[--color]"
                  >
                    Prop Types
                  </a>
                  .
                </p>
              }
              imgSource={tenziesPoster}
              codeLink="https://github.com/jakubkloc/tenzies"
              demoLink="https://tenzies-dice-game-react-app.netlify.app"
            />
            {/* PORTFOLIO PAGE  */}
            <Project
              description={
                <p className="p-4 text-left text-base sm:max-lg:p-2 sm:max-lg:text-[12px] sm:max-lg:leading-4 ">
                  Strona, którą właśnie przeglądasz, napisana w{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://sag1v.github.io/react-elastic-carousel/"
                  >
                    &nbsp;React&nbsp;
                  </a>{" "}
                  z wykorzystaniem{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://tailwindcss.com/"
                  >
                    &nbsp;Tailwind&nbsp;
                  </a>{" "}
                  i{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://tailwindcss.com/"
                  >
                    &nbsp;Typescipt
                  </a>
                  . Funkcjonuje również w wersji mobilnej. Wykorzystałem
                  bibliotekę{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://sag1v.github.io/react-elastic-carousel/"
                  >
                    {" "}
                    React Elastic Carousel
                  </a>{" "}
                  oraz
                  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://www.ag-grid.com/"
                  >
                    {" "}
                    AG Grid
                  </a>
                  . Zaprojektowałem design w{" "}
                  <a
                    target="_blank"
                    className="font-bold text-[--color] "
                    href="https://www.canva.com/"
                  >
                    Canva
                  </a>
                  , przeprogramowałem znalezione animacje CSS na własny użytek
                  znacznie modyfikując kod i{" "}
                  <a
                    target="_blank"
                    href="https://codepen.io/collection/zxmvLw"
                  >
                    rozszerzając ich funkcje
                  </a>
                  .
                </p>
              }
              imgSource={portfolioPoster}
              codeLink="https://github.com/jakubkloc/jakubkloc.github.io"
              demoLink="https://jakubkloc.github.io"
            />
 {/* PORTFOLIO MK PAGE  */}
 <Project
              description={
                <p className="p-4 text-left text-base sm:max-lg:p-2 sm:max-lg:text-[12px] sm:max-lg:leading-4 ">
                  Wykorzystałem tu podejście headless CMS. Front-end napisałem w  <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://sag1v.github.io/react-elastic-carousel/"
                  >
                    &nbsp;Astro&nbsp;
                  </a> (z zastsowaniem możliwości tej technologii takich jak: SSR, smooth transition API, routing, Astro Islands). Napisałem fukncje asynchroniczne fetchujące na żadanie klienta zawartość podstron z <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://astro.build/"
                  >
                    &nbsp;Wordpressa&nbsp;
                  </a>. Komunikacja między Wordpressem a Astro odbywa się za pomocą zapytań <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://wordpress.org/"
                  >
                    &nbsp;GraphQL&nbsp;
                  </a>. Ostatecznie aby zahostować aplikacje dokonałem jej konteneryzacji w <a
                    target="_blank"
                    className="font-bold text-[--color]"
                    href="https://graphql.org/"
                  >
                    &nbsp;Docker&nbsp;
                  </a>. Wykorzystałem do tego docker-compose, wykorzystując oficjalne obrazy Wordpressa i MySQL oraz Adminera, tworząc włąsny obraz Astro połączyłem te  4 usługi w jednej sieci, używając woluminów do przechowania zmian. 
                </p>
              }
              imgSource={portfolioMKPoster}
              demoLink="http://majakozlowskaart.com/"
            />

          </div>
        </div>
        <div className="flex justify-center py-20 sm:hidden">
          <ActiveIndexContext.Consumer>
            {({ setActiveIndex }) => (
              <NextBtn
                isMobile
                onClick={() => {
                  goTo(2);
                  setActiveIndex(2);
                }}
                isScrolled={this.state.isScrolled}
              />
            )}
          </ActiveIndexContext.Consumer>
        </div>
        <div className=" grow basis-0"></div>
      </div>
    );
  }
}
