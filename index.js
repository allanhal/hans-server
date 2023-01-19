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

  const asdf = `[{"author_name":"Wellington Silva","author_url":"https://www.google.com/maps/contrib/108089141147136411624/reviews","language":"en","profile_photo_url":"https://lh3.googleusercontent.com/a-/AD5-WCmSperCBh_u7teVm92WDmzA7pJbZp16Jq6MG96v7g=s128-c0x00000000-cc-rp-mo","rating":5,"relative_time_description":"7 months ago","text":"Show","time":1654891897},{"author_name":"Flávio Aguiar","author_url":"https://www.google.com/maps/contrib/112971920789805340606/reviews","language":"en","profile_photo_url":"https://lh3.googleusercontent.com/a-/AD5-WCn6mjvC-OgEQ0VS688AYM3q1ycFku1Ini11WN-DyQ=s128-c0x00000000-cc-rp-mo-ba4","rating":5,"relative_time_description":"2 years ago","text":"Top","time":1604940528},{"author_name":"Valeria Ramos","author_url":"https://www.google.com/maps/contrib/101460436550281547411/reviews","language":"en","profile_photo_url":"https://lh3.googleusercontent.com/a-/AD5-WCmRtco3ABThVsM0W16k0vA79KMe6KB0q-r5_uVp3qE=s128-c0x00000000-cc-rp-mo","rating":5,"relative_time_description":"2 months ago","text":"I have already done two services in this technical assistance and both were satisfactory, Mr Elisiario, certainly built a company with very solid principles, so you will find a quality service, IMPECCABLE service, transparency and honesty when passing the diagnosis, commitment to the customer is super attentive.\n\nYou certainly won a client and I will definitely recommend your services to other people, CONGRATULATIONS for the miracle you did on my notebook lol","time":1667596726},{"author_name":"Pathy Aguiar","author_url":"https://www.google.com/maps/contrib/108201340535469494879/reviews","language":"en","profile_photo_url":"https://lh3.googleusercontent.com/a-/AD5-WCn0_qt_bQBDSo45pmld-BCLRfZJT4fFXz4ZAX6q=s128-c0x00000000-cc-rp-mo-ba3","rating":5,"relative_time_description":"a month ago","text":"I took my notebook for maintenance and I was very well attended by Mr. Elisiario, we made a budget and everything went according to plan. Service, work and delivery on time. Thanks. I'm already indicating look for Cibernetics because it's the best. My notebook is 10.","time":1669252962},{"author_name":"Mateus S Ferreira","author_url":"https://www.google.com/maps/contrib/107721663756795903403/reviews","language":"en","profile_photo_url":"https://lh3.googleusercontent.com/a/AEdFTp6eAWGu_liz_PMTzJgsqqwEsAar3wn-pLX0GOWm=s128-c0x00000000-cc-rp-mo","rating":5,"relative_time_description":"a week ago","text":"Excellence in service and incredible results, my notebook is faster, cleaner and in perfect condition","time":1673016133}]`;
  res.send(asdf);
});
app.listen(WEB_PORT, () => {
  console.log(`Web on ${WEB_PORT} is online`);
});
