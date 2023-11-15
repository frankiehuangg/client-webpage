import { useState } from "react";
import { fetchApi } from "../lib/fetchApi";

const PostReportCard = ({postReport} : {
    postReport : {
        post_id: number,
        user_id: number,
        description: string,
        status: string,
    }
}) => {

    const [status, setStatus] = useState(postReport.status)

    const statusAcceptedHandler = async (e: any) => {
        e.preventDefault

        try {
            const body = {
                status: "Accepted"
            }

            const headers = {
                'Content-Type': 'application/json'
            }
    
            const response = await fetchApi('http://localhost:8000/post-reports/' + postReport.post_id + '/status', 'POST', headers, body)
            
            const data = await response.json()

            if (response.status === 200) {
                alert(data.message)
                setStatus(data.status)
            } else if (response.status === 400) {
                alert(data.message)
                setStatus(postReport.status)
            } else if (response.status === 500) {
                alert('Internal server error')
                setStatus(postReport.status)
            }
        } catch (err) {
            alert('Uknown error, change status failed')
        }
    }

    const statusRejectedHandler = async (e: any) => {
        e.preventDefault

        try {
            const body = {
                status: "Rejected"
            }

            const headers = {
                'Content-Type': 'application/json'
            }
    
            const response = await fetchApi('http://localhost:8000/post-reports/' + postReport.post_id, 'POST', headers, body)
            
            const data = await response.json()

            if (response.status === 200) {
                alert(data.message)
                setStatus(data.status)
            } else if (response.status === 400) {
                alert(data.message)
                setStatus(postReport.status)
            } else if (response.status === 500) {
                alert('Internal server error')
                setStatus(postReport.status)
            }
        } catch (err) {
            alert('Uknown error, change status failed')
        }
    }

    return (
        <div className="flex flex-row border-b-[2px] border-solid border-stone-700 p-[2vh]">
            <div className="flex flex-1 flex-col gap-[2vh]">
                <div className="flex flex-1 flex-row w-full">
                    <h4 className="flex-1">Post ID: {postReport.post_id}</h4>
                    <h4 className="flex-1">Reporter: {postReport.user_id}</h4>
                </div>
                <div className="flex-1">
                    <p>Description:</p>
                    <p>{postReport.description}</p>
                </div>
            </div>
            <div className="flex flex-1 flex-col text-center">
                <p className="flex-1">Status: {status}</p>
                <div className="flex flex-row flex-1">
                    <div className="flex-1">
                        <button onClick={statusAcceptedHandler}>
                            Accept
                        </button>
                    </div>
                    <div className="flex-1">
                        <button onClick={statusRejectedHandler}>
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostReportCard