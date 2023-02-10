import { FC, ElementType } from "react";
import { IButtonRouter } from "./IButtonRouter";
import styles from "./buttonRouter.module.scss";

export default function ButtonRouter({ text, icon, onClick }: IButtonRouter) {
  return (
    <button onClick={onClick} className={styles.button}>
      <div className={styles.icon}>{icon}</div>
      <div>{text}</div>
    </button>
  );
}
// const ButtonRouter:FC<E extends ElementType = typeof defaultType> = ({ icon, text}:buttonProps<E>) => {
//   return (
//     <button className={styles.button}>
//       <div className={styles.icon}>{icon}</div>
//       <div>{text}</div>
//     </button>
//   );
// };

// export default ButtonRouter;
