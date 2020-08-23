import React from "react";
import {CONFERENCE} from "../../queries/query";
import ConferenceComponent from "../../components/Conference/ConferenceComponent";
import {useQuery} from "@apollo/client";

const ConferenceContainer = (props) => {

  const { loading,  data } = useQuery(CONFERENCE, {
    variables: { id: `${props.match.params.id}` },
  });

  console.log(data)
  return (
    <ConferenceComponent />
  )
}

export default ConferenceContainer