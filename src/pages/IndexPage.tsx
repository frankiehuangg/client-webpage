import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap-icons";
import PostCard from "../components/PostCard";
import { fetchApi } from "../lib/fetchApi";

const IndexPage = () => {

  const [page, setPage] = useState("for-you");
  const [fypPosts, setFypPosts] = useState<any[]>([]);
  const [postContent, setPostContent] = useState('');
  const [resource, setResource] = useState<any>([]);

  const IndexPageButton = ({ name } : { name: string }) => {
    const formattedName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

      return (
        <Col xs={12} className="my-auto p-0 border-solid border-r border-slate-600" >
          <Container
            bsPrefix=""
            as={"div"}
            className="home-page-button text-white font-bold text-center"
            >
            { formattedName }
            </Container>
        </Col>
      );
  }

  const handlePostContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostContent(e.target.value)
  }

  const handleResource = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResource(e.target.value)
  }

  const handlePost = async (e: any) => {
    e.preventDefault();

    try {
      const body = {
        post_content: postContent, 
        resource: resource,
      }

      const headers = {
        Authorization: "Bearer " + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }

      const response = await fetchApi('http://localhost:8000/post', 'POST', headers, body)

      const data = await response.json()

      if (response.status === 200) {
        alert('Post success')
      }
      else {
        alert(data.message)
      }
    } catch (error) {
      alert('Unknown error, post unsuccessful')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
          const headers = {
            'Content-Type' : 'application/json',
          }
  
          const response = await fetchApi (
            'http://localhost:8000/post/fyp',
            'GET',
            headers
          )
  
          const data = await response.json()
  
          if (response.status === 200) {
            setFypPosts(Array.isArray(data) ? data : [])
          }
          else {
            alert(data)
          }
      } catch (error) {
        console.log('Unknown error, unable to load data')
      }
    }

      fetchData();
  }, [fypPosts]);

  return (
    <Container fluid className="h-screen p-0">
      <Row className="h-screen m-0">
        <Col xs={12} className="p-0">
          <div className="border-solid border-b border-slate-600 m-0">
            <IndexPageButton name="for-you" />
          </div>
          <div className="pb-2.5 border-solid border-b-4 border-slate-600">
              <form className="p-3 flex flex-row">
                  <div className="mr-2">
                      <img src="/public/images/default.jpg" alt="Profile Picture" className="w-10 h-10 mt-2 rounded-full" />
                  </div>
                  <div className="left-6 flex flex-col w-full">
                      <div className="flex py-3">
                          <input className="flex-1 text-xl border-none outline-none bg-inherit" type="text" placeholder="What is happening?!" onChange={handlePostContent}/>
                      </div>
                      <div className="mt-5 w-full flex justify-between">
                          <label className="mt-2 p-2 text-sm outline-none border-none">
                          </label>
                          <button type="submit" className="mt-2 py-2 px-3 bg-sky-500 rounded-full text-sm outline-none border-none font-bold" onClick={handlePost}>Tweet</button>
                      </div>
                  </div>
              </form>
          </div>
          <div className="m-0 p-0">
            <Row className="m-0">
                <>
                {
                  fypPosts.map(
                    datum => (
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
                </>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IndexPage