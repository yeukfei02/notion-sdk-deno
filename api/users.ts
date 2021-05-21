import { getRootUrl } from "../common/common.ts";

import { Users } from "../interface/users.ts";
import { User } from "../interface/user.ts";

const ROOT_URL = getRootUrl();

export const getUsersRequest = async (
  token: string,
  startCursor?: string,
  pageSize?: number,
) => {
  let userList: any[] = [];

  let data: any = {};
  if (startCursor) {
    data.start_cursor = startCursor;
  }
  if (pageSize) {
    data.page_size = pageSize;
  }
  const urlSearchParams = new URLSearchParams(data);
  console.log("urlSearchParams = ", urlSearchParams);

  let url = `${ROOT_URL}/users`;
  if (urlSearchParams) {
    url = `${ROOT_URL}/users?${urlSearchParams}`;
  }

  const response = fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2021-05-13",
    },
  });
  if (response) {
    const responseJson = (await response).json();
    const r: Users = await responseJson;
    // console.log("r = ", r);
    if (r) {
      userList = r.results;
    }
  }

  return userList;
};

export const getUserByIdRequest = async (token: string, userId: string) => {
  let user: any = {};

  const response = fetch(`${ROOT_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2021-05-13",
    },
  });
  if (response) {
    const responseJson = (await response).json();
    const r: User = await responseJson;
    // console.log("r = ", r);
    if (r) {
      user = r;
    }
  }

  return user;
};
