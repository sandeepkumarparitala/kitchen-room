import React, { Component } from "react";
import { UserContainer, UserIcon } from "./styles";
import UserSrc from "../../../assets/images/user.svg";
import Fab from '@material-ui/core/Fab';

class UserDetails extends Component {
  render(){
    return (
        <UserContainer>
          <Fab size="small">
          <UserIcon src={UserSrc} />
          </Fab>
        </UserContainer>
    )
  }
}

export default UserDetails;
