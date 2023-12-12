import { useState, useRef, useEffect } from 'react';
import { appThree } from '../firebase';
import { getDatabase, ref, get, push, onValue } from 'firebase/database';
import { useAuth } from '../context/AuthContext';


const databaseThree = getDatabase(appThree);
const messagesRefThree = ref(databaseThree, 'messages');

function ChatRoomThree() {
  const dummy = useRef();
  
  const query = messagesRefThree;

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const auth = useAuth();

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
    const userFirstName = auth.user.firstName;
    await push(messagesRefThree, {
      text: formValue,
      createdAt: { '.sv': 'timestamp' },
      userFirstName: userFirstName,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{`${msg.userFirstName || 'Guest'}: ${msg.text}`}</p>
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

export default ChatRoomThree;
