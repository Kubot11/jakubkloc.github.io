import React from "react";

import iconStart from "../assets/icon-start.svg";
import iconAboutMe from "../assets/icon-about-me.svg";
import iconProjects from "../assets/icon-projects.svg";
import iconTechStack from "../assets/icon-tech-stack.svg";
import iconKnoledgeBase from "../assets/icon-knowledge-base.svg";
import iconCV from "../assets/icon-CV.svg";
import { isMobile } from "react-device-detect";

import { ActiveIndexContext } from "../helpers/ActiveIndexContext";

interface NavbarProps {
  goTo: (index: number) => void;
  setStart: (value: boolean) => void;
  setLoadingBarFinished: (value: boolean) => void;
}

interface NavbarState {
  smallScreen: boolean;
}

export default class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      smallScreen: window.innerWidth < 640,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const smallScreen = window.innerWidth < 640;
    if (smallScreen !== this.state.smallScreen) {
      this.setState({ smallScreen });
    }
  };

  render(): JSX.Element {
    const { goTo, setStart, setLoadingBarFinished } = this.props;
    const { smallScreen } = this.state;
    return (
      <ActiveIndexContext.Consumer>
        {({ activeIndex, setActiveIndex }) => (
          <nav className="navbar-animation border-color-custom-bars-highlines absolute left-0 top-[-48px]  z-10  flex h-12 w-full min-w-max items-center justify-evenly overflow-x-hidden border-b bg-[var(--color)]">
            {/* START */}
            <a
              onClick={() => {
                setStart(false);
                setLoadingBarFinished(false);
                setActiveIndex(0);
              }}
              className="cursor-custom-action  p-1.5 text-custom-font hover:opacity-75"
            >
              {smallScreen ? <img className="w-7 " src={iconStart} /> : "START"}
            </a>

            {/* ABOUT ME */}
            <a
              onClick={() => {
                goTo(0);
                setActiveIndex(0);
              }}
              className={`cursor-custom-action text-custom-font hover:opacity-75 ${
                activeIndex == 0 && isMobile
                  ? "rounded-full bg-white p-1.5"
                  : ""
              }`}
            >
              {smallScreen ? (
                <img className="w-7" src={iconAboutMe} />
              ) : (
                "O MNIE"
              )}
            </a>

            {/* PROJECTS */}
            <a
              onClick={() => {
                goTo(1);
                setActiveIndex(1);
              }}
              className={`cursor-custom-action text-custom-font hover:opacity-75 ${
                activeIndex == 1 && isMobile
                  ? "rounded-full bg-white p-1.5"
                  : ""
              }`}
            >
              {smallScreen ? (
                <img className="w-7" src={iconProjects} />
              ) : (
                "PROJEKTY"
              )}
            </a>

            {/* TECH STACK */}
            <a
              onClick={() => {
                goTo(2);
                setActiveIndex(2);
              }}
              className={`cursor-custom-action text-custom-font hover:opacity-75 ${
                activeIndex == 2 && isMobile
                  ? "rounded-full bg-white p-1.5"
                  : ""
              }`}
            >
              {smallScreen ? <img src={iconTechStack} /> : " TECHNOLOGIE"}
            </a>

            {/* KNOWLEDGE BASE */}
            <a
              onClick={() => {
                goTo(3);
                setActiveIndex(3);
              }}
              className={`cursor-custom-action text-custom-font hover:opacity-75 ${
                activeIndex == 3 && isMobile
                  ? "rounded-full bg-white p-1.5"
                  : ""
              }`}
            >
              {smallScreen ? (
                <img className="w-7" src={iconKnoledgeBase} />
              ) : (
                "BAZA WIEDZY"
              )}
            </a>

            {/* DOWNLOAD CV */}
            <a
              href="/Jakub-Kloc-Resume.pdf"
              download
              onClick={(event) => {
                window.open(event.currentTarget.href, "_blank");
              }}
              className="text-custom-font hover:opacity-75"
            >
              {smallScreen ? (
                <img className="w-7" src={iconCV} />
              ) : (
                "POBIERZ CV"
              )}
            </a>
          </nav>
        )}
      </ActiveIndexContext.Consumer>
    );
  }
}
