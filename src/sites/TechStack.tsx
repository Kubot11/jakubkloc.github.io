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

export default class TechStack extends React.Component {
  render(): JSX.Element {
    return (
      <div className=" flex h-full  w-full flex-col items-center  gap-4 sm:px-8 lg:px-20">
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
          Technologie
        </h1>
        <div className="mx-6 sm:mx-0">
          <Frame cornersOffsets={"12px"}>
            <p className="frame-content p-4 text-base">
              Po najechaniu na logo zostanie wyświetlony opis mojej znajomości
              danej technologii/narzędzia{" "}
            </p>
          </Frame>
        </div>

        <div className="flex flex-wrap justify-center  gap-16 pb-8 sm:gap-8 sm:pb-0">
          <IconsContainer
            image1={html}
            image2={css}
            tooltipText1="qwewqewqeqweqwewq "
            tooltipText2="sadasdasdassdfsd fsdfsdsdfsdfsdfsdfsdf sdfsdfsdfsdfsd dsf sdf sd fsd fsd"
          />
          <IconsContainer
            image1={javascript}
            image2={typescript}
            tooltipText1=""
            tooltipText2=""
          />
          <IconsContainer
            image1={react}
            image2={tailwind}
            tooltipText1=""
            tooltipText2=""
          />
          <IconsContainer
            image1={vite}
            image2={npm}
            tooltipText1=""
            tooltipText2=""
          />
          <IconsContainer
            image1={vscode}
            image2={github}
            tooltipText1=""
            tooltipText2=""
          />
        </div>
        <div className="grow basis-0"></div>
      </div>
    );
  }
}
