import { Col, Container, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { fetchApi } from "../lib/fetchApi";

const PostDetailPage = () => {
	
	const { post_id } = useParams();

	const getPostDetail = async (e: any) => {
		e.preventDefault();

		const headers = {
			'Content-Type': 'application/json'
		}

		const response = await fetchApi(`http://monolithic-web:80/api/post?post_id=` + post_id, 'GET', headers);

		const data = await response.json();
		console.log(data);
		
		if (response.status === 200) {
			return data;
		}
	}

	const post_data = getPostDetail();

	return (
	<Container fluid>
		<Row>
			<div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
				<h2 className="text-xl font-bold">Post</h2>
			</div>
			<div className="my-2 border-solid border-b-4 border-slate-500">
				{
					post_data.map(
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
			</div>
		</Row>
	</Container>
	);
}

export default PostDetailPage