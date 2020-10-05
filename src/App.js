import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import setting from './images/settings.svg';
import message from './images/noNewMessage.svg';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        listItems: [{userID:"userid", status:"status", likesCounter:0}]

      }
    }

  updateListItems(userID, status, likesCounter){
    const listItem = {userID, status, likesCounter}
    this.setState((state) => ({listItems: state.listItems.concat(listItem)}))
  }

  render(){
  return (
    <Router>
      
      <Navbar bg="light" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to='/settings'><img src={setting}></img></Link>
              <Link className="nav-link" to='/profile'>Profile</Link>
              <Link to='/'><h1 className="siteName">Social Site</h1></Link>
              <Link className="nav-link" to='/newPost'>New Post</Link>
              <Link className="nav-link" to='/feed'>Feed</Link>
              <Link className="nav-link" to='/messages'><img src={message}></img></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <form class="form-flex my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      <Container>
        <Switch>
            <Route exact path="/">
              <Feed/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/messages">
              <Messages/>
            </Route>
            <Route exact path="/newPost">
              <NewPost onsubmit={(userID, status, likesCounter) => this.updateListItems(userID, status, likesCounter)}/>
            </Route>
            <Route exact path="/feed">
              <Feed listItems={this.state.listItems}/>
            </Route>
            <Route exact path="/settings">
              <Settings/>
            </Route>
            <Route path="/">
              Error: 404 not found
            </Route>
          </Switch>
      </Container>
    </Router>
  );
  }
}

export default App;


