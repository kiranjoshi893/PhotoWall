import React from "react";
const List = (props) => (
  <ul>
    {props.list &&
      props.list.map((value, index) => <li key={index}>{value}</li>)}
  </ul>
);

export default List;
