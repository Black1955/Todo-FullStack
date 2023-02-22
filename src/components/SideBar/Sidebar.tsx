import React from "react";
import styles from "./sidebar.module.scss";
import { TbCalendarTime } from "react-icons/tb";
import { BsCalendar3Event } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Filters from "../filters/Filters";
import ButtonRouter from "../../ui/buttonRouter/ButtonRouter";
import photo from "../../assets/DefaultPhoto.jpg";
import FilterForm from "../FiterForm/FilterForm";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.siderBar}>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <div className={styles.photo}>
            <img src={photo} alt='profilePhoto' width='55px' height='50px' />
          </div>
          <div>
            <span>Do-it</span>
            <br />
            <span style={{ fontWeight: "bold" }}>Hamza mameri</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.managment}>
          <Link to='/' style={{ textDecoration: "none" }}>
            <ButtonRouter
              icon={<BsCalendar3Event color='' />}
              onClick={() => {}}
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
              onClick={() => {}}
              text='Scheduled tasks'
            />
          </Link>
          <Link to='settings' style={{ textDecoration: "none" }}>
            <ButtonRouter
              icon={<FiSettings />}
              onClick={() => {}}
              text='Settings'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
