import React from "react";
import { convertTime } from "../../../utils/convertTime";
import { useGetUser } from "../../../hooks/useUser";
import { UserTypes, DataMessageTypes } from "../../../utils/types";

const Message = ({
  item,
  userSelect,
}: {
  item: DataMessageTypes;
  userSelect: UserTypes;
}) => {
  const { user } = useGetUser();
  const fromMe: string | boolean = item?.senderId === user?._id;
  const profilePic = fromMe ? user?.profilePic : userSelect?.profilePic;
  const formatDate = convertTime(item?.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`} key={item?._id}>
      <div className="chat-image avatar">
        <div className="h-10 w-10">
          <img src={profilePic} alt={user?.fullName} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {item?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center mt-2">
        {formatDate}
      </div>
    </div>
  );
};

export default Message;
