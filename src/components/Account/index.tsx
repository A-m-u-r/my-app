import React from "react";
import { visitNode } from "typescript";
import styles from "./../Account/style.module.css";
import crest from "./../../img/crest.png"

const Account = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.reg}>
    <button onClick = {()=> setOpen(true) }>Регистрация</button>
      {open && <form action="" className={styles.account}>
        
          <legend>Регистрация</legend>
          <img src={crest} className={styles.crest} onClick={()=> setOpen(false)}></img>
          <p>
            <label htmlFor="email">E-mail: </label>
            <input type="text" name="email" placeholder="email@mail.ru" className={styles.mail}/>
          </p>
          <p>
            <label htmlFor="password">Пароль: </label>
            <input type="password" placeholder="********"></input>
          </p>
      
        <input type="submit"></input>
      </form>}
    </div>
  );
};

export default Account;
