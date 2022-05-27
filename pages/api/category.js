import { URL_API, BASE_URL } from "../../constants"
import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({
      code: 405,
      status: "error",
      result: "Method Not Allowed",
    });
  const { data } = await axios(URL_API+"getkat");
  res.status(200).json({
    code: 200,
    status: "OK",
    result: data,
  });
}