import SideBar from '../components/Sidebar.tsx'
import SearchBar from '../components/Searchbar.tsx'
import UserCard from '../components/UserCard.tsx'
import { NavLink, useParams } from 'react-router-dom'

const FollowingUsersPage = () => {
    document.title = "Following"

    const {user_id} = useParams()

    const users = [
        { user_id: 1, username: "user1", displayName: "User 1", profilePicturePath: "path..." },
        { user_id: 2, username: "user2", displayName: "User 2", profilePicturePath: "path..." },
        { user_id: 3, username: "user3", displayName: "User 3", profilePicturePath: "path..." },
        { user_id: 4, username: "user4", displayName: "User 4", profilePicturePath: "path..." },
        // Add more user objects here
      ];

    return (
        <div className='flex flex-row'>
            <SideBar/>
            <div className="flex flex-col w-[33%]">
                <div>
                    <h1>Username</h1>
                    <h2 className='p-[2vh]'>{user_id}</h2>
                </div>
                <div className='flex flex-nowrap w-full items-center border-b-[2px] p-[1vh]'>
                    <div className='flex-1 items-center text-center'>
                        <NavLink to={`/user/${user_id}/block`}>
                            {({isActive}) => (
                            <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Blocked</p>
                            )}
                        </NavLink>
                    </div>
                    <div className='flex-1 items-center text-center'>
                        <NavLink to={`/user/${user_id}/followers`}>
                            {({isActive}) => (
                                <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Followers</p>
                            )}
                        </NavLink>
                    </div>
                    <div className='flex-1 items-center text-center'>
                        <NavLink to={`/user/${user_id}/following`}>
                            {({isActive}) => (
                                <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Following</p>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div>
                    {users.map((user, idx) => (
                        <UserCard key={idx} user={user}/>
                    ))}
                </div>
            </div>
            <SearchBar/>
        </div>
    );
}

export default FollowingUsersPage