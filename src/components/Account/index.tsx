import React from "react";
import { visitNode } from "typescript";
import styles from "./../Account/style.module.css";
import crest from "./../../img/crest.png"
import Modal from "../Modal";

const Account = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.reg}>
    <button onClick = {()=> setOpen(true) }>Регистрация</button>
      <Modal isOpen={open} onClose={()=> setOpen(false)}>
        <form onSubmit={event => event.preventDefault()} className = {styles.account} action="" >
        
          <legend>Регистрация</legend>
          <img src={crest} className={styles.crest} onClick={()=> setOpen(false)}></img>
          <p>
            <label  className = {styles.label} htmlFor="email">E-mail: </label>
            <input type="text" name="email" placeholder="email@mail.ru" className={styles.mail}/>
          </p>
          <p>
            <label  className = {styles.label} htmlFor="password">Пароль: </label>
            <input type="password" placeholder="********"></input>
          </p>
      
        <input type="submit"></input>
      </form>
      </Modal>
    </div>
  );
};

export default Account;
