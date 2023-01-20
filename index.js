const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

const { WEB_PORT = 10000, ORIGIN = "http://127.0.0.1:5500" } = process.env;

app.use(
  cors({
    origin: ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Web is online OLÁ");
});

app.get("/reviews", async (req, res) => {
  // const placeId = "ChIJHbhO5eFRxwcRqiUZIEAxRHs";
  // const response = await axios(
  //   `https://maps.googleapis.com/maps/api/place/js/PlaceService.GetPlaceDetails?2sen&10e3&14m1&1s${placeId}&16m1&1sreviews&17m1&2e1&callback=_xdc_._nxisd3&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&token=68677`,
  //   {
  //     headers: {
  //       accept: "*/*",
  //       "accept-language": "en",
  //       "sec-ch-ua":
  //         '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
  //       "sec-ch-ua-mobile": "?0",
  //       "sec-ch-ua-platform": '"Windows"',
  //       "sec-fetch-dest": "script",
  //       "sec-fetch-mode": "no-cors",
  //       "sec-fetch-site": "cross-site",
  //       "x-client-data":
  //         "CJe2yQEIpbbJAQjEtskBCKmdygEImN/KAQiTocsBCJuIzQEI9ojNAQ==",
  //     },
  //     referrer: "https://unpkg.com/",
  //     referrerPolicy: "strict-origin-when-cross-origin",
  //     body: null,
  //     method: "GET",
  //     mode: "cors",
  //     credentials: "omit",
  //   }
  // );
  // const result = response.data;
  // let final = result.substring(
  //   result.indexOf(`"reviews" : `) - 1,
  //   result.indexOf("status") - 1
  // );
  // final = final.substring(13, final.length - 10);
  // res.send(JSON.parse(final));

  const asdf = require("./reviews.json");
  res.send(asdf);
});
app.listen(WEB_PORT, () => {
  console.log(`Web on ${WEB_PORT} is online`);
});
