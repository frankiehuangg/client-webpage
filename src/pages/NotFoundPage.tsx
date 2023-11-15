import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container fluid className="h-screen p-0">
            <div className="h-full">
                <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4">
			    	<h2 className="text-xl font-bold">Page Not Found</h2>
			    </div>
                <div className="align-middle text-center mt-20 mb-4">
                    Hmm...this page doesn’t exist. Try searching for something else.
                </div>
                <div className="flex p-4 justify-center">
                    <Link className="rounded-full bg-sky-500 px-3 py-2" to="/">Go Home</Link>
                </div>
            </div>
        </Container>
    );
}

export default NotFoundPage