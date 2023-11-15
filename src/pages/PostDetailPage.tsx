import { Col, Container, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { fetchApi } from "../lib/fetchApi";
import { useEffect, useState } from "react";

const PostDetailPage = () => {
	
	const { post_id } = useParams();

	const [postData, setPostData] = useState(null);
	const [userData, setUserData] = useState(null);
	const [resourceData, setResourceData] = useState(null);
	const [loading, setLoading] = useState(true);

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

				console.log(resourceData);
			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			} finally {
				setLoading(false);
			}
	
		}

		getPostDetail();
	}, []);

	return (
	<Container fluid>
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
		</Row>
	</Container>
	);
}

export default PostDetailPage