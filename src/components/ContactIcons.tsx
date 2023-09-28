import React from "react";
import email from "../assets/email-icon.png";
import github from "../assets/github-icon.png";
import linkedin from "../assets/linkedin-icon.png";

import githubLight from "../assets/github-icon-light.png";
import { isMobile } from "react-device-detect";

export default class ContactIcons extends React.Component {
  render(): JSX.Element {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return (
      <div className="contact-icons-animation absolute bottom-0  left-[-26px] mb-5 flex flex-col">
        <a
          target="_blank"
          href="mailto:jakub.kloc@proton.me"
          className={
            isMobile ? "no-blue-tap  h-14 w-20" : " bigger-icon-hover h-14 w-20"
          }
        >
          <img className="h-9 w-9 duration-500" src={email} />
        </a>

        <a
          target="_blank"
          href="https://github.com/jakubkloc"
          className={
            isMobile ? "no-blue-tap  h-14 w-20" : " bigger-icon-hover h-14 w-20"
          }
        >
          <img
            className="h-9 w-9 duration-500"
            src={isDarkMode ? github : githubLight}
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jakub-kloc-744833292"
          className={
            isMobile ? "no-blue-tap  h-14 w-20" : " bigger-icon-hover h-14 w-20"
          }
        >
          <img className="h-9 w-9 duration-500" src={linkedin} />
        </a>
      </div>
    );
  }
}
