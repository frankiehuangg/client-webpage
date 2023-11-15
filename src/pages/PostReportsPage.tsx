import { Col, Container, Row } from 'react-bootstrap'
import PostReportCard from '../components/PostReportCard.tsx'
import { NavLink } from 'react-router-dom'

const PostReportsPage = () => {
    document.title = "Post Reports"
    
    const postReports = [
        { post_id: 1, user_id: 1, description: "user 1 reported post 1", status: "waiting" },
        { post_id: 2, user_id: 1, description: "user 1 reported post 2", status: "waiting" },
        { post_id: 3, user_id: 1, description: "user 1 reported post 3", status: "waiting" },
        { post_id: 4, user_id: 1, description: "user 1 reported post 4", status: "waiting" },
        { post_id: 1, user_id: 1, description: "user 1 reported post 1", status: "waiting" },
        { post_id: 2, user_id: 1, description: "user 1 reported post 2", status: "waiting" },
        { post_id: 3, user_id: 1, description: "user 1 reported post 3", status: "waiting" },
        { post_id: 4, user_id: 1, description: "user 1 reported post 4", status: "waiting" },
        { post_id: 1, user_id: 1, description: "user 1 reported post 1", status: "waiting" },
        { post_id: 2, user_id: 1, description: "user 1 reported post 2", status: "waiting" },
        { post_id: 3, user_id: 1, description: "user 1 reported post 3", status: "waiting" },
        { post_id: 4, user_id: 1, description: "user 1 reported post 4", status: "waiting" },
        // more...
    ]
    
    return (
        <Container fluid className="h-screen p-0">
            <Row className="h-screen m-0">
                <Col xs={12} className="p-0">
                    <div className="top-0 z-50 px-5 py-4 flex items-center">
                        <h2 className="text-xl font-bold">Reports</h2>
                    </div>
                    <div className='flex flex-nowrap w-full items-center border-b border-slate-500'>
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
                </Col>
            </Row>
        </Container>
    );
}

export default PostReportsPage