import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/mainLayout"
import routes from "./router/routes"
import Login from "./pages/Auth/auth"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/app' element={<MainLayout />}>
        {routes.map(({ comp: Page, path }, index) => (
          <Route
            key={index}
            index={!path ? true : false}
            path={path}
            element={<Page />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
