export interface User {
  object: string;
  id: string;
  name: string;
  avatar_url: null;
  type: string;
  person: Person;
}

export interface Person {
  email: string;
}
