import { IButtonRouter } from "./IButtonRouter";
import styles from "./buttonRouter.module.scss";

export default function ButtonRouter({ text, icon, onClick }: IButtonRouter) {
  return (
    <button onClick={onClick} className={styles.buttton}>
      <div className={styles.icon}>{icon}</div>
      <div>{text}</div>
    </button>
  );
}
