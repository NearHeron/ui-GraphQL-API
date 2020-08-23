import React from "react";
import MainComponent from "../../components/Main/MainComponent";
import {CONFERENCES} from "../../queries/query";
import {useQuery} from "@apollo/client";

const MainContainer = () => {
  const {loading, data} = useQuery(CONFERENCES);

  return (
    loading? <p>loading...</p>: <MainComponent conferences={data.conferences}/>
  )
};

export default MainContainer;