import React, {useState} from "react";
import MainComponent from "../../components/Main/MainComponent";
import {CONFERENCES} from "../../queries/query";
import {useQuery} from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";

const MainContainer = () => {
  const {loading, data} = useQuery(CONFERENCES);

  return (
    loading ? <Spinner/> : <MainComponent conferences={data.conferences}/>
  )
}

export default MainContainer