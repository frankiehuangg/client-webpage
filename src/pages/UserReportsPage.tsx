import SideBar from '../components/Sidebar.tsx'
import SearchBar from '../components/Searchbar.tsx'
import UserReportCard from '../components/UserReportCard.tsx'
import { NavLink } from 'react-router-dom'
import { fetchApi } from '../lib/fetchApi.ts';

const UserReportsPage = async () => {
    document.title = "User Reports"

    const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
    }

    const response = await fetchApi('http://localhost:8000/user-reports', 'GET', headers)

    const data = await response.json()

    const userReports = Array.isArray(data) ? data : [{}]

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