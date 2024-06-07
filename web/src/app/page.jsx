'use client';

import { SideMenu } from '@/components/sidemenu/SideMenu';
import styles from './page.module.css';
import { useState } from 'react';
import { ChatMessage } from '@/components/chat-message/ChatMessage';

export default function Home() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      user: 'gpt',
      message: 'Como posso te ajudar hoje?'
    }
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await makeRequest({ prompt: input });

    response = response.data
      .split('\n')
      .map(line => <p key={line.index}>{line}</p>);

    setChatLog([
      ...chatLog,
      {
        user: 'me',
        message: `${input}`
      },
      {
        user: 'gpt',
        message: response
      }
    ]);
    setInput('');
  }

  return (
    <div className={styles.App}>
      <SideMenu></SideMenu>

      <section className={styles['chatbox']}>
        <div className={styles['chatLog']}>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className={styles['chat-input-holder']}>
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className={styles['chat-input-textarea']}
              value={input}
              onChange={e => setInput(e.target.value)}
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}
