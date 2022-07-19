import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Link, useNavigate, route, useLocation } from "react-router-dom";

const AddPhoto = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  // console.log(navigate, "history");
  // console.log(location, "location");
  const [store, setStore] = useState([]);
  const [inputVal, setInputVal] = useState({
    link: "",
    linkError: false,
    desc: "",
    descError: false
  });
  const onChageValue = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
      [e.target.name + "Error"]: ""
    });
    // console.log(e.target.value, inputVal, "sdasdas");
  };
  const onSubmit = (data) => {
    let test = [];
    if (inputVal.link === "") {
      setInputVal({ ...inputVal, linkError: true });
    } else if (inputVal.desc === "") {
      setInputVal({ ...inputVal, descError: true });
    } else {
      navigate("/", {
        newImg: test
      });
      test.push(inputVal);
      // test.push(inputVal);
    }
    // console.log(test, "sasas");
  };
  // const params = {
  //   id: 0,
  //   link: inputVal.link,
  //   desc: inputVal.desc
  // };
  return (
    <>
      <Link to="/" className="p-4 d-inline-block">
        Back
      </Link>
      <h3 className="text-center mt-4">Add New Photo</h3>
      <div className="custom-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Link"
            name="link"
            value={inputVal.link}
            onChange={(e) => onChageValue(e)}
          />
          {inputVal.linkError ? <small>Enter the link</small> : ""}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            name="desc"
            value={inputVal.desc}
            onChange={(e) => onChageValue(e)}
          />
          {inputVal.descError ? <small>Enter the description</small> : ""}
        </div>
        {/* {inputVal.link}
        <br />
        {inputVal.desc} */}
        {/* <div onClick={() => onSubmit(params)} className="btn w-100 btn-primary">
          Post
        </div> */}
        <div className="btn w-100 btn-primary" onClick={() => onSubmit()}>
          Post
        </div>
      </div>
    </>
  );
};

export default AddPhoto;
