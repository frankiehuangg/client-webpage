import profile from '../assets/default.jpg'
import { ArrowLeft, Calendar } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import { useEffect, useState } from 'react';
import { fetchApi } from '../lib/fetchApi';

const UserPage = () => {
    type post = { 
        post_id: number; 
        profile_picture_path: string; 
        display_name: string; 
        username: string; 
        user_id: number; 
        post_timestamp: string; 
        post_content: string; 
        replies: number; 
        shares: number; 
        likes: number; 
        resources: string[]; 
    }

    const { user_id } = useParams()

    const [user_data, setUserData] = useState<any>([])
    const [post_data, setPostData] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json'
                }

                const responseUserData = await fetchApi(
                    `http://localhost:8000/user?user_id=${user_id}`,
                    'GET',
                    headers
                )

                const dataUser = await responseUserData.json()
                                
                if (responseUserData.status === 200) {
                    setUserData(dataUser)
                }

                
                const responsePostData = await fetchApi(
                    `http://localhost:8000/user/post?user_id=${user_id}`,
                    'GET',
                    headers
                )
                    
                const dataPosts = await responsePostData.json()
                
                if (responsePostData.status === 200) {
                    setPostData(dataPosts)
                }
            } catch (err) {
                alert('Uknown error, failed to load user data')
            }
        }

        fetchData()
    }, [])

    const blockUserHandler = async (e: any) => {
        e.preventDefault()

        if (user_data.user_id === user_id) {
            alert('Not able to block yourself!')
            return
        }

        try {
            const headers = {
                Authorization: "Bearer " + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }

            const body = {
                other_user_id: user_id
            }

            const responseFollowed = await fetchApi(
                `http://localhost:8000/follow?user_id=${user_id}`,
                'GET',
                headers
            )

            const followed = await responseFollowed.json()
            
            if (followed[0]._text === 'false') {
                const response = await fetchApi(
                    `http://localhost:8000/block?user_id=${user_id}`,
                    'GET',
                    headers
                )

                const blocked = await response.json()                

                if (blocked[0]._text === 'true'){                    
                    const unblock = await fetchApi(
                        `http://localhost:8000/block`,
                        'DELETE',
                        headers,
                        body
                    )

                    alert('User unblocked successfully');
                } else {                    
                    const block = await fetchApi(
                        `http://localhost:8000/block`,
                        'POST',
                        headers,
                        body
                    )
                    
                    alert('User blocked successfully');
                }
            } else {
                alert('Unable to block followed users!')
            }
        } catch (err) {
            alert('Uknown error, unable to block')
        }
    }

    const followUserHandler = async (e: any) => {
        e.preventDefault()

        if (user_data.user_id === user_id) {
            alert('Unable to follow yourself!')
            return
        }

        try {
            const headers = {
                Authorization: "Bearer " + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }

            const body = {
                other_user_id: user_id
            }

            const responseBlocked = await fetchApi(
                `http://localhost:8000/block?user_id=${user_id}`,
                'GET',
                headers
            )
            
            const blocked = await responseBlocked.json() 
            
            if (blocked[0]._text === 'false') {
                const responseFollowed = await fetchApi(
                    `http://localhost:8000/follow?user_id=${user_id}`,
                    'GET',
                    headers
                )

                const followed = await responseFollowed.json()

                if (followed[0]._text === 'true') {
                    const responseUnfollow = await fetchApi(
                        `http://localhost:8000/follow`,
                        'DELETE',
                        headers,
                        body
                    )

                    alert('User unfollowed successfully');
                } else {
                    const responseFollow = await fetchApi(
                        `http://localhost:8000/follow`,
                        'POST',
                        headers,
                        body
                    )

                    alert('User followed successfully');
                }
            } else {                
                alert('Unable to follow blocked user!')
            }
        } catch (err) {

        }
    }

    return (
    <Container fluid className="h-screen p-0">
        <div className="grow basis-2/5 z-30">
            <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
                <Link to="" className="mr-4">
                    <ArrowLeft className="w-8 h-8 hover:bg-slate-500 p-1 rounded-full" />
                </Link>
                <h2 className="text-xl font-bold">{user_data.display_name}</h2>
            </div>
            <div className="h-max w-full bg-black">
                <div className="h-48 bg-slate-600"></div>
                <div className="px-4 py-4">
                    <img src={profile} className="w-32 h-32 -mt-20 border-4 border-solid border-slate-50 rounded-full" />
                    <div className='-mt-14 pb-4 flex justify-end gap-4'>
                        <button className='bg-slate-500 border-none rounded-full px-4 py-2 font-semibold' onClick={blockUserHandler}>Block</button>
                        <button className='bg-slate-50 border-none rounded-full px-4 py-2 font-semibold text-black' onClick={followUserHandler}>Follow</button>
                    </div>
                    <div className="text-xl font-bold mt-2">
                        {user_data.display_name}
                    </div>
                    <div className="text-sm text-slate-500 mb-3">
                        @{user_data.username}
                    </div>
                    <div className="text-sm mb-3">
                        {user_data.description}
                    </div>
                    <div className="text-sm text-slate-500 flex items-centre mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {user_data.join_date}
                    </div>
                    <div className="text-sm font-bold flex">
                        <Link className="inline-flex mr-5 hover:underline" to={'/user/' + user_data.user_id +'/following/'}>
                            {user_data.following_count} Following
                        </Link>
                        <Link className="inline-flex hover:underline" to={'/user/' + user_data.user_id +'/followers/'}>
                            {user_data.follower_count} Followers
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full justify-around flex flex-row bg-black border-b border-slate-600 border-solid">
                <Link to={"/user/" + user_data.user_id}  className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 border-b-4 border-blue-500 border-solid font-bold">Posts</div>
                </Link>
            </div>
            <Row className='m-0 p-0'>
                {
                  post_data.map(
                      (datum) => (
                      <PostCard 
                      post_id={datum.post_id}
                      profile_picture_path={datum.profile_picture_path}
                      display_name={datum.display_name}
                      username={datum.username}
                      user_id={datum.user_id}
                      post_timestamp={datum.post_timestamp}
                      post_content={datum.post_content}
                      replies={datum.replies}
                      shares={datum.shares}
                      likes={datum.likes}
                      resources={datum.resources}
                      />
                    )
                  )
                }
            </Row>
        </div>
    </Container>
    )
}

export default UserPage