const axios = require("axios");
const jsonData = require("./response.json");

// function to fetch data from api
module.exports.fetchData = async () => {
  return jsonData;
};

module.exports.callAPI = async (address, pageSize) => {
  const url = "https://www.vrbo.com/graphql";

  let payload = {
    variables: {
      context: {
        siteId: 9001001,
        locale: "en_US",
        eapid: 1,
        currency: "USD",
        device: {
          type: "DESKTOP",
        },
        identity: {
          duaid: "65cbd87c-ebb5-ab83-a4c1-812db78bb787",
          expUserId: "-1",
          tuid: "-1",
          authState: "ANONYMOUS",
        },
        privacyTrackingState: "CAN_TRACK",
        debugContext: {
          abacusOverrides: [],
        },
      },
      criteria: {
        primary: {
          dateRange: {
            checkInDate: {
              day: 1,
              month: 3,
              year: 2024,
            },
            checkOutDate: {
              day: 5,
              month: 3,
              year: 2024,
            },
          },
          destination: {
            regionName: address,
            regionId: null,
            coordinates: null,
            pinnedPropertyId: null,
            propertyIds: null,
            mapBounds: null,
          },
          rooms: [
            {
              adults: 2,
              children: [],
            },
          ],
        },
        secondary: {
          counts: [
            {
              id: "resultsStartingIndex",
              value: 150,
            },
            {
              id: "resultsSize",
              value: pageSize,
            },
          ],
          booleans: [],
          selections: [
            {
              id: "sort",
              value: "RECOMMENDED",
            },
            {
              id: "privacyTrackingState",
              value: "CAN_TRACK",
            },
            {
              id: "useRewards",
              value: "SHOP_WITHOUT_POINTS",
            },
            {
              id: "searchId",
              value: "d1342ebe-2e4c-4c8d-8838-a3967204a6f2",
            },
          ],
          ranges: [],
        },
      },
      destination: {
        regionName: null,
        regionId: null,
        coordinates: null,
        pinnedPropertyId: null,
        propertyIds: null,
        mapBounds: null,
      },
      shoppingContext: {
        multiItem: null,
      },
      returnPropertyType: false,
      includeDynamicMap: true,
    },
    operationName: "LodgingPwaPropertySearch",
    extensions: {
      persistedQuery: {
        sha256Hash:
          "e4ffcd90dd44f01455f9ddd89228915a177f9ec674f0df0db442ea1b20f551c3",
        version: 1,
      },
    },
  };

  const headers = {
    authority: "www.vrbo.com",
    accept: "*/*",
    Host: "www.vrbo.com",
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate, br, zstd", //added
    "accept-language": "en-US,en;q=0.9", //modified
    "cache-control": "no-cache",
    "client-info": "shopping-pwa,unknown,unknown",
    "content-type": "application/json",
    origin: "https://www.vrbo.com",
    pragma: "no-cache",
    referer:
      "https://www.vrbo.com/search?adults=2&amenities=&children=&d1=2023-12-27&d2=2023-12-28&destination=73%20W%20Monroe%20St%2C%20Chicago%2C%20IL%2060603%2C%20USA&endDate=2024-03-05&latLong=&mapBounds=&pwaDialog=&regionId&semdtl=&sort=RECOMMENDED&startDate=2024-03-01&theme=&userIntent=",
    "sec-ch-ua":
      '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "x-enable-apq": "true",
    "x-page-id": "page.Hotel-Search,H,20",
    cookie:
      "DUAID=f3995387-24c9-b93a-dc50-6e607ed76554; HMS=4a252ad9-f617-463b-a416-87f95990b937; MC1=GUID=f399538724c9b93adc506e607ed76554; ak_bmsc=49B6539085E04599DC52312D1ABDD830~000000000000000000000000000000~YAAQnJbTZx2UaoOOAQAA/2pkkxcQZYTjyGqiwzzq1DnG43nuBVaBawBK/vCIvVOiBQi9fSo7IjhKPPyOyHwq29FrBs3kgkknz0y/ybyshljetMzlnUu3g8BZJjpqD2nxbujAS5EXN1W/29MfcMqYSKn7/FtplKU2M0wsbb//gDcyOjAW/miDaJFPer5mMZt6/RvXNj2ueT+yzu8ZC/u/UTC9Zq+JGeE5sgRb3FivB8ja+pNpZx6a5vTnYLJo9oXQPWCyqXztNXQ4bp0z9BDUdc+5ANrDBIK/H/qtdcCN8ZwndkqbOo0UYwS/0MvT1Vhcn+1mM2lhEesFC3EzE0yvPWTuaDNX63qMWc4Hn1imDcsfX7c9u/ZXSpo=; bm_sv=8E2AA09D06A15076DB9DDAB9352DCACA~YAAQF2fRF7MWI2iOAQAAYBhukxchIpi2jCIMIRuRi3TVgs2VetSbX2e8dBUeYqM1DEbRqiLSmJA9eRJRVlSsUtwGZwKNjfTMfHjLbOTqteesTxmPhdAqHMbwdpa52aeXEKU0kCSLQEX3vDgkdhNzHf9nMISWxfabFGSnl5gVfxk4bNK+00gy3klos+BDAnEh96quu/uSEAFKsmf4Hlj9ClyL1a6nHvaTOpF6UCpbU/nv3IWzhzgUnAu8SIOQIw==~1; cesc=%7B%22marketingClick%22%3A%5B%22false%22%2C1711870449723%5D%2C%22hitNumber%22%3A%5B%222%22%2C1711870449722%5D%2C%22visitNumber%22%3A%5B%224%22%2C1711869815484%5D%2C%22entryPage%22%3A%5B%22page.Hotel-Search%22%2C1711870449722%5D%7D; hav=f3995387-24c9-b93a-dc50-6e607ed76554; ha-device-id=f3995387-24c9-b93a-dc50-6e607ed76554; has=f1e9ad13-02d1-6c07-590d-86d589df730d; hav=f3995387-24c9-b93a-dc50-6e607ed76554",
  };

  try {
    const response = await axios({
      method: "post",
      url: url,
      data: payload,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error calling API:", error.message);
    return null;
  }
};
