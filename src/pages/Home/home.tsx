import { Statistic } from "./components/statistics";
import style from './home.module.css'
import CalendarComp from './components/calendar';

export const Home = () => {
    return (
        <div className={style.home}>
            <Statistic />
            <div className={style.calendar_icon}>
                <CalendarComp />
            </div>
        </div>
    )
}