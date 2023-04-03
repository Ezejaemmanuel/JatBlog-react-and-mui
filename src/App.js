//App.js
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage.js';
import Fallback from './fallback.jsx';
const Main = lazy(() => import('./routes/main/main.jsx'));
const AuthPage = lazy(() => import('./routes/signup-and-login/signup-and-login.jsx'));
//const Login = lazy(() => import('./routes/signup-and-login/login.jsx'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<Fallback />}>
              <AuthPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
