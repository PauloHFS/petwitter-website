import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider, RequireAuth } from './context/auth-context';
import { Login } from './routes/Login';
import ProtectedPage from './routes/ProtectedPage';
import PublicPage from './routes/PublicPage';
import { Signup } from './routes/Signup';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
