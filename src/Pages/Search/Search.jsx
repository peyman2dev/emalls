import React, { useEffect } from "react";
import Header from "../../Components/Reusable/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFromClient } from "../../Utils/Redux/Ducks/Ducks";

export default function Search() {
    const dispatch = useDispatch()
    const {query} = useParams()

    useEffect(() => {
        dispatch(searchFromClient())
    },[query])
    
    
  return (
    <>
      <Header />
    </>
  );
}
