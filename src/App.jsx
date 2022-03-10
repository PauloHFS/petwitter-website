import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider, RequireAuth } from './context/auth-context';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Profile } from './routes/Profile';
import { Signup } from './routes/Signup';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Layout />}>
            <Route
              path="*"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
