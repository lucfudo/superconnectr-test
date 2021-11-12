export enum ActionOnMovie {
  add = "add",
  remove = "remove",
}

export interface MovieData {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}
