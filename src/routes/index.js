import {Switch, Route, Redirect } from 'react-router-dom'
import { Homepage} from '../pages'

function Routes() {
    return (
        <Switch>
            <Redirect from={'/'} to={'/homepage'} exact/> 
            <Route path="/homepage" component={Homepage} exact/>{/* 
            <Route path="/login" component={Login} exact/> */}
            {/* 
            <Route path="/login" component={Login} exact/> */}
        </Switch>
    )
}
export default Routes;