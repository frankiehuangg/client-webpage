import { ElementType, useEffect, useState } from "react"
import { Bell, Flag, Gear, House, People, Person, Search, Twitter} from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { fetchApi } from "../lib/fetchApi"

const Sidebar = () => {
    const [userData,setUserData] = useState<any>([])

    const user_menu = [{
        icon: House,
        title: "Home",
        url: "/"
    },
    {
        icon: Search,
        title: "Explore",
        url: "/explore" 
    },
    {
        icon: Bell,
        title: "Notification",
        url: "/notifications"
    },
    {
        icon: People,
        title: "Community",
        url: "/user/" + userData.user_id +"/followers"
    },
    {
        icon: Person,
        title: "Profile",
        url: "/user/" + userData.user_id 
    },
    {
        icon: Gear,
        title: "Setting",
        url: "/settings"
    }]

    const admin_menu = {
        icon: Flag,
        title: "Reports",
        url: "/user-reports"
    }

    useEffect(() => {
        const fetchData = async () => {
            try {

                const headers = {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
                
                const response = await fetchApi(
                    'http://localhost:8000/user/current',
                    'GET',
                    headers
                )

                const data = await response.json()
                
                if (response.status === 200) {
                    setUserData(data)
                }
                else {
                    alert(data.message)
                }
            } catch (error) {
                alert('Unknown error, current user is missing')
            }
        }

        fetchData()
    }, [])

    let menu = user_menu
    if (userData.is_admin) {        
        menu.push(admin_menu)        
    }
    

    return (
        <div className="lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 flex items-end">
            <div className="px-2 w-56">
                <div className="ml-3 mt-3 px-1 py-1 items-center text-3xl">
                    <Link to='/' className="">
                        <Twitter h-8 w-8/>
                    </Link>
                </div>
                <>
                {menu.map(
                    datum => (
                        <SidebarItem Icon={datum.icon} title={datum.title} url={datum.url} />
                    )
                )}
                </>
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