import { createContext, useEffect, useState } from "react";
import socket from "../socket/socket";

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);
   const [visible, setVisible] = useState(null);

  useEffect(() => {
    socket.on("new_notification", (notify) => {
      setNotifications((prev) => [...prev, notify]);
      setCount((prev) => prev + 1);
    });

    return () => socket.off("new_notification");
  }, []);

  const clearNotifications = () => {
    setCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, count, clearNotifications, visible, setVisible, setCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
