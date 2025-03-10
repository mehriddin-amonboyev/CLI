import { Route, Routes, useNavigate } from "react-router-dom"
import { MainLayout } from "./layouts/mainLayout"
import routes from "./router/routes"
import Login from "./pages/Auth/auth"
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/')
      navigate('/login', { replace: true });
  },[navigate])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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
