// export interface Icolor {
//   color: string;
// }

// export interface IMYSelect {
//   colors: Icolor[];
//   getColor: (arg: string) => void;
// }
export interface Icolor {
  color: string;
}

export interface CustomSelectProps {
  options: Icolor[];
  onChange: (value: string) => void;
}
