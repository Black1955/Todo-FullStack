import { ReactNode } from "react";

export interface IButtonRouter {
  icon: ReactNode;
  text: string;
  onClick: () => any;
}
