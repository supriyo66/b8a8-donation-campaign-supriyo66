import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl">404 Error!</h1>
            <Link to="/" className="btn btn-primary mt-2">Go Back</Link><br></br>
            
        </div>
    );
};

export default Error;