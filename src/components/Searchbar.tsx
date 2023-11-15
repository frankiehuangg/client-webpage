import { Row } from "react-bootstrap"
import NotificationCard from "./NotificationCard";

const Searchbar = () => {
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
    ];

    return (
        <Row className="mx-5 mt-4 fixed w-1/4 rounded-xl p-3 bg-slate-700 flex items-center">
            <div className="font-bold text-xl mb-2">Global</div>
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
        </Row>
    )
}

export default Searchbar