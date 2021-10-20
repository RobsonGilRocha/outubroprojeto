import {Switch, Route, Redirect } from 'react-router-dom'
import { Homepage, Auth} from '../pages'

function Routes() {
    return (
        <Switch>
            <Redirect from={'/'} to={'/login'} exact/> 
            <Route path="/login" component={Auth} exact/>
            <Route path="/homepage" component={Homepage} exact/>
        </Switch>
    )
}
export default Routes;