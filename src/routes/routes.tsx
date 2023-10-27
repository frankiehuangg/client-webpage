import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ExplorePage          from "../pages/ExplorePage.tsx";
import FollowerUsersPage    from "../pages/FollowerUsersPage.tsx";
import FollowingUsersPage   from "../pages/FollowingUsersPage.tsx";
import ForgetPassPage       from "../pages/ForgetPassPage.tsx";
import IndexPage            from "../pages/IndexPage.tsx";
import LoginPage            from "../pages/LoginPage.tsx";
import NotFoundPage         from "../pages/NotFoundPage.tsx";
import NotificationPage     from "../pages/NotificationPage.tsx";
import PostDetailPage       from "../pages/PostDetailPage.tsx";
import PostLikesPage        from "../pages/PostLikesPage.tsx";
import PostResourcesPage    from "../pages/PostResourcesPage.tsx"
import PostReportsPage      from "../pages/PostReportsPage.tsx";
import RegisterPage         from "../pages/RegisterPage.tsx";
import SettingsPage         from "../pages/SettingsPage.tsx";
import TweetPage            from "../pages/TweetPage.tsx";
import UserBlockPage        from "../pages/UserBlockPage.tsx";
import UserLikesPage        from "../pages/UserLikesPage.tsx";
import UserMediasPage       from "../pages/UserMediasPage.tsx";
import UserPage             from "../pages/UserPage.tsx";
import UserRepliesPage      from "../pages/UserRepliesPage.tsx";
import UserReportsPage      from "../pages/UserReportsPage.tsx";

// import ProtectedRoutes from "../components/ProtectedRoutes.tsx";

const routesList = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/forget_password',
        element: <ForgetPassPage />
    },
    {
        path: '/post/:post_id',
        element: <PostDetailPage />
    },
    {
        path: '/post/:post_id/likes',
        element: <PostLikesPage />
    },
    {
        path: '/post/:post_id/:resource_id',
        element: <PostResourcesPage />
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
        path: '/tweet',
        element: <TweetPage />
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
        path: '/user_reports',
        element: <UserReportsPage />
    },
    {
        path: '/post_reports',
        element: <PostReportsPage />
    },
    {
        path: '/settings',
        element: <SettingsPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

const Routes = () => {
    return <RouterProvider router={routesList} />
}

export default Routes
