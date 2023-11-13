const UserReportCard = ({userReport}: {
    userReport : {
        report_id : number,
        user_id : number,
        reporter : number,
        description : string,
        status : string,
    }
}) => {

    

    return (
        <div className="flex border-b-[2px] border-solid border-stone-700 p-[2vh]">
            <div className="flex flex-1 flex-col gap-[1vh]">
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
                <p className="flex-1">Status: {userReport.status}</p>
                <div className="flex flex-row flex-1">
                    <div className="flex-1">
                        <button >
                            Accept
                        </button>
                    </div>
                    <div className="flex-1">
                        <button>
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserReportCard