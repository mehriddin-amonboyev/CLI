
import { Debtors } from "../pages/Debtors/debtors";
import { Filed } from "../pages/Filed/filed";
import { Home } from "../pages/Home/home";
import { Statistika } from "../pages/Statistic/statistic";

export default[
    {
        path:'/app/dashboard',
        comp: Home,
    },
    {
        path:'/app/statistic',
        comp: Statistika,
    },
    {
        path:'/app/debtors',
        comp: Debtors,
    },
    {
        path:'/app/create-debtor',
        comp: Filed,
    },
]