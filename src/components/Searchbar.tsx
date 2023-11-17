import { Row } from "react-bootstrap"
import NotificationCard from "./NotificationCard";
import { useEffect, useState } from "react";
import { fetchApi } from "../lib/fetchApi";

const Searchbar = () => {
    const [notificationsData, setNotificationsData] = useState<any[]>([])
  
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: "Bearer " + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      
        const response = await fetchApi('http://localhost:8000/notifications', 'GET', headers)
      
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
        <Row className="mx-5 mt-4 fixed w-1/4 rounded-xl p-3 bg-slate-700 flex items-center">
            <div className="font-bold text-xl mb-2">Global</div>
            <div className="h-full m-0 p-0">
                <Row className="m-0">
                <>
                    {
                      notificationsData.map(
                        datum => (
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
        </Row>
    )
}

export default Searchbar