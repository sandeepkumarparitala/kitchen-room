import React, { Component } from "react";
import { Container, SideMenu, Main, Title, Options, Tile } from "./styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import { requestCall } from "../../reducers/Dashboard/actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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
          <Dialog
            open={openDailog}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"please confirm to receive a call"}
            </DialogTitle>
            <DialogContent>
              {/* <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleConfirm} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </SideMenu>
        <Main />
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
