import React from 'react';
import {withRouter} from 'react-router-dom'
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './Home'
import CityLife from './CityLife';


const RestrictedRoute = ({component: Component, authUser, ...rest}) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect to='/'/>
            }
    />;

class RouterApp extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentWillMount(){
        
    }

    componentDidUpdate () {
        
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="app-container">            
                <Switch>
                    <Route exact path='/' component={Home}/> 
                    <RestrictedRoute path='/citylife' component={CityLife}  authUser={this.props.authUser}/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = ({ user }) => {
    const { authUser } = user;
    return { authUser }
};
export default withRouter(connect(mapStateToProps)(RouterApp));
