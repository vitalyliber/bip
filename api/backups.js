import axios from "axios";
import { endpoint } from "./endpoints";

export const getBackup = async (params = {}) => {
  console.log('sssss', params)
  return axios({
    url: `${endpoint}/birthday_backups/${params.id}`,
    headers: {
      "Content-type": "application/json",
    },
    params: { ...params },
    method: "get",
  }).then(({ data }) => {
    console.log(data);
    return data;
  });
};
