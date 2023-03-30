import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'

import Root from './routes/Root'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import { AuthProvider } from './hooks/useAuth'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                index:true,
                element:<Dashboard/>,
            }
        ]
    },
    {
        path:'/login',
        element: <Login/>
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)
