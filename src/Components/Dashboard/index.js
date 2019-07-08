import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import {
  Container,
  SideMenu,
  Main,
  Title,
  Options,
  Tile,
  Header,
  DetailsBoard,
  DetailsItem,
  Card,
  Count,
  Text
} from "./styles";
import UserContainer from "./Userdetails";
import { connect } from "react-redux";
import { requestCall, fetchDetails } from "../../reducers/Dashboard/actions";
import { appLogout } from "../../reducers/app/actions"
import { ConfirmationDailog } from "./confirmation";
import { ListItemSecondaryAction } from "@material-ui/core";
import { RenderDetails } from './dashboardDetails'

const sampleDiv = ()=><div>Hello</div>

class Dashboard extends Component {
  state = {
    activeTab: "",
    openDailog: false,
    detailsLoaded:false
  };

  componentDidMount(){
    const { fetchDetails } = this.props;
    fetchDetails()
  }

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
        title: "showRecordings",
        text: "show recordings",
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
    this.setState({ openDailog: false });
  };

  render() {
    const { activeTab, openDailog } = this.state;
    const { appLogout } = this.props
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
            <UserContainer appLogout={appLogout}/>
          </Header>
          <DetailsBoard>
            <Switch>
              <Route path="/jobs/dashboard" render={RenderDetails} />
              <Route path="/jobs/recomended-jobs" render={sampleDiv}/>
              <Route path="/jobs/interviews-attended" render={sampleDiv}/>
              <Route path="/jobs/companies-shortlisted" render={sampleDiv}/>
              <Route path="/jobs/companies-offered" render={sampleDiv}/>
              <Route />
            </Switch>
          </DetailsBoard>
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchtoProps = {
  requestCall,
  fetchDetails,
  appLogout
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Dashboard);
