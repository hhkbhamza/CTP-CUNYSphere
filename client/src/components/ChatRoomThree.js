import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { appThree } from "../firebase";
import { useAuth } from "../context/AuthContext";
import "./ChatRoom.css";

const database = getDatabase(appThree);
const messagesRef = ref(database, "messages");

function ChatRoomThree() {
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");
  const { user } = useAuth();
  const bottomRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const loadedMessages = Object.entries(data).map(([key, val]) => ({
        key,
        ...val,
      }));
      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (user && formValue.trim()) {
      await push(messagesRef, {
        text: formValue.trim(),
        createdAt: Date.now(),
        userFirstName: user.firstName,
      });

      setFormValue("");
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  function goBack() {
    navigate(-1);
  }
  return (
    <div className="chat-room">
      <div className="messages-container">
        <button onClick={goBack} className="back-btn">
          Back to courses
        </button>
        {messages.map(({ key, uid, text, userFirstName }) => (
          <div
            key={key}
            className={`message ${uid === user.uid ? "sent" : "received"}`}
          >
            <div className="message-content">
              <p>{text}</p>
            </div>
            <div className="message-name">{userFirstName}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} className="message-input-area">
        <input
          className="message-input"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message here..."
        />
        <button
          type="submit"
          className="send-button"
          disabled={!formValue.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoomThree;
