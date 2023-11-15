interface NotificationCard {
    profilePicture  : string,
    displayName     : string,
    content         : string
}

const NotificationCard = (params: NotificationCard) => {
    const profilePicture  = params.profilePicture;
    const displayName     = params.displayName;
    const content         = params.content;


    return (
    <div className="flex gap-2 w-65 px-4 py-2 border-y border-solid border-slate-600">
        <div  className="flex-shrink-0 h-full mr-3">
            <img src={profilePicture} className="w-9 h-9 mt-1 rounded-full" />
        </div>
        <div className="flex flex-col">
            <div className="font-bold">
                {displayName}
            </div>
            <div className="text-secondary-text text-sm">
                {content}
            </div>
        </div>
    </div>
    );
}

export default NotificationCard