export function prepareData(props) {
  const dataForPersonalIndex = [];
  let personalIndexMktCap = 0;

  for (let i of props) {
    dataForPersonalIndex.push(i.original);
    personalIndexMktCap += i.original.market_cap;
  }

  for (let i of dataForPersonalIndex) {
    i.personal_index_market_share = (i.market_cap / personalIndexMktCap) * 100;
    i.personal_index_market_cap = personalIndexMktCap;
  }
  return dataForPersonalIndex;
}
