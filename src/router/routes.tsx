
import { Home } from "../pages/Home/home";
import { Statistika } from "../pages/Statistic/statistic";

export default[
    // {
    //     // path: '/login',
    //     comp: Login,
    // },
    {
        path:'/app/dashboard',
        comp: Home,
    },
    {
        path:'/app/statistic',
        comp: Statistika,
    }
]