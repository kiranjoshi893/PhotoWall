import React from "react";
import propTypes from "prop-types";
const Photo = (props) => {
  console.log(props, "sdds");
  const post = props.data;
  // const [store, setStore] = useState([]);
  // console.log(store);
  Photo.prototypes = {
    data: propTypes.array.isRequired,
    onRemovePhoto: propTypes.func.isRequired
  };
  return (
    <div className="card">
      <img
        src={post.imageLink}
        alt={post.description}
        title={post.description}
      />
      <h4>{post.description}</h4>
      <button
        className="mt-3 p-1 bg-danger text-white"
        onClick={() => props.onRemovePhoto(post)}
      >
        Remove
      </button>
    </div>
  );
};

export default Photo;
