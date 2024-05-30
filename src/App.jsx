import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import './App.css'
import RootLayout from './components/RootLayout';

import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import CreateAccount from './pages/CreateAcount';
import Feedback from './pages/Feedback';
import { LoginPage } from './pages/LoginPage';
import { Settings } from './components/Settings';
import { Users } from './components/Users';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout />}>
        <Route index element={<LandingPage />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/setting" element={<Settings />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
