export type UserTypes = {
  _id: string;
  profilePic: string;
  name: string;
  username: string;
  fullName?: string;
  gender?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type DataMessageTypes = {
  _id: string;
  senderId?: string;
  receiverId?: string;
  message: string;
  createdAt?: Date | undefined;
  updatedAt?: Date;
};
export type ConversationsTypes = {
  _id: string;
  messages: string[];
  participants: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type SignUpError = {
  response: {
    data: {
      error: string;
    };
  };
};
