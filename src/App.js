
import Mobile from "./Component/Mobile"
import Desktop from "./Component/Desktop"
import { DiJqueryLogo } from "react-icons/di"
import Home from "./Component/Home"
import Crew from "./Component/Crew"
import Tech from "./Component/Tech"
import Destination from "./Component/Destination"
import NotFound from "./Component/NotFound"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom"


export default function App () {
    return(
        <Router>
        {/* <div>
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
        </div> */}
        <DiJqueryLogo className="logo"/>
        <Mobile/>
        <Desktop/>

        <Switch>
    <Route exact path="/" >
        <Home/>
    </Route>
    <Route path="/Destination">
        <Destination/>
    </Route>
    <Route path="/Crew">
        <Crew/>
    </Route>
    <Route path="/Tech">
        <Tech/>
    </Route>
    <Route component={NotFound}>
    </Route>
    </Switch> 
        </Router>
    )
}