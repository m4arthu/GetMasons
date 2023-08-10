
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { AuthProvider} from './contexts/authContext.jsx'
import { LoginPage } from './pages/loginPage'
import { RegisterPage } from "./pages/registerPage"
import { HomePage } from "./pages/homePage.jsx"
import { ProfilePage } from "./pages/profilePage.jsx"
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={'/login'} element={<LoginPage/>} />
          <Route path={"/register"} element = {<RegisterPage/>} />
          <Route path={"/"} element = {<HomePage/>} />
          <Route path={"/profile"} element={<ProfilePage/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
