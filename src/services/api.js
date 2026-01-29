import axios from "axios";

const BASE_URL = "https://api.appsheet.com/api/v2/apps";
const appId = "4c44556b-b071-4961-9b30-0854f6bd98e4";
const tableName = "test";

const BODY = {
  Action: "Find",
  Properties: {
    Locale: "en-US",
    Timezone: "UTC",
  },
  Rows: [],
};

const HEADERS = {
  headers: {
    ApplicationAccessKey: "V2-aWhcO-fbOFB-7bmsV-SZwzF-XSpvq-6wWxh-lCvl8-U9Whf",
    "Content-Type": "application/json",
  },
};

export const getProducts = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}/${appId}/tables/${tableName}/rows`,
      BODY,
      HEADERS,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
