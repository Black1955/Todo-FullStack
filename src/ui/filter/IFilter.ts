export interface IcallBack {
  color: string;
  checked: boolean;
}
export interface IFilter {
  color: string;
  text: string;
  getData: (data: IcallBack) => void;
}
