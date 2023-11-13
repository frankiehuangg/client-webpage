import { Col, Container, Row } from 'react-bootstrap'
import UserReportCard from '../components/UserReportCard.tsx'
import { NavLink } from 'react-router-dom'

const UserReportsPage = () => {
    document.title = "User Reports"

    const userReports = [
        {report_id : 1, user_id : 1, reporter : 2, description : "user 2 reports user 1", status : "waiting"},
        {report_id : 2, user_id : 3, reporter : 4, description : "user 3 reports user 4", status : "waiting"},
        {report_id : 3, user_id : 5, reporter : 6, description : "user 5 reports user 6", status : "waiting"},
        {report_id : 4, user_id : 7, reporter : 8, description : "user 7 reports user 8", status : "waiting"},
        {report_id : 1, user_id : 1, reporter : 2, description : "user 2 reports user 1", status : "waiting"},
        {report_id : 2, user_id : 3, reporter : 4, description : "user 3 reports user 4", status : "waiting"},
        {report_id : 3, user_id : 5, reporter : 6, description : "user 5 reports user 6", status : "waiting"},
        {report_id : 4, user_id : 7, reporter : 8, description : "user 7 reports user 8", status : "waiting"},
        // more...
    ]

    return (
        <Container fluid className="h-screen p-0">
            <Row className="h-screen m-0">
                <Col xs={12} className="p-0">
                    <div className="top-0 z-50 px-5 py-4 flex items-center">
                        <h2 className="text-xl font-bold">Reports</h2>
                    </div>
                    <div className='flex   items-center border-b-[2px]'>
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
                </Col>
            </Row>
        </Container>
    );
}

export default UserReportsPage