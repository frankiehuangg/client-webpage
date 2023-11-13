import { Search } from "react-bootstrap-icons"

const Sidebar = () => {
    return (
        <div className="mx-5 mt-2 fixed w-1/4 rounded-3xl p-3 bg-black flex items-center">
            <Search className="text-white" />
            <input type="text" placeholder="Search" className="w-full ml-3 bg-inherit outline-none" />
        </div>
    )
}

export default Sidebar