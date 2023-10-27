import profile from '../assets/default.jpg'

type UserCardProps = {
    profilePicture: string,
    displayName: string,
    username: string,
    description: string,
}

const UserCard = ({profilePicture, displayName, username, description} : UserCardProps) => {
    return (
        <a href="" className="flex gap-2 w-65 px-4 py-3 border border-solid border-slate-600">
            <div  className="flex-shrink-0 h-full mr-3">
                <img src={profile} className="w-9 h-9 mt-1 rounded-full" />
            </div>
            <div className="flex flex-col">
                <div className="font-bold hover:underline">
                    {displayName}
                </div>
                <div className="text-sm text-slate-500 mb-2">
                    @{username}
                </div>
                <div className="text-secondary-text text-sm">
                    {description}
                </div>
            </div>
        </a>
    )
} 

export default UserCard