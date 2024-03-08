import {createBrowserRouter} from 'react-router-dom'

//dashboard
import DashboardPrincipal from '../pages/DashboardPrincipal';
import DashboardSecundario from '../pages/DashboardSecundario';
import LandingPage from '../pages/LandingPage'
import DashboardParker from '../pages/DashboardParker'
//pages
import Parqueaderos from '../components/Parqueaderos/Parqueaderos';
import Parkers from '../components/Parkers/Parkers';
import Registros from '../components/Registros/Registros';
import DashboardParking from '../components/Parking/DashboardParking';
import Login from '../components/Auth/login';

const router = createBrowserRouter([
    {
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'/login',
        element:<Login/>
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
                path:'/dashboard/registros',
                element:<Registros/>,
                index:true
            }
        ]
    },
    {
        path:'/dashboard-parker/:idParker',
        element:<DashboardParker/>,
    }
])

export default router;