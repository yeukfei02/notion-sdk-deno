import { getUserByIdRequest, getUsersRequest } from "../api/users.ts";
import {
  getDatabaseByIdRequest,
  getDatabasesRequest,
} from "../api/databases.ts";
import { getPageByIdRequest } from "../api/page.ts";
import { getBlockChildrenByIdRequest } from "../api/blockChildren.ts";

interface InitObject {
  token: string;
}

class Notion {
  private token = "";

  constructor(initObject: InitObject) {
    if (initObject) {
      this.token = initObject.token;
    }
  }

  public async getUsers(startCursor?: string, pageSize?: number) {
    const usersList = await getUsersRequest(this.token, startCursor, pageSize);
    return usersList;
  }

  public async getUserById(userId: string) {
    const user = await getUserByIdRequest(this.token, userId);
    return user;
  }

  public async getDatabases(startCursor?: string, pageSize?: number) {
    const databaseList = await getDatabasesRequest(
      this.token,
      startCursor,
      pageSize,
    );
    return databaseList;
  }

  public async getDatabaseById(databaseId: string) {
    const database = await getDatabaseByIdRequest(this.token, databaseId);
    return database;
  }

  public async getPageById(pageId: string) {
    const page = await getPageByIdRequest(this.token, pageId);
    return page;
  }

  public async getPageChildrenById(blockId: string) {
    const pageChildren = await getBlockChildrenByIdRequest(this.token, blockId);
    return pageChildren;
  }
}

export default Notion;
