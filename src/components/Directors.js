import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director)=>
  <div key={director.name}>
    <h3>Name : {director.name}</h3>
    <p> Movies : </p>
    <ul>
      <li>{director.movies[0]}</li>
      <li>{director.movies[1]}</li>
      <li>{director.movies[2]}</li>
    </ul>
  </div>)
  return <div>
    <h1>Directors Page</h1>
     {directorsList}
  </div>;
}

export default Directors;
