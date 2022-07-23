import https from "https";
import constants from "../utils/constant.js";

const getFeeds = async function (req, res) {
  const options = {
    hostname: constants.hostname,
    port: 443,
    path: "/services/feeds/photos_public.gne",
    method: "GET",
  };

  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send(constants.error_message);
    });
};

export default { getFeeds };
