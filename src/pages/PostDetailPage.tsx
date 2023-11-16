import { Container, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { fetchApi } from "../lib/fetchApi";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap-icons";

const PostDetailPage = () => {
	
	const { post_id } = useParams();

	const [postData, setPostData] = useState<any>(null);
	const [userData, setUserData] = useState<any>(null);
	const [resourceData, setResourceData] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const [reply_data, setReplyData] = useState<any[]>([]);

	useEffect(() => {
		const getPostDetail = async () => {
			try {
				const headers = {
					'Content-Type': 'application/json'
				}
		
				const postResponse = await fetchApi(`http://localhost:8000/post?post_id=` + post_id, 'GET', headers);
		
				const postResponseData = await postResponse.json();
	
				setPostData(postResponseData);

				const userResponse = await fetchApi(`http://localhost:8000/post/user?post_id=` + post_id, 'GET', headers);

				const userResponseData = await userResponse.json();

				setUserData(userResponseData);

				const resourceResponse = await fetchApi(`http://localhost:8000/post/resource?post_id=` + post_id, 'GET', headers);
			
				const resourceResponseData = await resourceResponse.json();

				setResourceData(resourceResponseData);

				const replies = await fetchApi('http://localhost:8000/post/replies?post_id=' + post_id, 'GET', headers);

				const repliesData = await replies.json();

				setReplyData(repliesData);
			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			} finally {
				setLoading(false);
			}
	
		}

		getPostDetail();
	}, []);

	return (
	<Container fluid className="h-screen p-0">
		<Row>
			<div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
				<h2 className="text-xl font-bold">Post</h2>
			</div>
			<div className="my-2 border-solid border-b-4 border-slate-500">
				{loading ? (
					<>Loading post</>
				) : (postData.post_id === null ? <></> :
					<PostCard 
						post_id={postData.post_id}
						profile_picture_path={userData.profile_picture_path}
						display_name={userData.display_name}
						username={userData.username}
						user_id={userData.user_id}
						post_timestamp={postData.post_timestamp}
						post_content={postData.post_content}
						replies={postData.replies}
						shares={postData.shares}
						likes={postData.likes}
						resources={resourceData.resources}
					/>	
				)
				}
			</div>
			<div className="pb-2 mb-4 border-solid border-b-4 border-slate-600">
              <form className="py-1 px-2 flex flex-row mb-2">
                  <div className="mr-3">
                      <img src="/public/images/default.jpg" alt="Profile Picture" className="w-10 h-10 mt-2 rounded-full" />
                  </div>
                  <div className="left-6 flex flex-col w-full">
                      <div className="flex py-3">
                          <input className="flex-1 text-xl border-none outline-none bg-inherit" type="text" placeholder="Post your reply" />
                      </div>
                      <div className="mt-3 w-full flex justify-between">
                          <label className="mt-2 p-2 bg-sky-500 rounded-full text-sm outline-none border-none">
                              <Image className="w-5 h-5" />
                          </label>
                          <button type="submit" className="mt-2 py-2 px-3 bg-sky-500 rounded-full text-sm outline-none border-none font-bold">Reply</button>
                      </div>
                  </div>
              </form>
          </div>
		  <Row className='m-0 '>
                {
                  reply_data.map(
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
            </Row>
		</Row>
	</Container>
	);
}

export default PostDetailPage