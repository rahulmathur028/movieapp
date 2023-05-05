import React from "react";
// import home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import MovieBox from "@/components/MovieBox";
import { useEffect, useState } from "react";
import axios from "axios";

const index = () => {

const [list, setList] = useState()

  useEffect(() => {
  axios
  .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=f08201c68239a7196fde60ba18a61db3&language=en-US&page=1`)
  .then(({data})=>setList(data.results))
  .catch((err)=>console.log(err))
  }, [])
  


  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div className="container">
        <div className="moviecard">
         {
          list && list.map((movie)=> <MovieBox list={movie}/>)
         }
        </div>
      </div>
    </div>
  );
};

export default index;
