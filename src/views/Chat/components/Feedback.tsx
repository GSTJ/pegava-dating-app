import React from "react";
import Error from "../assets/error.svg";
import Clock from "../assets/clock.svg";
import Tick from "../assets/tick.svg";

export enum FeedbackStatus {
  Error = "error",
  Loading = "loading",
  Success = "success",
}

function Feedback({ status, ...rest }) {
  if (status === FeedbackStatus.Loading) return <Clock {...rest} />;
  if (status === FeedbackStatus.Error) return <Error {...rest} />;
  return <Tick {...rest} />;
}

export default Feedback;
