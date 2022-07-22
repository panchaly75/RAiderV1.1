import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
import "./App.css";

const Chats = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const history = useHistory();

  const handelLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">RAider | Community Channel</div>
        <div onClick={handelLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <div id="ChatArea">
        <div className="msgs">
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="msgs">
        {messages.map(({ id, text, photoURL }) => (
          <div
            style={{
              display: "flex",
              borderRadius: "0 30px 30px 30px",
              boxShadow: "0 0 10px rgb(164,164,164)",
              alignItems: "center",
              height: "80px",
              maxWidth: "60%",
              padding: " 0 10px 0 20px",
              margin: "10px 20px",
            }}
          >
            <div key={id}>
              <img
                src={photoURL}
                alt=""
                style={{ height: "45px", borderRadius: "22.5px" }}
              />
              <p style={{ display: "inline", alignItems: "center" }}>{text}</p>
            </div>
          </div>
        ))}
      </div> */}
      <SendMessage />
    </div>
  );
};

export default Chats;
