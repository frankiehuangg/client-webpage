import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface PostCard {
    post_id                 : number,
    profile_picture_path    : string,
    display_name            : string,
    username                : string,
    user_id                 : number,
    post_timestamp          : string,
    post_content            : string,
    replies                 : number,
    shares                  : number,
    likes                   : number,
    resources               : string[]
}

const PostCard = (params: PostCard) => {
  const post_id               = params.post_id;
  const profile_picture_path  = params.profile_picture_path;
  const display_name          = params.display_name ? params.display_name : params.username;
  const username              = params.username;
  const user_id               = params.user_id;
  const post_timestamp        = params.post_timestamp;
  const post_content          = params.post_content;
  const resources             = params.resources;
  const [replies, setReplies] = useState(params.replies);
  const [shares, setShares]   = useState(params.shares);
  const [likes, setLikes]     = useState(params.likes);

  const navigate = useNavigate();

  return (
    <Link className="m-0 p-0 h-fit border-b" to={'/post/' + post_id}>
      <Row className="my-2 mx-0 p-0">
        <Col xs={1} className="m-0 p-0 h-fit">
          <Button variant="link" className="m-0 p-0" onClick={ () => {navigate('/user/' + user_id)} }>
            <Image src={profile_picture_path} roundedCircle className="m-2 p-0 w-10 h-10" />
          </Button>
        </Col>
        <Col xs={11} className="m-0 p-0 h-fit">
          <Row className="mx-2 p-1 h-fit">
            <span className="inline-block gap-2 p-0 m-0 w-fit">
              <span className="mr-4 p-0 h-6 w-fit font-bold" onClick={ (e) => { e.preventDefault(); navigate('/user/' + user_id) } }>{display_name}</span>
              <span className="mr-2 p-0 h-6 w-fit font-thin" onClick={ (e) => { e.preventDefault(); navigate('/user/' + user_id) } }>@{username}</span>
              <span className="mr-2 p-0 h-6 w-fit font-thin">·</span>
              <span className="p-0 h-6 w-fit font-thin">{post_timestamp}</span>
            </span>
          </Row>
          <Row className="m-2 p-1 h-50">
            { post_content }
          </Row>
          <Row className="m-2 p-1 min-h-0">
            { resources.map(resource => resource )}
          </Row>
          <Row className="m-2 p-1">
            <Col xs={4} as="div" className="p-0 h-8" onClick={ (e) => {e.preventDefault(); setReplies(replies + 1) } }>{replies}</Col>
            <Col xs={4} as="div" className="p-0 h-8" onClick={ (e) => {e.preventDefault(); setShares(shares + 1) } }>{shares}</Col>
            <Col xs={4} as="div" className="p-0 h-8" onClick={ (e) => {e.preventDefault(); setLikes(likes + 1) } }>{likes}</Col>
          </Row>
        </Col>
      </Row>
    </Link>
  );
}

export default PostCard