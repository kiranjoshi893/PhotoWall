import React from "react";
import Photo from "./Photo";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const PhotoWall = (props) => {
  // console.log(props, "sdds");
  PhotoWall.propTypes = {
    onRemovePhoto: propTypes.func.isRequired,
    photoList: propTypes.array.isRequired
  };
  return (
    <div className="container">
      <div className="text-center mb-5">
        {/* <Link to="/addPhoto" onClick={props.onNavigate} className="btn-custom">
          +
        </Link> */}
        <Link to="/addPhoto" className="btn-custom">
          +
        </Link>
      </div>
      <div className="row">
        {props.photoList &&
          props.photoList.map((value, index) => (
            <div className="cols" key={index}>
              <Photo data={value} onRemovePhoto={props.onRemovePhoto} />
              {/* <div className="card">
              <img
                src={value.imageLink}
                alt={value.description}
                title={value.description}
              />
              <h4>{value.description}</h4>
            </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PhotoWall;
