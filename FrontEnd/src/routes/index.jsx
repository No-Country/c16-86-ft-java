import {createBrowserRouter} from 'react-router-dom'

//dashboard
import DashboardPrincipal from '../pages/DashboardPrincipal';
import DashboardSecundario from '../pages/DashboardSecundario';
import LandingPage from '../pages/LandingPage'
//pages
import Parqueaderos from '../components/Parqueaderos/Parqueaderos';
import Parkers from '../components/Parkers/Parkers';
import Usuarios from '../components/Usuarios/Usuarios'
import DashboardParking from '../components/Parking/DashboardParking';

const router = createBrowserRouter([
    {
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'/main',
        element:<DashboardPrincipal/>
    },
    {
        path:'/dashboard',
        element:<DashboardSecundario/>,
        children:[
            {
                path:'/dashboard/parqueaderos',
                element:<Parqueaderos/>,
                children:[
                    {
                        path:'/dashboard/parqueaderos/:parqueadero',
                        element:<DashboardParking/>,
                    }
                ]
            },
            {
                path:'/dashboard/parkers',
                element:<Parkers/>,
                index:true
            },
            {
                path:'/dashboard/usuarios',
                element:<Usuarios/>,
                index:true
            }
        ]
    }
])

export default router;