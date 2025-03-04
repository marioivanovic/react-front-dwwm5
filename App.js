import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './hooks/useAuth';
import { DishesProvider } from './hooks/useDishes';
import ThemeSwitcher from './components/switcher/ThemeSwitcher';
import Home from './components/pages/Home';
import About from './components/pages/about/about';
import LoginForm from './components/auth/loginForm';
import RegisterForm from './components/auth/signUpForm';
import DishForm from './components/dishes/dishForm';
import DishDetail from './components/dishes/dishDetails';
import IngredientForm from './components/ingredients/ingredientForm';
import DishesList from './components/dishes/dishesList';
import Users from './components/userDisplay/UserDisplay';
import NotFound from './components/pages/notFound/notFound';

import './App.css';
function App() {

  return (
    <ThemeProvider>
      <AuthProvider>
        <DishesProvider>
          <Router>
            <nav>
              <Link to="/homepage">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/dishes">Plats</Link>
              <Link to="/profile">Profil</Link>
              <ThemeSwitcher />
            </nav>

            <Routes>
              <Route path="/homepage" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth/login" element={<LoginForm />} />
              <Route path="/auth/register" element={<RegisterForm />} />
              <Route path="/dishes" element={<DishesList />} />
              <Route path="/dishes/new" element={<DishForm />} />
              <Route path="/dish/:id" element={<DishDetail />} />
              <Route path="/ingredients/new" element={<IngredientForm />} />
              <Route path="/users" element={<Users />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </DishesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
