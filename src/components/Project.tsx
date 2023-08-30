import React from "react";

interface ProjectProps {
  imgSource: string;
  codeLink: string;
  demoLink: string;
  description: string;
}

export default class Project extends React.Component<ProjectProps> {
  render(): JSX.Element {
    const { imgSource, codeLink, demoLink, description } = this.props;
    return (
      <div className=" flex flex-col  items-center ">
        {/* PROJECT COINTAINER (WITHOUT BUTTONS) */}
        <div
          className="frame project-container "
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
              className=" project-image m-4  inline-block sm:max-lg:w-[200px]"
            />
            {/* HOVER DESCRIPTION */}
            <div className="text-overlay w-[300px] sm:max-lg:w-[200px] ">
              <p className="p-4 text-left text-base sm:max-lg:p-2 sm:max-lg:text-[12px] sm:max-lg:leading-4 ">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex w-1/2 justify-evenly gap-x-5 sm:w-full">
          {/* CODE */}
          <a
            className="h-max rounded-lg bg-[#737373] px-8 py-1.5 text-xs font-bold  sm:max-lg:px-4  sm:max-lg:text-[10px]"
            href={codeLink}
          >
            CODE
          </a>
          {/* DEMO */}
          <a
            className="h-max rounded-lg bg-[#737373] px-8 py-1.5 text-xs font-bold sm:max-lg:px-4  sm:max-lg:text-[10px]"
            href={demoLink}
          >
            DEMO
          </a>
        </div>
      </div>
    );
  }
}
