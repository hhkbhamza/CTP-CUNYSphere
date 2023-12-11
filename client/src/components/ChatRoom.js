import { useState, useRef, useEffect } from 'react';
import { app } from '../firebase';
import { getDatabase, ref, get, push, onValue } from 'firebase/database';
import AuthButton from "./AuthButton";


const database = getDatabase(app);
const messagesRef = ref(database, 'messages');

function ChatRoom() {
  const dummy = useRef();
  const query = messagesRef; // No need for orderByChild in the new SDK

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use onValue to listen for real-time updates
        onValue(query, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const messageList = Object.values(data);
            setMessages(messageList.reverse());
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  const sendMessage = async (e) => {
    e.preventDefault();

    await push(messagesRef, {
      text: formValue,
      createdAt: { '.sv': 'timestamp' }, // Use ServerValue.TIMESTAMP equivalent
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <AuthButton />
      <main>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.text}</p>
          </div>
        ))}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
