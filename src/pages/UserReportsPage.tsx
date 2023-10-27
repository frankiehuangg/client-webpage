import SideBar from '../components/Sidebar.tsx'
import SearchBar from '../components/Searchbar.tsx'
import UserReportCard from '../components/UserReportCard.tsx'
import { NavLink } from 'react-router-dom'

const UserReportsPage = () => {
    document.title = "User Reports"

    const userReports = [
        {report_id : 1, user_id : 1, reporter : 2, description : "user 2 reports user 1", status : "waiting"},
        {report_id : 2, user_id : 3, reporter : 4, description : "user 3 reports user 4", status : "waiting"},
        {report_id : 3, user_id : 5, reporter : 6, description : "user 5 reports user 6", status : "waiting"},
        {report_id : 4, user_id : 7, reporter : 8, description : "user 7 reports user 8", status : "waiting"},
        // more...
    ]

    return (
        <div className='flex flex-row'>
            <SideBar/>
            <div className="flex flex-col w-[33%]">
                <div className='p-[3vh]'>
                    <h1>Reports</h1>
                </div>
                <div className='flex flex-nowrap w-full items-center border-b-[2px]'>
                    <div className='flex-1 items-center text-center p-[1vh]'>
                        <NavLink to={`/post_reports`}>
                            {({isActive}) => (
                                <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Post Reports</p>
                            )}
                        </NavLink>
                    </div>
                    <div className='flex-1 items-center text-center'>
                        <NavLink to={`/user_reports`}>
                            {({isActive}) => (
                                <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>User Reports</p>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div>
                    {userReports.map((userReport, idx) => (
                        <UserReportCard key={idx} userReport={userReport}/>
                    ))}
                </div>
            </div>
            <SearchBar/>
        </div>
    );
}

export default UserReportsPage