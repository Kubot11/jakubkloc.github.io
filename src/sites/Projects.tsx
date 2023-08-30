import React from "react";
import Project from "../components/Project";
import image from "../assets/image.png";

export default class Projects extends React.Component {
  render(): JSX.Element {
    return (
      <div className="md:px-15 flex h-full w-full flex-col items-center gap-4 sm:px-8 lg:px-20">
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

        <div className="flex w-full flex-col  gap-y-20 pb-12  sm:gap-y-12 sm:pb-12">
          <div className="flex flex-col justify-evenly gap-y-20 sm:flex-row sm:gap-y-[normal] ">
            <Project
              description="test"
              imgSource={image}
              codeLink=""
              demoLink=""
            />
            <Project
              description="test"
              imgSource={image}
              codeLink=""
              demoLink=""
            />
          </div>
          <div className=" flex flex-col justify-evenly gap-y-20 sm:mb-0 sm:flex-row sm:gap-y-[normal] ">
            <Project
              description="test"
              imgSource={image}
              codeLink=""
              demoLink=""
            />
            <Project
              description="test"
              imgSource={image}
              codeLink=""
              demoLink=""
            />
          </div>
        </div>
        <div className=" grow basis-0"></div>
      </div>
    );
  }
}
