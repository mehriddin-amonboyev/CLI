
import { Debtors } from "../pages/Debtors/debtors";
import { CreateDebts } from "../pages/Debts/debts";
import { CreateDebtor } from "../pages/Filed/createDebtor";
import { Home } from "../pages/Home/home";
import { Statistika } from "../pages/Statistic/statistic";

export default [
    {
        path: '/app/dashboard',
        comp: Home,
    },
    {
        path: '/app/statistic',
        comp: Statistika,
    },
    {
        path: '/app/debtors',
        comp: Debtors,
    },
    {
        path: '/app/create-debtor',
        comp: CreateDebtor,
    },
    {
        path: '/app/debtors/create-debts/:id',
        comp: CreateDebts,
    },
]