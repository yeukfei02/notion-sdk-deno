export interface Databases {
  results: Result[];
  next_cursor: string;
  has_more: boolean;
}

export interface Result {
  object: string;
  id: string;
  title: string;
  properties: Properties;
}

export interface Properties {
  Name: Name;
  Description: Description;
}

export interface Description {
  type: string;
  text?: RichText;
  rich_text?: RichText;
}

export interface RichText {}

export interface Name {
  type: string;
  title: RichText;
}
