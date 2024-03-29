import React,{ useEffect } from "react";
import useHandleUsers from "../../../zustand/useHandleUsers";
import { TiMessages } from "react-icons/ti";
import MessageContainer from "./MessageContainer";
import { useGetUser } from '../../../hooks/useUser';

const MessageLayout = () => {
  const { selectedUser, setSelectedUser } = useHandleUsers();
  const {user} = useGetUser()

  useEffect(() => {
    return () => setSelectedUser(null);
  }, [setSelectedUser]);

  return (
    <div className="flex-1">
      {!selectedUser ? (
        <div className="flex items-center w-full h-screen justify-center">
          <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
            <p>👋❄ خوش اومدی {user?.fullName}</p>
            <p>یک چت را برای شروع پیام‌رسانی انتخاب کنید</p>
            <TiMessages className="text-3xl md:text-6xl text-center" />
          </div>
        </div>
      ) : (
        <MessageContainer user={selectedUser} />
      )}
    </div>
  );
};

export default MessageLayout;
