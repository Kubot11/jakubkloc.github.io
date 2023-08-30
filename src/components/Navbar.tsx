import React from "react";

import iconStart from "../assets/icon-start.svg";
import iconAboutMe from "../assets/icon-about-me.svg";
import iconProjects from "../assets/icon-projects.svg";
import iconTechStack from "../assets/icon-tech-stack.svg";
import iconKnoledgeBase from "../assets/icon-knowledge-base.svg";
import iconCV from "../assets/icon-CV.svg";

interface NavbarProps {
  goTo: (index: number) => void;
  setStart: (value: boolean) => void;
  setLoadingBarFinished: (value: boolean) => void;
}
export default class Navbar extends React.Component<NavbarProps> {
  state = {
    isMobile: window.innerWidth < 640,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };

  render(): JSX.Element {
    const { goTo, setStart, setLoadingBarFinished } = this.props;
    const { isMobile } = this.state;
    return (
      <nav className="navbar-animation border-color-custom-bars-highlines absolute left-0  top-[-48px] z-10 flex h-12 w-full min-w-max items-center justify-evenly overflow-x-hidden border-b bg-[var(--color)]">
        {/* <div className="mx-auto text-custom-font">Jakub Kloc</div> */}
        {/* <div className=" flex  justify-around lg:gap-x-24 sm:gap-x-12 "> */}
        <a
          onClick={() => {
            setStart(false);
            setLoadingBarFinished(false);
          }}
          className="  cursor-custom-action text-custom-font hover:opacity-75"
        >
          {isMobile ? <img className="w-7" src={iconStart} /> : "START"}
        </a>
        <a
          onClick={() => {
            goTo(0);
          }}
          className="cursor-custom-action text-custom-font hover:opacity-75"
        >
          {isMobile ? <img className="w-7" src={iconAboutMe} /> : "O MNIE"}
        </a>
        <a
          onClick={() => {
            goTo(1);
          }}
          className="cursor-custom-action text-custom-font hover:opacity-75"
        >
          {isMobile ? <img className="w-7" src={iconProjects} /> : "PROJEKTY"}
        </a>
        <a
          onClick={() => {
            goTo(2);
          }}
          className="cursor-custom-action text-custom-font hover:opacity-75"
        >
          {isMobile ? <img src={iconTechStack} /> : " TECHNOLOGIE"}
        </a>
        <a
          onClick={() => {
            goTo(3);
          }}
          className="cursor-custom-action text-custom-font hover:opacity-75"
        >
          {isMobile ? (
            <img className="w-7" src={iconKnoledgeBase} />
          ) : (
            "BAZA WIEDZY"
          )}
        </a>
        <a className="text-custom-font hover:opacity-75">
          {isMobile ? <img className="w-7" src={iconCV} /> : "POBIERZ CV"}
        </a>
        {/* </div> */}
      </nav>
    );
  }
}
