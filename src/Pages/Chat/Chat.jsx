import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const { userId } = useParams();
  const { user } = useContext(AuthContext);
  console.log("User ID from params:", userId);
  const [myId, setMyId] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

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

  console.log("Current User from chat:", myId);

  useEffect(() => {
    fetch(`http://localhost:5000/messages?roomId=${roomId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));

    // resister user
    socket.emit("register", myId);

    // join the private room
    socket.emit("join_room", roomId);

    // listen for incoming messages
    socket.on("private_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // cleanup on unmount
    return () => socket.off("private_message");
  }, [myId, roomId]);

  //   scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const message = {
      from: myId,
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

  return (
    <div className="container py-24 flex flex-col bg-[#ece5dd] h-[calc(100vh-280px)] pt-28">
      <div className="flex-1 overflow-y-auto p-5">
        {messages.map((msg, i) => {
          const isMe = msg.from === myId;
          return (
            <div
              key={i}
              className={`flex mb-2.5 ${
                isMe
                  ? "justify-end bg-[#dcf8c6] max-w-full rounded-xl py-1.5"
                  : "justify-start bg-white max-w-full rounded-xl py-1.5"
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
              <div className="pt-2.5 px-3.5 max-w-[70%] text-sm text-wrap">
                {msg.text}
              </div>
              {isMe && (
                <div className="justify-center items-center flex h-10 w-12 mr-2">
                  <img
                    src="https://github.com/maxleiter.png"
                    className="size-10 rounded-full  "
                  />
                </div>
              )}
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
