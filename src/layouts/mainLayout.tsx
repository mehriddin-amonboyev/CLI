import { Outlet } from "react-router-dom"

export const MainLayout=()=>{
    return (
        <>
        <header>
            {/* <Header/> */}
        </header>
        <Outlet />
        <footer>
            {/* <Foouter /> */}
        </footer>
        </>
    )
}