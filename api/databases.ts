import { getRootUrl } from "../common/common.ts";

import { Databases } from "../interface/databases.ts";
import { Database } from "../interface/database.ts";

const ROOT_URL = getRootUrl();

export const getDatabasesRequest = async (
  token: string,
  startCursor?: string,
  pageSize?: number,
) => {
  let databaseList: any[] = [];

  let data: any = {};
  if (startCursor) {
    data.start_cursor = startCursor;
  }
  if (pageSize) {
    data.page_size = pageSize;
  }
  const urlSearchParams = new URLSearchParams(data);
  console.log("urlSearchParams = ", urlSearchParams);

  let url = `${ROOT_URL}/databases`;
  if (urlSearchParams) {
    url = `${ROOT_URL}/databases?${urlSearchParams}`;
  }

  const response = fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2021-05-13",
    },
  });
  if (response) {
    const responseJson = (await response).json();
    const r: Databases = await responseJson;
    // console.log("r = ", r);
    if (r) {
      databaseList = r.results;
    }
  }

  return databaseList;
};

export const getDatabaseByIdRequest = async (
  token: string,
  databaseId: string,
) => {
  let database: any = {};

  const response = fetch(`${ROOT_URL}/databases/${databaseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2021-05-13",
    },
  });
  if (response) {
    const responseJson = (await response).json();
    const r: Database = await responseJson;
    // console.log("r = ", r);
    if (r) {
      database = r;
    }
  }

  return database;
};
