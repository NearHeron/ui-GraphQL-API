import React from "react";
import {CONFERENCE} from "../../queries/query";
import ConferenceComponent from "../../components/Conference/ConferenceComponent";
import {useQuery} from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";

const ConferenceContainer = (props) => {

  const { loading,  data } = useQuery(CONFERENCE, {
    variables: { id: `${props.match.params.id}` },
  });

  return (
    loading? <Spinner /> :<ConferenceComponent conference={data.conference}/>
  )
}

export default ConferenceContainer