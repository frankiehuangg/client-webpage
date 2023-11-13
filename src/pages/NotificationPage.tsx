import { Container, Row } from "react-bootstrap";
import NotificationCard from "../components/NotificationCard";

const NotificationPage = () => {
    const notif_data = [{
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
      {
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        content               : "New phone, new tweet",
      },
    ];

    return (
      <Container fluid className="h-screen p-0">
        <div className="grow basis-2/5 z-30">
            <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
                <h2 className="text-xl font-bold">Notification</h2>
            </div>
            <div className="h-full m-0 p-0">
                <Row className="m-0">
                <>
                    {
                      notif_data.map(
                        datum => (
                          <NotificationCard 
                            profilePicture={datum.profile_picture_path}
                            displayName={datum.display_name}
                            content={datum.content}
                          />
                        )
                      )
                    }
                    </>
                </Row>
            </div>
        </div>
        </Container>
    )
}

export default NotificationPage