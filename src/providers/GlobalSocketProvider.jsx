import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import socket from "../socket/socket";

export default function GlobalSocketProvider({ children }) {
  const axiosPublic = useAxiosPublic();
  const [myId, setMyId] = useState(null);
  const { user } = useContext(AuthContext);

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

  useEffect(()=> {
    if(myId){
        socket.emit("register", myId);
        console.log("Socket registered globally:", myId);
    }
  }, [myId]);

  return children;
}

GlobalSocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


