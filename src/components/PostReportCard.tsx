const PostReportCard = ({postReport} : {
    postReport : {
        post_id: number,
        user_id: number,
        description: string,
        status: string,
    }
}) => {
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
                <p className="flex-1">Status: {postReport.status}</p>
                <div className="flex flex-row flex-1">
                    <div className="flex-1">
                        <button className="mt-2 py-2 px-3 bg-sky-500 rounded-full text-sm outline-none border-none font-bold">
                            Accept
                        </button>
                    </div>
                    <div className="flex-1">
                        <button className="mt-2 py-2 px-3 bg-slate-500 rounded-full text-sm outline-none border-none font-bold">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostReportCard