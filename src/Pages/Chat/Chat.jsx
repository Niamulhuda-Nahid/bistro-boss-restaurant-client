import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import socket from "../../socket/socket";
import { NotificationContext } from "../../providers/NotificationProvider";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, Popover } from "antd";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Chat() {
  const { userId } = useParams();
  const { user } = useContext(AuthContext);
  const { clearNotifications } = useContext(NotificationContext);

  const [myId, setMyId] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [editText, setEditText] = useState(false);
  const [editedMessageId, setEditedMessageId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const roomId = [myId, userId].sort().join("_");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (user?.email) {
        try {
          const res = await axiosPublic.get(`/users/${user.email}`);
          setMyId(res.data._id);
        } catch (error) {
          console.error("Error fetching current user:", error);
          return null;
        }
      }
    };

    fetchCurrentUser();
  }, [user?.email, axiosPublic]);

  // koin room + listen for message
  useEffect(() => {
    if (!myId) return;

    // fetch old messages
    fetch(`http://localhost:5000/messages?roomId=${roomId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
    clearNotifications();

    // join the private room
    socket.emit("join_room", roomId);

    // listen for incoming messages
    socket.on("private_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("edit_message", (updateMsg) => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === updateMsg.id ? { ...msg, text: updateMsg.text } : msg
        )
      );
    });

    socket.on("delete_message", ({id}) => {
      console.log("Deleting message with id:", id);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg._id !== id)
      );
    });

    // cleanup on unmount
    return () => socket.off("private_message");
  }, [roomId, myId, clearNotifications]);

  //   scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const message = {
      from: myId,
      to: userId,
      text: input,
      roomId: roomId,
    };
    // emit the message to server
    socket.emit("private_message", message);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleEdit = async (id) => {
    if (editInput.trim() === "") return;

    const message = {
      text: editInput,
      roomId: roomId,
    };
    socket.emit("edit_message", { id, ...message });
  };

  const handleKeyPressEdit = (e, id) => {
    if (e.key === "Enter") {
      handleEdit(id);
      setEditText(false);
    }
  };
  const handleDelete = (id) => {
    socket.emit("delete_message", { id, roomId });
  }

  return (
    <div className="container py-24 flex flex-col bg-[#ece5dd] h-[calc(100vh-180px)] pt-44">
      <div className="flex-1 overflow-y-auto p-5 bg-orange-100">
        {messages.map((msg, i) => {
          const isMe = msg.from === myId;
          const content = (
            <div className="space-y-2">
              <p
                // onClick={() => handleEdit(msg._id)}
                onClick={() => [setEditText(true), setEditedMessageId(msg._id)]}
                className="flex items-center gap-2 hover:bg-amber-100 p-1 rounded-md cursor-pointer"
              >
                <CiEdit className="size-4" />
                <span>Edit</span>
              </p>
              <p onClick={()=> handleDelete(msg._id)} className="flex items-center gap-2 hover:bg-amber-100 p-1 rounded-md cursor-pointer">
                <RiDeleteBin6Line />
                <span>Delete</span>
              </p>
            </div>
          );
          return (
            <div key={i} className="gap-2 flex items-center">
              {isMe && (
                <div className="justify-end flex w-[20%] md:w-1/2">
                  <Popover placement="left" content={content} arrow={false}>
                    <Button className="!border-none !bg-transparent !shadow-none !text-black !px-0">
                      <BsThreeDotsVertical className="cursor-pointer" />
                    </Button>
                  </Popover>
                </div>
              )}
              <div
                className={`flex mb-2.5 flex-1 ${
                  isMe
                    ? "justify-end bg-[#dcf8c6] max-w-[80%] md:max-w-[50%] rounded-xl py-1.5 relative ml-auto"
                    : "justify-start bg-white max-w-[50%] rounded-xl py-1.5"
                }`}
              >
                {!isMe && (
                  <div className="justify-center items-center flex h-10 w-12">
                    <img
                      src="https://github.com/shadcn.png"
                      className="size-10 rounded-full  "
                    />
                  </div>
                )}
                {editText && editedMessageId === msg._id ? (
                  <input
                    type="textarea"
                    className="w-full mx-4 rounded-md px-2"
                    defaultValue={msg.text}
                    onKeyPress={(e) => handleKeyPressEdit(e, msg._id)}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                ) : (
                  <p className="pt-2.5 px-3.5 max-w-[90%] text-sm text-wrap text-clip">
                    {msg.text}
                  </p>
                )}
                {isMe && (
                  <div className="justify-center items-center flex h-10 w-12 mr-2">
                    <img
                      src="https://github.com/maxleiter.png"
                      className="size-10 rounded-full  "
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex p-2.5 bg-[#f0f0f0]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-xl border-[#ccc] outline-none"
          onKeyPress={handleKeyPress}
        />
        <button
          className="ml-2.5  py-3 px-4 bg-[#128c7e] text-white border-none rounded-[20px] cursor-pointer"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
