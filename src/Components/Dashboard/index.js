import React, { Component } from "react";
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
import { ConfirmationDailog } from "./confirmation";
import { ListItemSecondaryAction } from "@material-ui/core";

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

  renderDetails = () => {
    // const { details } = this.props;
    const details = [
      {
        label:'recomended',
        text:'recomended jobs',
        count: 10,
      },
      {
        label:'attendad',
        text:'interviews attended',
        count:2
      },
      {
        label:'shortlisted',
        text:'companies shortlisted',
        count:5
      },
      {
        label:'placed',
        text:'companies offred',
        count:0
      }
    ]
    return details.map((item)=>(
      <DetailsItem>
        <Card>
        <Count>{item.count}</Count>
        <Text>{item.text}</Text>
        </Card>
      </DetailsItem>
    ))
  }

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
          <DetailsBoard>
            {this.renderDetails()}
          </DetailsBoard>
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchtoProps = {
  requestCall,
  fetchDetails
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Dashboard);
