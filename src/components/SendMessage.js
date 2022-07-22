import React, { useState } from "react";
import firebase from "firebase";
import { auth, db } from "../firebase";
import "./App.css";

function SendMessage() {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }

  return (
    <div id="box">
      <div id="textArea">
        <form onSubmit={sendMessage}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Message..."
            id="inputText"
          />
          <button type="submit" id="inputSubmitBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
