import profile from '../assets/default.jpg'
import { ArrowLeft, Calendar } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";


type UserProps = {
    userId: number,
    profilePicture: string,
    displayName: string,
    username: string,
    description: string,
    joinDate: string,
    following: number,
    followers: number,
}

const UserPage = ({userId, profilePicture, displayName, username, description, joinDate, following, followers} : UserProps) => {
    let user_data = [{
        userId          : 1,
        profilePicture  : "/public/images/default.jpg",
        displayName     : "aaaa",
        username        :'bbbbbb',
        description     :'alalalallalalalla',
        joinDate        :'Februari 2022',
        following       : 10,
        followers       : 11
      },
    ];
    return (
        <div className="grow basis-2/5 z-30">
            <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
                <Link to="" className="mr-4">
                    <ArrowLeft className="w-8 h-8 hover:bg-slate-500 p-1 rounded-full" />
                </Link>
                <h2 className="text-xl font-bold">{user_data[0].displayName}</h2>
            </div>
            <div className="h-max w-full bg-black">
                <div className="h-48 bg-slate-600"></div>
                <div className="px-4 py-4">
                    <img src={profile} className="w-32 h-32 -mt-20 border-4 border-solid border-slate-50 rounded-full" />
                    <div className="text-xl font-bold mt-2">
                        {user_data[0].displayName}
                    </div>
                    <div className="text-sm text-slate-500 mb-3">
                        @{user_data[0].username}
                    </div>
                    <div className="text-sm mb-3">
                        {user_data[0].description}
                    </div>
                    <div className="text-sm text-slate-500 flex items-centre mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {user_data[0].joinDate}
                    </div>
                    <div className="text-sm font-bold flex">
                        <div className="inline-flex mr-5 hover:underline">
                            {user_data[0].following} Following
                        </div>
                        <div className="inline-flex hover:underline">
                            {user_data[0].followers} Followers
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full justify-around flex flex-row bg-black border-b border-slate-600 border-solid">
                <Link to={"/user/" + user_data[0].userId}  className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 border-b-4 border-blue-500 border-solid font-bold">Posts</div>
                </Link>
                <Link to={"/user/" + user_data[0].userId + "/replies"} className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 text-slate-500">Replies</div>
                </Link>
                <Link to={"/user/" + user_data[0].userId + "/media"} className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 text-slate-500">Media</div>
                </Link>
                <Link to={"/user/" + user_data[0].userId + "/likes"} className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 text-slate-500">Likes</div>
                </Link>
            </div>
            <UserCard profilePicture="" displayName="akdadoawodwa" username="dwaidnawi" description="dwaidwaindiaw"/>
        </div>
    )
}

export default UserPage