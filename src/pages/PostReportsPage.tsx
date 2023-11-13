import SideBar from '../components/Sidebar.tsx'
import SearchBar from '../components/Searchbar.tsx'
import PostReportCard from '../components/PostReportCard.tsx'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const PostReportsPage = async () => {
    document.title = "Post Reports"
    
    const response = await axios.get(
        'http://rest-service:8000/post-reports',
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    const postReports = Array.isArray(response.data) ? response.data : [{}]
    
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
                    {postReports.map((postReport, idx) => (
                        <PostReportCard key={idx} postReport={postReport}/>
                    ))}
                </div>
            </div>
            <SearchBar/>
        </div>
    );
}

export default PostReportsPage