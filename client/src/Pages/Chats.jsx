import { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    const chats = await axios.get(`http://localhost:5000/chat`);

    setChats(chats.data);
  };

  useEffect(() => {
    getChats();
  }, []);

  return <div>{chats.user}</div>;
};

export default Chats;
