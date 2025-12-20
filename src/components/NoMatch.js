import { ErrorMessage } from "./ErrorMessage"
import { Link, useNavigate } from "react-router-dom-v5-compat";
import  Button  from "react-bootstrap/Button";

export const NoMatch = () => {
    const navigate = useNavigate();
    return (<div className="noMatch">
        <ErrorMessage msg={"Page doesn't exist"}/>
         <Button className="btn btn-success mb-3" onClick={() => navigate(-1)}>
           Go back
            </Button>
        <Button className="btn btn-primary">
            <Link to="/" style={{color: "white", textDecoration: "none"}}>Go to home page</Link>
            </Button>
        </div>
    )
}