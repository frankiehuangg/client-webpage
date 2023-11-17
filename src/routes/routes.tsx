import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import Searchbar from "../components/Searchbar.tsx";
import "../index.css";

import ExplorePage          from "../pages/ExplorePage.tsx";
import FollowerUsersPage    from "../pages/FollowerUsersPage.tsx";
import FollowingUsersPage   from "../pages/FollowingUsersPage.tsx";
import ForgetPassPage       from "../pages/ForgetPassPage.tsx";
import IndexPage            from "../pages/IndexPage.tsx";
import LoginPage            from "../pages/LoginPage.tsx";
import NotFoundPage         from "../pages/NotFoundPage.tsx";
import NotificationPage     from "../pages/NotificationPage.tsx";
import PostDetailPage       from "../pages/PostDetailPage.tsx";
import PostReportsPage      from "../pages/PostReportsPage.tsx";
import RegisterPage         from "../pages/RegisterPage.tsx";
import SettingsPage         from "../pages/SettingsPage.tsx";
import UserBlockPage        from "../pages/UserBlockPage.tsx";
import UserLikesPage        from "../pages/UserLikesPage.tsx";
import UserMediasPage       from "../pages/UserMediasPage.tsx";
import UserPage             from "../pages/UserPage.tsx";
import UserRepliesPage      from "../pages/UserRepliesPage.tsx";
import UserReportsPage      from "../pages/UserReportsPage.tsx";
import { Col, Container, Row } from "react-bootstrap";

// import ProtectedRoutes from "../components/ProtectedRoutes.tsx";
function Layout() {
    return (
        <Container fluid>
        <Row className='flex flex-row w-screen h-screen bg-black'>
          <Col className='flex-auto basis-1/4 border-r border-slate-600 border-solid'>
            <Sidebar />
          </Col>
          <Col className='mainbar p-0 basis-2/5 z-50 bg-black min-w-[50rem] overflow-y-auto scrollbar-hide'>
            <Outlet />
          </Col>
          <Col className='flex-auto basis-1/3 border-l border-slate-600 border-solid'>
            <Searchbar />
          </Col>
        </Row>
        </Container>
    );
}

const routesList = createBrowserRouter([
    {
        element: <Layout />,
        children: [
    {
        path: '/',
        element: <IndexPage />
    },
    {
        path: '/post/:post_id',
        element: <PostDetailPage />
    },
    {
        path: '/user/:user_id',
        element: <UserPage />
    },
    {
        path: '/user/:user_id/following',
        element: <FollowingUsersPage />
    },
    {
        path: '/user/:user_id/followers',
        element: <FollowerUsersPage />
    },
    {
        path: '/user/:user_id/replies',
        element: <UserRepliesPage />
    },
    {
        path: '/user/:user_id/media',
        element: <UserMediasPage />
    },
    {
        path: '/user/:user_id/likes',
        element: <UserLikesPage />
    },
    {
        path: '/user/:user_id/block',
        element: <UserBlockPage />
    },
    {
        path: '/explore',
        element: <ExplorePage />
    },
    {
        path: '/notifications',
        element: <NotificationPage />
    },
    {
        path: '/user-reports',
        element: <UserReportsPage />
    },
    {
        path: '/post-reports',
        element: <PostReportsPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
    ]},
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/forget-password',
        element: <ForgetPassPage />
    },
    {
        path: '/settings',
        element: <SettingsPage />
    },
])

const Routes = () => {
    return (<RouterProvider router={routesList} />)
}

export default Routes
