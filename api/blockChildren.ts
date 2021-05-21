import { getRootUrl } from "../common/common.ts";

import { BlockChildren } from "../interface/blockChildren.ts";

const ROOT_URL = getRootUrl();

export const getBlockChildrenByIdRequest = async (
  token: string,
  blockId: string,
) => {
  let blockChildren: any = {};

  const response = fetch(`${ROOT_URL}/blocks/${blockId}/children`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2021-05-13",
    },
  });
  if (response) {
    const responseJson = (await response).json();
    const r: BlockChildren = await responseJson;
    // console.log("r = ", r);
    if (r) {
      blockChildren = r.results;
    }
  }

  return blockChildren;
};
