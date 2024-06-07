import { Avatar } from '../../assets/avatar';
import styles from './chatmessage.module.css';

export const ChatMessage = ({ message }) => {
  return (
    <div
      className={
        message.user === 'gpt'
          ? styles['chat-message-chatgpt']
          : styles['chat-message-center']
      }
    >
      <div className={styles['chat-message-center']}>
        <div
          className={`avatar ${message.user === 'gpt' && styles['chatgpt']}`}
        >
          <Avatar />
        </div>

        <div className={styles['message']}>{message.message}</div>
      </div>
    </div>
  );
};
