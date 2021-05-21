import { getRootUrl } from "../common/common.ts";

import { Page } from "../interface/page.ts";

const ROOT_URL = getRootUrl();

export const getPageByIdRequest = async (token: string, pageId: string) => {
  let page: any = {};

  const response = fetch(`${ROOT_URL}/pages/${pageId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2021-05-13",
    },
  });
  if (response) {
    const responseJson = (await response).json();
    const r: Page = await responseJson;
    // console.log("r = ", r);
    if (r) {
      page = r;
    }
  }

  return page;
};
