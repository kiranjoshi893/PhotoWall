import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
import "./styles.css";
import Main from "./photoWall/Main";
// import Main from "./Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPhoto from "./photoWall/AddPhoto";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const list = ["Kiran", "Prabha", "Guddi", "Himanshu"];
const listNew = ["Kiran", "Prabha", "Guddi", "Himanshu"];
class First extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          {this.props.firstName ? `Hi!, I'm ${this.props.firstName}` : ""}
        </h1>
        <ol>
          {this.props.list &&
            this.props.list.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
      </>
    );
  }
}
const Second = (props) => (
  <>
    <h1 style={{ textAlign: "center" }}>Hi!, I'm {props.name}</h1>
  </>
);
root.render(
  <StrictMode>
    {/* <First firstName={"Prabha"} list={list} />
    <First list={listNew.reverse()} />
    <Second name="Kiran" /> */}
    {/* <App /> */}
    {/* <Main /> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/addPhoto" element={<AddPhoto />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
