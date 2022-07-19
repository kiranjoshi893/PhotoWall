import React, { useState } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import PhotoWall from "./PhotoWall";
import Title from "./Title";

const GallaryMain = (props) => {
  let location = useLocation();
  // console.log(props, "123");
  console.log(location, "location");
  const [newPhoto, setNewPhoto] = useState(true);
  const [posts, setPost] = useState([
    {
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }
  ]);
  // const list = [1, 2, 3, 4,2, 4, 2]
  const removePhoto = (data) => {
    console.log(data, "kiran");
    const result = posts.filter((value, index) => value !== data);
    setPost(result);
  };
  const navigate = () => {
    setNewPhoto(!newPhoto);
  };
  const addNewPhoto = (addPhoto) => {
    // setPost([...posts, addPhoto]);
    // console.log(addPhoto, "addPhoto");
    alert("test");
  };
  return (
    <>
      <>
        <Title title={"PhotoWall"} />
        <PhotoWall
          photoList={posts}
          onRemovePhoto={removePhoto}
          onNavigate={navigate}
        />
      </>
      {/* {newPhoto ? <AddPhoto /> : ""} */}
      {/* <AddPhoto onAddPhoto={addNewPhoto} /> */}
    </>
  );
};

export default GallaryMain;
