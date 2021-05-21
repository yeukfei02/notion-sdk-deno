import { Notion } from "../src/main.ts";
import { assert } from "../deps.ts";
import "https://deno.land/x/dotenv/load.ts";

const NOTION_TOKEN = Deno.env.get("NOTION_TOKEN")
  ? (Deno.env.get("NOTION_TOKEN") as string)
  : "";

const initObject = {
  token: NOTION_TOKEN,
};

Deno.test("notion.getUsers test", async () => {
  const notion = new Notion(initObject);
  const userList = await notion.getUsers();
  console.log("userList = ", userList);
  assert(userList);
});

Deno.test("notion.getUserById test", async () => {
  const notion = new Notion(initObject);
  const userId = "17001963-9201-4d13-bf2d-9f842304d44a";
  const user = await notion.getUserById(userId);
  console.log("user = ", user);
  assert(user);
});

Deno.test("notion.getDatabases test", async () => {
  const notion = new Notion(initObject);
  const databaseList = await notion.getDatabases();
  console.log("databaseList = ", databaseList);
  assert(databaseList);
});

Deno.test("notion.getDatabaseById test", async () => {
  const notion = new Notion(initObject);
  const databaseId = "668d797c-76fa-4934-9b05-ad288df2d136";
  const database = await notion.getDatabaseById(databaseId);
  console.log("database = ", database);
  assert(database);
});

Deno.test("notion.getPageById test", async () => {
  const notion = new Notion(initObject);
  const pageId = "33bfc7be65114b5e9db24e64dd98d855";
  const page = await notion.getPageById(pageId);
  console.log("page = ", page);
  assert(page);
});

Deno.test("notion.getPageChildrenById test", async () => {
  const notion = new Notion(initObject);
  const blockId = "33bfc7be-6511-4b5e-9db2-4e64dd98d855";
  const pageChildren = await notion.getPageChildrenById(blockId);
  console.log("pageChildren = ", pageChildren);
  assert(pageChildren);
});
