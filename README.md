# notion-sdk-deno

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/notion_sdk_deno/mod.ts)

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/notion-sdk-deno)

notion sdk deno

## Requirement

- install deno

## Example

```ts
// pick 1 to import
import Notion from "https://deno.land/x/notion_sdk_deno/mod.ts";
import Notion from "https://x.nest.land/notion-sdk-deno/mod.ts";
import Notion from "https://denopkg.com/yeukfei02/notion-sdk-deno/mod.ts";
```

```ts
const notion = new Notion({
  token: <yourNotionToken>,
});
```

### getUsers

```ts
const userList = await notion.getUsers();
console.log("userList = ", userList);
```

```zsh
// userList
userList = [
  {
    object: "user",
    id: "17001963-9201-4d13-bf2d-9f842304d44a",
    name: "Donald Wu",
    avatar_url: null,
    type: "person",
    person: { email: "yeukfei02@gmail.com" },
  },
  {
    object: "user",
    id: "e5a677d2-20b8-4307-b21a-fca586918675",
    name: "notion-api",
    avatar_url: null,
    type: "bot",
    bot: {},
  },
];
```

### getUserById

```ts
const user = await notion.getUserById(userId);
console.log("user = ", user);
```

```zsh
// user
user =  {
  object: "user",
  id: "17001963-9201-4d13-bf2d-9f842304d44a",
  name: "Donald Wu",
  avatar_url: null,
  type: "person",
  person: { email: "yeukfei02@gmail.com" }
}
```

### getDatabases

```ts
const databases = await notion.getDatabases();
console.log("databases = ", databases);
```

### getDatabaseById

```ts
const database = await notion.getDatabaseById();
console.log("database = ", database);
```

### getPageById

```ts
const page = await notion.getPageById(pageId);
console.log("page = ", page);
```

```zsh
// page
page = {
  object: "page",
  id: "33bfc7be-6511-4b5e-9db2-4e64dd98d855",
  created_time: "2020-06-21T02:18:34.784Z",
  last_edited_time: "2021-05-20T09:00:00.000Z",
  parent: { type: "workspace", workspace: true },
  archived: false,
  properties: { title: { id: "title", type: "title", title: [ [Object] ] } }
}
```

### getPageChildrenById

```ts
const pageChildren = await notion.getPageChildrenById(blockId);
console.log("pageChildren = ", pageChildren);
```

```zsh
// pageChildren
pageChildren = [
  {
    object: "block",
    id: "25d74f8a-19d1-47af-8e62-d46f546feae0",
    created_time: "2020-06-21T02:18:34.784Z",
    last_edited_time: "2020-06-21T02:18:34.784Z",
    has_children: false,
    type: "unsupported",
    unsupported: {}
  },
  {
    object: "block",
    id: "a84ef5ba-75d7-4b21-a7e3-529871d70314",
    created_time: "2020-07-25T06:29:00.000Z",
    last_edited_time: "2020-09-13T03:13:00.000Z",
    has_children: false,
    type: "paragraph",
    paragraph: { text: [ [Object] ] }
  },
  ...
]
```

## Testing and run

```zsh
// run test case
$ deno test --allow-read --allow-env --allow-net

// linter
$ deno lint --unstable

// format code
$ deno fmt
```
