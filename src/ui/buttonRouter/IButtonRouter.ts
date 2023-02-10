import { ComponentProps, ElementType, ReactNode } from "react";
import { IconType } from "react-icons";

export interface IButtonRouter {
  icon: ReactNode;
  text: string;
  onClick: () => any;
}
