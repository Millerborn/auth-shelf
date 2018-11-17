import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import CardItem from '../CardItem/CardItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <LogOutButton className="log-in" />

    {/* {JSON.stringify(props.allUsersReducer)} */}
    
    {props.allUsersReducer.map(users => {
      return (
      <div>
        <CardItem />
        <Card style={{width: 200}}>
          <CardContent>
            <Typography>
              {users.username}
            </Typography>
            <Typography>
              Items: {users.count}
            </Typography>
          </CardContent>
        </Card>
      </div>)
    })}

  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  allUsersReducer: state.allUsersReducer
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
