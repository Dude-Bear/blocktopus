import React, { useMemo } from "react";
import { COLUMNS } from "../components/ColumnsForPersonalIndex";
import Table from "../components/Table";
import TableForPersonalIndex from "../components/TableForPersonalIndex";

const PersonalIndex = (selectedRows) => {
  const data = [];
  let personalIndexMktCap = 0;

  for (let i of selectedRows.selectedRows) {
    data.push(i.original);
    personalIndexMktCap += i.original.market_cap;
  }

  for (let i of data) {
    i.personal_index_market_share = (i.market_cap / personalIndexMktCap) * 100;
  }

  // def add_mkt_share(mktData):
  // totalMktCap = 0
  // for coin in mktData:
  //     totalMktCap += coin["market_cap"]

  // for coin in mktData:
  //     coin["market_share"] = coin["market_cap"] / totalMktCap * 100

  // return mktData

  console.log(personalIndexMktCap);
  console.log(data);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <div>
      <div className="min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-3">
            <h1>Personal Index</h1>

            <TableForPersonalIndex columns={columns} data={data} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalIndex;
