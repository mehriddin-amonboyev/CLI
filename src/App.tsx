import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/mainLayout"
import routes from "./router/routes"
import Login from "./pages/Auth/auth"

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<MainLayout />}>
        {routes.map(({ comp: Page, path }) => (
          <Route
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
