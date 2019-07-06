import React, { Component } from "react";
import {
  Container,
  SideMenu,
  Main,
  Title,
  Options,
  Tile,
  Header
} from "./styles";
import UserContainer from "./Userdetails";
import { connect } from "react-redux";
import { requestCall } from "../../reducers/Dashboard/actions";
import { ConfirmationDailog } from "./confirmation";

class Dashboard extends Component {
  state = {
    activeTab: "",
    openDailog: false
  };

  handleTabClick = e => {
    const tab = e.target.title;
    if (tab === "attendInterview") this.setState({ openDailog: true });
    this.setState({ activeTab: tab });
  };

  renderOptions = () => {
    const { activeTab } = this.state;
    const options = [
      {
        title: "attendInterview",
        text: "Attend an interview",
        clickHandler: this.handleTabClick
      },
      {
        title: "applicationStatus",
        text: "Application status",
        clickHandler: this.handleTabClick
      }
    ];
    return options.map(option => (
      <Tile
        key={option.title}
        title={option.title}
        onClick={option.clickHandler}
        active={option.title === activeTab}
      >
        {option.text}
      </Tile>
    ));
  };

  handleClose = () => {
    this.setState({ openDailog: false });
  };

  handleConfirm = () => {
    const { requestCall } = this.props;
    requestCall();
  };

  render() {
    const { activeTab, openDailog } = this.state;
    return (
      <Container>
        <SideMenu>
          <Title>hirex.in</Title>
          <Options>{this.renderOptions()}</Options>
          <ConfirmationDailog
            openDailog={openDailog}
            handleClose={this.handleClose}
            handleConfirm={this.handleConfirm}
          />
        </SideMenu>
        <Main>
          <Header>
            <UserContainer />
          </Header>
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchtoProps = {
  requestCall
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Dashboard);
