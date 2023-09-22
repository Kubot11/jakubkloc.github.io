import React from "react";
import Frame from "../components/Frame";
import { isMobile } from "react-device-detect";
import NextBtn from "../components/NextBtn";

import { ActiveIndexContext } from "../helpers/ActiveIndexContext";
interface AboutMeProps {
  goTo: (index: number) => void;
}

interface AboutMeState {
  isScrolled: boolean;
}

export default class AboutMe extends React.Component<
  AboutMeProps,
  AboutMeState
> {
  constructor(props: AboutMeProps) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    const container = document.getElementById("aboutMe")?.parentElement;

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
        id="aboutMe"
        className="flex h-full w-full  animate-brightening flex-col items-center justify-between gap-4 sm:px-8 sm:py-3 md:px-16 md:py-5 lg:px-20 "
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
          O Mnie
        </h1>

        <div className="content-container flex  flex-col items-center gap-8 pb-12 sm:flex-row sm:items-stretch sm:pb-0 sm:max-md:flex-col  sm:max-md:items-center md:max-lg:gap-1">
          <Frame cornersSize={"80px"} thickness={"4px"} cornersOffsets="6px">
            <img
              className="
              frame-content
              w-[300px]
              max-w-[380px] 
              sm:max-w-[60px] 
              md:max-w-[200px]  
              lg:w-[250px]  "
              src=""
              alt=""
            />
          </Frame>
          <Frame cornersSize={"80px"} thickness={"4px"} cornersOffsets="6px">
            <div
              className={`${
                isMobile ? "w-[300px]" : ""
              } frame-content    max-w-[380px] 
              sm:w-auto  sm:max-w-none`}
            >
              <p className="p-5  text-lg sm:max-md:p-1 sm:max-md:text-[13px] md:max-lg:p-1 md:max-lg:text-[10px] lg:max-xl:p-1 lg:max-xl:text-[13px] xl:max-2xl:p-1.5  ">
                Naukę programowania zacząłem w lutym 2022 roku, kiedy obroniłem
                tytuł inżyniera z kierunku Mechatronika (wtedy już wiedziałem,
                że zmieniam kierunek swojego życia i chce związać się z
                programowaniem). Od półtora roku staram się poświęcać
                programowaniu kilka godzin dziennie od poniedziałku do piątku.
                Zaczynałem od zera. Poszerzam swoją wiedzę zgodnie z mapą{" "}
                <a
                  className="text-[--color]"
                  href="https://roadmap.sh/frontend"
                >
                  Frontend Developer
                </a>
                , lecz docelowo chce zostać Full Stack Developerem.
                <br />
                <br />
                Poza programowaniem hobbystycznie interesuje się muzyką oraz
                rozwojem osobistym. Jestem osobą szczerą, uważam, że komunikacja
                jest kluczem do sprawnego działania, zawsze wierzę w siebie,
                jestem osobą konsekwetną, lecz nie jestem zamknięty na jedną
                ścieżkę, gdy dostrzeże nowe możliwości.
              </p>
            </div>
          </Frame>
          <div className="mb-[5vh]">
            <ActiveIndexContext.Consumer>
              {({ setActiveIndex }) => (
                <NextBtn
                  isMobile
                  onClick={() => {
                    goTo(1);
                    setActiveIndex(1);
                  }}
                  isScrolled={this.state.isScrolled}
                />
              )}
            </ActiveIndexContext.Consumer>
          </div>
        </div>
        <div className=" grow basis-0"></div>
        <div
        ></div>
      </div>
    );
  }
}
