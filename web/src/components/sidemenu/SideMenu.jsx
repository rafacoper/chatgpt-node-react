import styles from './sidemenu.module.css';

export const SideMenu = () => {
  return (
    <aside className={styles.sidemenu}>
      <div className={styles.sidemenu_button}>
        <span>+</span>
        Novo Chat
      </div>
    </aside>
  );
};
