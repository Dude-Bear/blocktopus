export function prepareData(selectedRows) {
  const dataForPersonalIndex = [];
  let personalIndexMktCap = 0;

  for (let i of selectedRows) {
    dataForPersonalIndex.push(i.original);
    personalIndexMktCap += i.original.market_cap;
  }

  for (let i of dataForPersonalIndex) {
    i.personal_index_market_share = (i.market_cap / personalIndexMktCap) * 100;
    i.personal_index_market_cap = personalIndexMktCap;
  }
  return dataForPersonalIndex;
}
