def add_mkt_share(mktData):
    totalMktCap = 0
    for coin in mktData:
        totalMktCap += coin["market_cap"]

    for coin in mktData:
        coin["market_share"] = coin["market_cap"] / totalMktCap * 100

    return mktData
