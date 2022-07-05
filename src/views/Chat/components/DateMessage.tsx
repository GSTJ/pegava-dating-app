import React, { Fragment } from "react";
import { ListRenderItemInfo } from "react-native";
import { Selectors, useContext } from "../store";
import type { Message as IMessage } from "../store/reducers";
import Message from "./Message";
import NextDay from "./NextDay";

const DateMessage: React.FC<ListRenderItemInfo<IMessage>> = ({
  item,
  index,
}) => {
  const { state } = useContext();
  const messages = Selectors.getMessagesDisplay(state);
  const nextMessage = messages?.[index + 1];

  return (
    <Fragment key={item._id}>
      <Message {...item} self={item.self} date={item.createdAt}>
        {item.message}
      </Message>
      <NextDay message={item} nextMessage={nextMessage} />
    </Fragment>
  );
};

const DateMessageWrapper: React.FC<ListRenderItemInfo<IMessage>> = (props) => (
  <DateMessage {...props} />
);

export default DateMessageWrapper;
