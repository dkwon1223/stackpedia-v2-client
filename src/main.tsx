import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './pages/RootLayout.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';
import Home from './pages/Home.tsx';
import Technologies from './pages/Technologies.tsx';
import { ThemeProvider } from './context/ThemeContext';
import Profile from './pages/Profile.tsx';
import Settings from './pages/Settings.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "*", Component: Home }, 
      { index: true, Component: Home },
      { path: "technologies", Component: Technologies },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
