export interface Users {
  object: string;
  results: Result[];
  next_cursor: null;
  has_more: boolean;
}

export interface Result {
  object: string;
  id: string;
  name: string;
  avatar_url: null;
  type: string;
  person?: Person;
  bot?: Bot;
}

export interface Bot {}

export interface Person {
  email: string;
}
