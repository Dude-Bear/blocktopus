import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../components/columns.js";

function BCI({ topCoins }) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => topCoins, [topCoins]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h2 className="text-1xl font-bold my-2"> </h2>
        <form>
          <input
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
      <>
        <table
          className="w-full border-collapse text-center"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr className="border-b" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="h-[80px] border-b overflow-hidden"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default BCI;
