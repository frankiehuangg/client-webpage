import { Col, Container, Row, Button } from 'react-bootstrap'
import PostReportCard from '../components/PostReportCard.tsx'
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchApi } from '../lib/fetchApi.ts'
import { useEffect, useState } from 'react'

const PostReportsPage = () => {
    document.title = "Post Reports"
    
    const [postReports, setPostReports] = useState<any[]>([]);

    const [page, setPage] = useState(0)

    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token') || '',
                'Content-Type': 'application/json',
            };

            const response = await fetchApi(
                `http://localhost:8000/post-reports?page=${page}`, 
                'GET', 
                headers
            );

            const data = await response.json();

            if (response.status === 200) {
                setPostReports(Array.isArray(data) ? data : []);
                return
            } else if (response.status === 400) {
                alert(data.message)
                setPostReports([])
                navigate('/')
            } else if (response.status === 500) {
                alert('Internal server error')
                setPostReports([])
                navigate('/')
            } else if (response.status === 403) {
                alert('Unauthorized access, redirecting to home page')
                navigate('/')
            }
            navigate('/')
        } catch (error) {
            alert('Uknown error, unable to load data')
            navigate('/')
        }
    };

    const changePageAdd = () => {
        setPage(page + 1)

        fetchData()
    }

    const changePageDec = () => {
        if (page !== 0) {
            setPage(page - 1)
        }

        fetchData()
    }

    useEffect(() => {
        fetchData();
    }, [page])
    
    return (
        <Container fluid className="h-screen p-0">
            <Row className="h-screen m-0">
                <Col xs={12} className="p-0">
                    <div className="top-0 z-50 px-5 py-4 flex items-center">
                        <h2 className="text-xl font-bold">Reports</h2>
                    </div>
                    <div className='flex flex-nowrap w-full items-center border-b border-slate-500'>
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
                        {postReports.map((postReport, idx) => (
                            <PostReportCard key={idx} postReport={postReport}/>
                        ))}
                    </div>
                    <div className='flex justify-center gap-4 mt-4'>
                            <Button className='border-2 rounded-md border-sky-500 hover:bg-sky-500' onClick={changePageDec}>Previous</Button>
                            <Button className='border-2 rounded-md border-sky-500 hover:bg-sky-500' onClick={changePageAdd}>Next</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PostReportsPage