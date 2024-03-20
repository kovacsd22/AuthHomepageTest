import { Route, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import PublicPage from '../pages/Public'
import ContactPage from '../pages/Contact'
import NewsPage from '../pages/News'

import UserPage from '../pages/User'
import AdminPage from '../pages/Admin'

import Navbar from '../components/navs/Navbar'

export default function AppRoutes()
{
    const USER_TYPES = {
        PUBLIC: 'PUBLIC',
        NORMAL_USER: 'USER',
        ADMIN_USER: 'ADMIN',

    }

    //const ROLES = 'ADMIN'
    const ROLES = localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")).role : 'PUBLIC'

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<PublicElement> <Home /> </PublicElement>}></Route>

                <Route path="/user" element={<UserElement> <User /> </UserElement>}></Route>
                <Route path="/admin" element={<AdminElement> <Admin /> </AdminElement>}></Route>

                <Route path="/contact" element={<ContactElement> <Contact /> </ContactElement>}></Route>
                <Route path="/news" element={<NewsElement> <News /> </NewsElement>}></Route>

                <Route path="*" element={<div>Page not found.</div>}></Route>
            </Routes>
        </>

    )

    function Home()
    {
        return <div>
            <PublicPage />
        </div>
    }

    function User()
    {
        return <div>
            <UserPage />
        </div>
    }

    function Admin()
    {
        return <div>
            <AdminPage />
        </div>
    }

    function Contact()
    {
        return <div>
            <ContactPage />
        </div>
    }

    function News()
    {
        return <div>
            <NewsPage />
        </div>
    }




    function PublicElement({ children })
    {
        return <>{children}</>
    }

    function UserElement({ children })
    {
        if (ROLES === USER_TYPES.NORMAL_USER ||
            ROLES === USER_TYPES.ADMIN_USER)
        {
            return <>{children}</>
        } else
        {
            //return <Navigate to={"/pageNotFound"} />
            return <div>No access!</div>
        }

    }

    function AdminElement({ children })
    {

        if (ROLES === USER_TYPES.ADMIN_USER)
        {
            return <>{children}</>
        } else
        {
            //return <Navigate to={"/pageNotFound"} />
            return <div>No access!</div>
        }
    }

    function ContactElement({ children })
    {
        return <>{children}</>
    }

    function NewsElement({ children })
    {
        return <>{children}</>
    }

}
