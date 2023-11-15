import { Link } from "react-router-dom";

interface UserCard {
    user_id                 : number,
    profile_picture_path    : string,
    display_name            : string,
    username                : string,
    description             : string,
}

const UserCard = (params: UserCard) => {
    const user_id               = params.user_id;
    const profile_picture_path  = params.profile_picture_path;
    const display_name          = params.display_name;
    const username              = params.username;
    const description           = params.description;

    return (
        <Link to={'/user/' + user_id} className="flex gap-2 w-65 px-4 py-3 border-y border-solid border-slate-600">
            <div  className="flex-shrink-0 h-full mr-3">
                <img src={profile_picture_path} className="w-9 h-9 mt-1 rounded-full" />
            </div>
            <div className="flex flex-col">
                <div className="font-bold hover:underline">
                    {display_name}
                </div>
                <div className="text-sm text-slate-500 mb-2">
                    @{username}
                </div>
                <div className="text-secondary-text text-sm">
                    {description}
                </div>
            </div>
        </Link>
    )
} 

export default UserCard