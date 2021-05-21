export interface BlockChildren {
  object: string;
  results: Result[];
  next_cursor: null;
  has_more: boolean;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  type: string;
}
