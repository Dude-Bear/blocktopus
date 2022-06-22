import React, { useMemo } from "react";
import { COLUMNS } from "../components/ColumnsForPersonalIndex";
import Table from "../components/Table";
import TableForPersonalIndex from "../components/TableForPersonalIndex";

const PersonalIndex = (selectedRows) => {
  const dataForPersonalIndex = [];
  let personalIndexMktCap = 0;

  for (let i of selectedRows.selectedRows) {
    dataForPersonalIndex.push(i.original);
    personalIndexMktCap += i.original.market_cap;
  }

  for (let i of dataForPersonalIndex) {
    i.personal_index_market_share = (i.market_cap / personalIndexMktCap) * 100;
    i.personal_index_market_cap = personalIndexMktCap;
  }

  const columns = useMemo(() => COLUMNS, []);

  return (
    <div>
      <div className="min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-3">
            <h1>Personal Index</h1>

            <TableForPersonalIndex
              columns={columns}
              data={dataForPersonalIndex}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalIndex;
