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
                post_id: postReport.post_id,
                user_id: postReport.user_id,
                status: "Accepted"
            }

            const headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
    
            const response = await fetchApi(
                'http://localhost:8000/post-reports/status', 
                'PATCH', 
                headers, 
                body
            )
            
            const data = await response.json()

            if (response.status === 200) {
                alert(data.message)
                setStatus("Accepted")
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
                post_id: postReport.post_id,
                user_id: postReport.user_id,
                status: "Rejected"
            }

            const headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
    
            const response = await fetchApi(
                'http://localhost:8000/post-reports/status', 
                'PATCH', 
                headers, 
                body
            )
            
            const data = await response.json()


            if (response.status === 200) {
                alert(data.message)
                setStatus("Rejected")
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
            <div className="flex flex-1 flex-col gap-[2vh] bg-slate-800 mr-2 p-2 px-4 rounded-lg">
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
                        <button className="mt-2 py-2 px-3 bg-sky-500 rounded-full text-sm outline-none border-none font-bold" onClick={statusAcceptedHandler}>
                            Accept
                        </button>
                    </div>
                    <div className="flex-1">
                        <button className="mt-2 py-2 px-3 bg-slate-500 rounded-full text-sm outline-none border-none font-bold" onClick={statusRejectedHandler}>
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostReportCard