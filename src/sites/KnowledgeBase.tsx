import React from "react";
import Table from "../components/Table";
import Frame from "../components/Frame";
import { isMobile } from "react-device-detect";

interface KnowledgeBaseProps {
  setMobileTable: (boolean: boolean) => void;
}
export default class KnowledgeBase extends React.Component<KnowledgeBaseProps> {
  render(): JSX.Element {
    const { setMobileTable } = this.props;
    return (
      <>
        <div
          id="knowledgeBase"
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
         md:text-4xl
         "
          >
            Baza Wiedzy
          </h1>
          <div className="content-container mx-6 sm:mx-0">
            <Frame cornersOffsets="6px">
              {isMobile ? (
                <p className="frame-content mx-32 p-4 text-base">
                  W poniższej tabeli zostały wypisane materiały oraz kursy w
                  celu przedstawienia mojej znajomości danego zagadnienia.{" "}
                  <br />
                  <br />
                  Po kliknięciu nazwy kursu zostanie otworzona nowa karta z
                  kursem, analogicznie z wykonanymi zadaniami. <br />
                  <br />
                  Tabele można sortować po tematyce i długości.
                  <br />
                  <br />
                  Legenda:
                  <br />
                  ⭐- krótkie materiały do 60 minut
                  <br />
                  ⭐⭐- materiały od 60 minut do 2 godzin i crash cursy
                  <br /> ⭐⭐⭐- kursy wymagające kilku dni od 2 do paru godzin
                  <br /> ⭐⭐⭐⭐- kursy kilkudziesięciogodzinne
                  <br />
                  ⭐⭐⭐⭐⭐- najbardziej obszerne, najdłuższe kursy{" "}
                </p>
              ) : (
                <p className="frame-content mx-12 my-0 p-4 text-sm leading-relaxed ">
                  W poniższej tabeli zostały wypisane materiały oraz kursy które
                  przepracowałem. <br />
                  Tabele można sortować po tematyce i długości oraz filtrować po
                  tematyce.
                  <br />
                  Szerokość kolumn można zmieniać przytrzymując LPM na kresce
                  rozdzielającej nagłówki
                  <br />
                  Każdy nagłówek wyświetla opis po najechaniu na niego
                </p>
              )}
            </Frame>
          </div>
          {!isMobile && <Table />}

          {isMobile && (
            <div className="flex flex-col items-center gap-4 py-16 ">
              <button
                className="h-max rounded-lg bg-[var(--color)] px-8 py-1.5 text-xs font-bold text-white dark:bg-[#737373]  sm:max-lg:px-4  sm:max-lg:text-[10px]"
                onClick={() => setMobileTable(true)}
              >
                Wyświetl tabele z kursami
              </button>

              <a
                className="mb-4  h-max rounded-lg bg-[var(--color)] px-8 py-1.5 text-xs font-bold text-white dark:bg-[#737373]  sm:max-lg:px-4  sm:max-lg:text-[10px]"
                href="/Jakub-Kloc-Resume.pdf"
                download
                onClick={(event) => {
                  window.open(event.currentTarget.href, "_blank");
                }}
              >
                POBIERZ CV
              </a>
            </div>
          )}
          <div className="grow basis-0 "></div>
        </div>
      </>
    );
  }
}
