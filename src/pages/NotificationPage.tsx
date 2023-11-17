import { Container, Row } from "react-bootstrap";
import NotificationCard from "../components/NotificationCard";
import { useEffect, useState } from "react";
import { fetchApi } from "../lib/fetchApi";

const NotificationPage = () => {

    const [notificationsData, setNotificationsData] = useState<any[]>([])

    const fetchData = async () => {
      try {
        const headers = {
          Authorization: "Bearer " + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }

        const response = await fetchApi('http://localhost:8000/notifications?current=true', 'GET', headers)

        const data = await response.json()

        if (response.status === 200) {
          setNotificationsData(Array.isArray(data) ? data : []);
        }
        else {
          alert('Notifications is missing')
        }
      } catch (error) {
        console.log('Unknown error, failed to load notifications data')
      }
    }

    useEffect(() => {
      fetchData()
    }, [notificationsData])

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
                      notificationsData.map(
                        (datum) => (
                          <NotificationCard 
                            profilePicture="../public/images/default.jpg"
                            displayName={datum.userId._text}
                            content={datum.notificationContent._text}
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