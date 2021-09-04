import "../../App.css";
import {connect} from "react-redux";
import {Component, Fragment} from "react";
import {handleIntialState} from "../../actions/shared";
import Login from "./login";
import Nav from "./navigation";
import Dashboard from "./dashboard";
import LoadingBar from "react-redux-loading";
import Footer from "./footer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIntialState());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="App">
          <div className="content">
            <Nav />
            {this.props.logged === null ? <Login /> : <Dashboard />}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

const mapStateToprops = ({logged}) => ({
  logged,
});

export default connect(mapStateToprops)(App);
