import React, { Component } from "react";
import { UserContainer, UserIcon } from "./styles";
import UserSrc from "../../../assets/images/user.svg";

class UserDetails extends Component {
  render(){
    return (
        <UserContainer>
            <UserIcon src={UserSrc} />
        </UserContainer>
    )
  }
}

export default UserDetails;
