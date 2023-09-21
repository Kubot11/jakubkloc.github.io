import React, { useCallback, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  type ColDef,
  type RowClassParams,
  type ICellRendererParams,
  type ValueFormatterParams,
} from "ag-grid-community";
import "../../node_modules/ag-grid-community/styles/ag-grid.css";
import "../../node_modules/ag-grid-community/styles/ag-theme-alpine.css";
import { isMobile } from "react-device-detect";
import rowData from "../helpers/TableData";

export default function Table(): JSX.Element {
  const isDarkMode: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const durationComparator: (valueA: number, valueB: number) => number = (
    valueA,
    valueB,
  ) => {
    return valueA - valueB;
  };

  const columnDefs: ColDef[] = [
    {
      field: "name",
      headerName: "Nazwa",
      cellRenderer: function (params: ICellRendererParams) {
        return (
          <a href={params.value[1]} target="_blank" className="break-normal">
            {params.value[0]}{" "}
          </a>
        );
      },
      resizable: !isMobile,
      minWidth: 80,
      cellDataType: "text",
      headerTooltip:
        "nazwa kursu lub tytuł filmu, po kliknięciu otwiera strone kursu lub materiał w nowej karcie",
    },
    {
      field: "topics",
      headerName: "Tematyka",
      filter: true,
      sortable: true,
      headerClass: "cursor-custom-action",
      resizable: !isMobile,
      minWidth: 135,
      maxWidth: 218,
      headerTooltip: "tematyka kursu lub materiału",
    },
    {
      field: "duration",
      sortable: true,
      headerName: "Długość",
      comparator: durationComparator,
      // cellRenderer: function (params: ICellRendererParams) {
      //   const stars = params.value;
      //   const starsCount = parseInt(stars, 10);
      //   if (!isNaN(starsCount)) {
      //     let starsString = "";
      //     for (let i = 0; i < starsCount; i++) {
      //       starsString += "⭐";
      //     }
      //     return <p>{starsString}</p>;
      //   }
      //   return "";
      // },
      valueFormatter: function (params: ValueFormatterParams) {
        const stars = params.value;
        const starsCount = parseInt(stars, 10);
        let starsString = "";
        if (!isNaN(starsCount)) {
          for (let i = 0; i < starsCount; i++) {
            starsString += "⭐";
          }
        }
        return starsString;
      },
      resizable: !isMobile,
      minWidth: 110,
      maxWidth: 135,
      headerTooltip:
        "⭐- krótkie materiały do 60 minut, ⭐⭐- materiały od 60 minut do 2 godzin i crash cursy, ⭐⭐⭐- kursy wymagające kilku dni od 2 do paru godziń, ⭐⭐⭐⭐- kursy kilkudziesięcio godzinne, ⭐⭐⭐⭐⭐- najbardziej obszerne, najdłuższe kursy.",
    },
    {
      field: "tasks",
      headerName: "Wykonane zadania",
      headerTooltip:
        "hiperłącza do materiałów potwierdzających przepracowanie danego kursu lub materiału: notatki, kod, demo, wykonane zadania (jeśli istnieją)",
      cellRenderer: function (params: ICellRendererParams) {
        let links = [];
        for (let i = 0; i < params.value.length; i += 2) {
          links.push(
            <a
              key={i}
              href={params.value[i + 1]}
              target="_blank"
              className="break-normal"
            >
              {params.value[i]}{" "}
            </a>,
          );
        }
        return <div className="flex flex-col ">{links}</div>;
      },
      resizable: !isMobile,
      minWidth: 155,
      maxWidth: 195,
      cellDataType: "text",
    },
    {
      field: "details",
      headerName: "Szczegóły",
      minWidth: 100,
      maxWidth: 290,
      resizable: !isMobile,
      cellClass: "break-normal",
      headerTooltip: "szczegóły związane z wersją kursu lub zakresem",
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      autoHeight: true,
      wrapText: true,
      flex: 1,
      suppressMovable: true,
    }),
    [],
  );

  const getRowStyle = useCallback((params: RowClassParams) => {
    if (params.node.rowIndex !== null && params.node.rowIndex % 2 === 0) {
      return {
        // set color of even rows
        backgroundColor: "var(--color)",
        color: "white",
      };
    } else {
      if (isDarkMode) {
        return {
          backgroundColor: "#22313d",
          color: "white",
        };
      } else {
        return {
          backgroundColor: "#fff",
          color: "dark",
        };
      }
    }
  }, []);

  return (
    // set the table size
    <div
      className={`table-container m-auto ${
        isMobile ? "z-50 h-full w-full" : "h-half-screen  w-11/12"
      }`}
    >
      <div
        className={`${
          isDarkMode ? "ag-theme-alpine-dark" : "ag-theme-alpine"
        }  h-full w-full`}
      >
        <AgGridReact
          rowBuffer={34}
          animateRows={true}
          rowData={rowData}
          columnDefs={columnDefs}
          getRowStyle={getRowStyle}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}
