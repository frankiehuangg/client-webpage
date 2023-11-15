import { ElementType } from "react"
import { Bell, House, People, Person, Search, Twitter} from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 flex items-end">
            <div className="px-2 w-56">
                <div className="ml-3 mt-3 px-1 py-1 items-center text-3xl">
                    <Link to='/' className="">
                        <Twitter h-8 w-8/>
                    </Link>
                </div>
                <SidebarItem Icon={House} title="Home" url="/" />
                <SidebarItem Icon={Search} title="Explore" url="/explore" />
                <SidebarItem Icon={Bell} title="Notification" url="/notifications" />
                <SidebarItem Icon={People} title="Community" url="/user/3/followers" />
                <SidebarItem Icon={Person} title="Profile" url="/user/3" />
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