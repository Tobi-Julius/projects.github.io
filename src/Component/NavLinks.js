import Home from "./Home"
import Crew from "./Crew"
import Destination from "./Destination"
import Tech from "./Tech"
import NotFound from "./NotFound"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom"


const NavLinks = () => {
    return (
        <Router>
        <div>
     <ul className="nav-list">
         <li>
             <Link className="nav-item" to="/">00<span>HOME</span></Link>
         </li>
         <li>
             <Link className="nav-item" to="/Destination">01<span>DESTINATION</span></Link>
         </li>
         <li>
             <Link className="nav-item" to="/Crew">02<span>CREW</span></Link>
         </li>
         <li>
             <Link className="nav-item" to="/Tech">03<span>TECHNOLOGY</span></Link>
         </li>
     </ul>
        </div>
            
            <div>
            {/* <Switch>
    <Route exact path="/" >
     {Home}
    </Route>
    <Route exact path="/Destination">
        {Destination}
    </Route>
    <Route path="/Crew">
        {Crew}
    </Route>
    <Route exact path="/Tech">
    {Tech} 
    </Route>
    <Route exact component={NotFound}>
    </Route>
    </Switch> */}
    </div>
    </Router>
    )
}

export default NavLinks