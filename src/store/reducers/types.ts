import { Icolor } from "../../ui/select/IMySelect";

export interface filter {
  color: string;
  text: string;
  active: boolean;
}
export interface filters {
  filters: filter[];
  colors: Icolor[];
}

export interface IUniqueColors {
  [key: string]: number;
}
