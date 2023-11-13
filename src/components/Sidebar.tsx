import { ElementType } from "react"
import { Bell, CardList, Envelope, House, People, Person, Search, ThreeDots, Twitter} from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 flex items-end">
            <div className="px-2 w-56">
                <div className="ml-1 mt-3 px-1 py-1 items-center text-3xl">
                    <Link to='/' className="">
                        <Twitter h-8 w-8/>
                    </Link>
                </div>
                <SidebarItem Icon={House} title="Home" url="/" />
                <SidebarItem Icon={Search} title="Explore" url="/" />
                <SidebarItem Icon={Bell} title="Notification" url="/" />
                <SidebarItem Icon={Envelope} title="Messages" url="/" />
                <SidebarItem Icon={CardList} title="Lists" url="/" />
                <SidebarItem Icon={People} title="Community" url="/" />
                <SidebarItem Icon={Twitter} title="Premium" url="/" />
                <SidebarItem Icon={Person} title="Profile" url="/user/3" />
                <SidebarItem Icon={ThreeDots} title="More" url="/" />
            </div>
        </div>
    )
}

type SidebarItemProps = {
    Icon: ElementType
    title: string
    url: string
}

function SidebarItem({Icon, title, url}: SidebarItemProps) {
    return (
        <Link to={url} className="w-fit flex items-center rounded-lg gap-4 p-3">
            <Icon className="w-6 h-6" />
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        </Link>
    )
}

export default Sidebar