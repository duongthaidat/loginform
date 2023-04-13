import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";

const Dashboard = () => {
    const {logout} = useContext(AuthContext)
    const onLogout = (e) =>{
        e.prevenDefault()
        logout();
    }

    return ( 
        <div className='row'>
            <div className="col-sm-8">
                <h1>
                    Hello admin
                </h1>
            </div>
            <div className="col-sm-4">
                <h1>
                <a href="#" onClick={onLogout}>Logout</a>
                </h1>
            </div>
        </div>
     );
}
 
export default Dashboard