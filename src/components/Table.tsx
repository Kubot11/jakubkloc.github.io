import { useCallback, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  type ColDef,
  type RowClassParams,
  type ICellRendererParams,
} from "ag-grid-community";
import "../../node_modules/ag-grid-community/styles/ag-grid.css";
import "../../node_modules/ag-grid-community/styles/ag-theme-alpine.css";
import { isMobile } from "react-device-detect";

export default function Table(): JSX.Element {
  const durationComparator: (valueA: number, valueB: number) => number = (
    valueA,
    valueB,
  ) => {
    return valueA - valueB;
  };

  const rowData = [
    {
      name: "facebook.com",
      topics: "a",
      duration: "6",
      tasks: "",
      details: "",
    },
    { name: "", topics: "b", duration: "2", tasks: "", details: "" },
    { name: "", topics: "c", duration: "1", tasks: "", details: "" },
    { name: "", topics: "", duration: "3", tasks: "", details: "" },
    { name: "", topics: "", duration: "4", tasks: "", details: "" },
  ];

  // function  CustomHeader ({ column, sort }) {
  //   const handleSort = () => {
  //     sort()
  //     console.log('posortowano')
  //   }

  //   return (
  //     <div onClick={handleSort} className="cursor-custom-action">
  //       {column.displayName}dasd
  //     </div>
  //   )
  // }

  const columnDefs: ColDef[] = [
    {
      field: "name",
      headerName: "Nazwa",
      cellRenderer: function (params: ICellRendererParams) {
        return (
          <a href="" target="_blank">
            {params.value}{" "}
          </a>
        );
      },
      resizable: !isMobile,
      minWidth: 80,
    },
    {
      field: "topics",
      headerName: "Tematyka",
      filter: true,
      sortable: true,
      // headerComponent: CustomHeader,
      headerClass: "cursor-custom-action",
      resizable: !isMobile,
      minWidth: 135,
    },
    {
      field: "duration",
      sortable: true,
      headerName: "Długość",
      comparator: durationComparator,
      cellRenderer: function (params: ICellRendererParams) {
        const stars = params.value;
        const starsCount = parseInt(stars, 10);
        if (!isNaN(starsCount)) {
          let starsString = "";
          for (let i = 0; i < starsCount; i++) {
            starsString += "⭐";
          }
          return <p>{starsString}</p>;
        }
        return "";
      },
      resizable: !isMobile,
      minWidth: 110,
    },
    {
      field: "tasks",
      headerName: "Wykonane zadania",
      cellRenderer: function (params: ICellRendererParams) {
        return (
          <a href="" target="_blank">
            {params.value}{" "}
          </a>
        );
      },
      resizable: !isMobile,
      minWidth: 155,
    },
    {
      field: "details",
      headerName: "Szczegóły",
      minWidth: 100,
      resizable: !isMobile,
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
      };
    } else {
      return {
        backgroundColor: "#22313d",
      };
    }
  }, []);

  return (
    // set the table size
    <div className="table-container m-auto h-half-screen w-3/4 sm:w-11/12 lg:w-3/4">
      <div className="ag-theme-alpine-dark h-full w-full">
        <AgGridReact
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
