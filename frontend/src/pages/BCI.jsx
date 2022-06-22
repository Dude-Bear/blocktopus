import React, { useMemo } from "react";
import CalculateIndexBox from "../components/CalculateIndexBox";
import { COLUMNS } from "../components/columns2";
import Table from "../components/Table.jsx";

function BCI({ topCoins, setSelectedRows, selectedRows }) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => topCoins, [topCoins]);

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-3">
          <CalculateIndexBox selectedRows={selectedRows} />
          <Table
            columns={columns}
            data={data}
            onRowSelectStateChange={setSelectedRows}
          />
        </div>
      </main>
    </div>
  );
}

export default BCI;
