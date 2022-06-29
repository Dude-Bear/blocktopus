import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { COLUMNS } from "../components/ColumnsForPersonalIndex";
import SaveIndexBox from "../components/SaveIndexBox";
import TableForPersonalIndex from "../components/TableForPersonalIndex";

const PersonalIndex = (selectedRows) => {
  const columns = useMemo(() => COLUMNS, []);
  const location = useLocation();

  const data = selectedRows.selectedRows;

  for (let i of data) {
    i.proportion_invested =
      (location.state.data.amount * i.personal_index_market_share) / 100;
  }

  return (
    <div>
      <div className="min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-3">
            <SaveIndexBox selectedRows={selectedRows}></SaveIndexBox>
            <TableForPersonalIndex columns={columns} data={data} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalIndex;
