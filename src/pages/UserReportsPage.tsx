import { Button, Col, Container, Row } from 'react-bootstrap'
import UserReportCard from '../components/UserReportCard.tsx'
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchApi } from '../lib/fetchApi.ts';
import { useEffect, useState } from 'react';

const UserReportsPage = () => {
    document.title = "User Reports"

    const [userReports, setUserReports] = useState<any[]>([]);

    const [page, setPage] = useState(0)

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token') || '',
                'Content-Type': 'application/json',
            };

            const response = await fetchApi('http://localhost:8000/user-reports/' + page, 'GET', headers);
            const data = await response.json();

            if (response.status === 200) {
                setUserReports(Array.isArray(data) ? data : []);
            } else if (response.status === 400) {
                alert(data.message)
                setUserReports([])
            } else if (response.status === 500) {
                alert('Internal server error')
                setUserReports([])
            } else if (response.status === 403) {
                alert('Unauthorized access, redirecting to home page')
                navigate('/')
            }
        } catch (error) {
            alert('Uknown error, unable to load data')
        }
    };

    const changePageAdd = () => {
        setPage(page + 1)

        fetchData()
    }

    const changePageDec = () => {
        setPage(page - 1)

        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [page])
    
    return (
        <Container fluid className="h-screen p-0">
            <Row className="h-screen m-0">
                <Col xs={12} className="p-0">
                    <div className="top-0 z-50 px-5 py-4 flex items-center">
                        <h2 className="text-xl font-bold">Reports</h2>
                    </div>
                    <div className='flex   items-center border-b border-slate-500'>
                        <div className='flex-1 items-center text-center p-[1vh]'>
                            <NavLink to={`/post-reports`}>
                                {({isActive}) => (
                                    <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Post Reports</p>
                                )}
                            </NavLink>
                        </div>
                        <div className='flex-1 items-center text-center'>
                            <NavLink to={`/user-reports`}>
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
                    <div className='flex justify-center gap-4 mt-4'>
                            <Button className='border-2 rounded-md border-sky-500 hover:bg-sky-500' onClick={changePageAdd}>Previous</Button>
                            <Button className='border-2 rounded-md border-sky-500 hover:bg-sky-500' onClick={changePageDec}>Next</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default UserReportsPage