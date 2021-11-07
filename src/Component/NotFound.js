import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
export default function NotFound () {
    return(
        <div>
            <h1>404 - Page Not Found</h1>
            <Switch>
                <Route>
            <Link to="/">Home</Link>
            </Route>
            </Switch>
        </div>
    )
}