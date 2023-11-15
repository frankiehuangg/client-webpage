import { useState } from "react"
import { fetchApi } from "../lib/fetchApi"

const UserReportCard = ({userReport}: {
    userReport : {
        report_id : number,
        user_id : number,
        reporter : number,
        description : string,
        status : string,
    }
}) => {

    const [status, setStatus] = useState(userReport.status)

    const statusAcceptedHandler = async (e: any) => {
        e.preventDefault

        try {
            const body = {
                report_id: userReport.report_id,
                status: "Accepted"
            }

            const headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
    
            const response = await fetchApi('http://localhost:8000/user-reports', 'PATCH', headers, body)
            
            const data = await response.json()

            if (response.status === 200) {
                alert("Accepted")
                setStatus(data.status)
            } else if (response.status === 400) {
                alert(data.message)
                setStatus(userReport.status)
            } else if (response.status === 500) {
                alert('Internal server error')
                setStatus(userReport.status)
            }
        } catch (err) {
            alert('Uknown error, change status failed')
        }
    }

    const statusRejectedHandler = async (e: any) => {
        e.preventDefault

        try {
            const body = {
                report_id: userReport.report_id,
                status: "Rejected"
            }

            const headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
    
            const response = await fetchApi('http://localhost:8000/user-reports', 'PATCH', headers, body)
            
            const data = await response.json()

            if (response.status === 200) {
                alert("Rejected")
                setStatus(data.status)
            } else if (response.status === 400) {
                alert(data.message)
                setStatus(userReport.status)
            } else if (response.status === 500) {
                alert('Internal server error')
                setStatus(userReport.status)
            }
        } catch (err) {
            alert('Uknown error, change status failed')
        }
    }

    return (
        <div className="flex border-b-[2px] border-solid border-stone-700 p-[2vh]">
            <div className="flex flex-1 flex-col gap-[1vh] bg-slate-800 mr-2 p-2 px-4 rounded-lg">
                <div className="flex-1">
                    <h2>Report ID: {userReport.report_id}</h2>
                </div>
                <div className="flex flex-1 w-full">
                    <h4 className="flex-1">Reported: {userReport.user_id}</h4>
                    <h4 className="text-right">Reporter: {userReport.reporter}</h4>
                </div>
                <div className="flex-1">
                    <p>Description:</p>
                    <p>{userReport.description}</p>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-center">
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

export default UserReportCard