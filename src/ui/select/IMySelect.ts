export interface Icolor {
  color: string;
}

export interface IMYSelect {
  colors: Icolor[];
  getColor: (arg: string) => void;
}
