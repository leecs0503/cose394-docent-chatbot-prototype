import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'

const Home = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("")
  const sendMessage = async () => {
    setIsSending(true);
    const requestId = uuidv4();
    const responseMsg = []
    try {
      let response = await sendChatRequest(requestId, message)
      let data = await response.json();
      while (!data.done) {
        responseMsg.push(data.value)
        setResponseMessage(responseMsg.join(''))
        response = await sendChatRequest(requestId, message);
        data = await response.json();
      }
    } catch (error) {
      console.error('Message sending failed:', error);
    }

    setIsSending(false);
  };

  return (
    <div>
      <Image
        src="/images/starry_night.jpg" // 실제 경로는 `public/images/example.png`입니다.
        alt="starry_night"
        width={450} // 원하는 이미지의 너비
        height={356} // 원하는 이미지의 높이
      />
      <h1>별이 빛나는 밤 (The Starry Night)</h1>
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSending}
          style={{width: '500px', height: 'auto', minHeight: '4em'}}
        />
      </div>
      <button onClick={sendMessage} disabled={isSending || !message}>
        Send Message
      </button>
      <div style={{width: '500px'}}>
        {responseMessage}
      </div>
    </div>
  );
};


const sendChatRequest = (requestId, message) => {
  const query = new URLSearchParams({ requestid: requestId }).toString();
  return fetch(`/api/chat?${query}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
};

export default Home;
