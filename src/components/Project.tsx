import React from "react";
import { ReactNode } from "react";

interface ProjectProps {
  imgSource: string;
  codeLink: string;
  demoLink: string;
  description: ReactNode;
}

export default class Project extends React.Component<ProjectProps> {
  render(): JSX.Element {
    const { imgSource, codeLink, demoLink, description } = this.props;
    return (
      <div className=" flex flex-col  items-center ">
        {/* PROJECT COINTAINER (WITHOUT BUTTONS) */}
        <div
          className="frame frame-mobile project-container "
          style={
            {
              "--thickness": "4px",
              "--corners-size": "35px",
              "--corners-offsets": "8px",
            } as any
          }
        >
          <div className="relative ">
            {/* PROJECT SCREENSHOT */}
            <img
              src={imgSource}
              alt=""
              width="300px"
              className=" m-4  inline-block sm:max-lg:w-[200px]"
            />
            {/* HOVER DESCRIPTION */}
            <div className=" text-overlay  m-4 w-[300px] sm:max-lg:w-[200px] ">
          
                {description}
             
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex w-1/2 justify-evenly gap-x-5 sm:w-full">
          {/* CODE */}
          <a
            className="h-max rounded-lg bg-[var(--color)] px-8 py-1.5 text-xs font-bold text-white dark:bg-[#737373]  dark:hover:bg-[#4c4c4c]  sm:max-lg:px-4 sm:max-lg:text-[10px]"
            href={codeLink}
            target="_blank"
          >
            CODE
          </a>
          {/* DEMO */}
          <a
            className="h-max rounded-lg bg-[var(--color)] px-8 py-1.5  text-xs font-bold text-white dark:bg-[#737373] dark:hover:bg-[#4c4c4c]  sm:max-lg:px-4  sm:max-lg:text-[10px]"
            href={demoLink}
            target="_blank"
          >
            DEMO
          </a>
        </div>
      </div>
    );
  }
}
