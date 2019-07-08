import React, { Component } from "react";
import { UserContainer, UserIcon, Holder } from "./styles";
import { Redirect } from 'react-router-dom'
import UserSrc from "../../../assets/images/user.svg";
import Fab from '@material-ui/core/Fab';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withRouter } from 'react-router-dom';

class UserDetails extends Component {
  state = {
    open:false
  }
  
fabRef = React.createRef();

handleToggleMenu = () => {
  const { open } = this.state;
  this.setState({open:!open})
}

handleLogout = () => {
  const { appLogout,history } = this.props;
  appLogout();
  this.setState({open:false});
  console.log('logging out ',this.props)
  history.push('/')
}

  render(){
    const { open } = this.state;
    return (
        <UserContainer>
          <Fab size="small" ref={this.fabRef} onClick={this.handleToggleMenu}>
          <UserIcon src={UserSrc} />
          </Fab>
          {
            open && 
            <ClickAwayListener onClickAway={this.handleToggleMenu}>
              <Holder>
              <MenuList>
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </MenuList>
              </Holder>
            </ClickAwayListener>
          }
        </UserContainer>
    )
  }
}

export default withRouter(UserDetails);
