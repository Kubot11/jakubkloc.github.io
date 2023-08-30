import React from "react";
import Table from "../components/Table";
import Frame from "../components/Frame";

export default class KnowledgeBase extends React.Component {
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
          Baza Wiedzy
        </h1>
        <div className="mx-6 sm:mx-0">
          <Frame cornersOffsets="6px">
            <p className="frame-content mx-32 p-4 text-base">
              W poniższej tabeli zostały wypisane ukończone przezemnie kursy{" "}
            </p>
          </Frame>
        </div>
        <Table />
        <div className="grow basis-0"></div>
      </div>
    );
  }
}
