import styles from "./sidebar.module.scss";
import { TbCalendarTime } from "react-icons/tb";
import { BsCalendar3Event } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Filters from "../filters/Filters";
import ButtonRouter from "../../ui/buttonRouter/ButtonRouter";
import photo from "../../assets/DefaultPhoto.jpg";
import FilterForm from "../FiterForm/FilterForm";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import { useGetUserDataQuery } from "../../Services/userSlice";
interface ISide {
  bar: boolean;
  setBar: (value: boolean) => void;
}
const Sidebar: React.FC<ISide> = ({ bar, setBar }) => {
  const { id } = useAppSelector(state => state.user);
  const { data, isLoading } = useGetUserDataQuery(id);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div
      className={
        bar ? [styles.siderBar, styles.active].join(" ") : styles.siderBar
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <div className={styles.photo}>
            <img src={photo} alt='profilePhoto' width='55px' height='50px' />
          </div>
          <div>
            <span>Do-it</span>
            <br />
            <span style={{ fontWeight: "bold" }}>{data.name}</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.managment}>
          <Link to='/' style={{ textDecoration: "none" }}>
            <ButtonRouter
              icon={<BsCalendar3Event color='' />}
              onClick={() => {
                setBar(!bar);
              }}
              text='Today tasks'
            />
          </Link>
          <div style={{ margin: "0  0 30px 47px" }}>
            <Filters />
            <FilterForm />
          </div>
          <Link to='sheduledTasks' style={{ textDecoration: "none" }}>
            <ButtonRouter
              icon={<TbCalendarTime />}
              onClick={() => {
                setBar(!bar);
              }}
              text='Scheduled tasks'
            />
          </Link>
          <Link to='settings' style={{ textDecoration: "none" }}>
            <ButtonRouter
              icon={<FiSettings />}
              onClick={() => {
                setBar(!bar);
              }}
              text='Settings'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
