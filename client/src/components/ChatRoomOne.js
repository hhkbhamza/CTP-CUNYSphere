// import { useState, useRef, useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';
// import '../../../client/src/pages/style/ChatRoom.css';
// import { appOne } from '../firebase'
// import { getDatabase, ref, push } from 'firebase/database';

// // const database = appOne.database(); // Use the database instance from the specified app

// const database = getDatabase(appOne);
// const messagesRefOne = ref(database, 'messages');


// function ChatRoomOne() {
//   const dummy = useRef();
//   const messagesRef = database.ref('messages');
//   const query = messagesRef.orderByChild('createdAt').limitToLast(25);

//   const [messages, setMessages] = useState([]);
//   const [formValue, setFormValue] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const snapshot = await query.once('value');
//       const data = snapshot.val();
//       if (data) {
//         const messageList = Object.values(data);
//         setMessages(messageList.reverse()); // Reverse the order to display latest messages at the bottom
//       }
//     };

//     fetchData();
//   }, [query]);

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     await messagesRef.push({
//       text: formValue,
//       createdAt: firebase.database.ServerValue.TIMESTAMP,
//     });

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <main>
//         {messages.map((msg, index) => (
//           <div key={index} className="message">
//             <p>{msg.text}</p>
//           </div>
//         ))}
//         <span ref={dummy}></span>
//       </main>
//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//           placeholder="Say something nice"
//         />
//         <button type="submit" disabled={!formValue}>
//           🕊️
//         </button>
//       </form>
//     </>
//   );
// }



// export default ChatRoomOne;
import { useState, useRef, useEffect } from 'react';
import { appOne } from '../firebase';
import { getDatabase, ref, get, push, onValue } from 'firebase/database';

const databaseOne = getDatabase(appOne);
const messagesRefOne = ref(databaseOne, 'messages');

function ChatRoomOne() {
  const dummy = useRef();
  
  // Use messagesRefOne directly without orderByChild
  const query = messagesRefOne;

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const snapshot = await get(query);
  //       const data = snapshot.val();
  //       if (data) {
  //         const messageList = Object.values(data);
  //         setMessages(messageList.reverse());
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [query]);

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

    await push(messagesRefOne, {
      text: formValue,
      createdAt: { '.sv': 'timestamp' }, // Use ServerValue.TIMESTAMP equivalent
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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

export default ChatRoomOne;
