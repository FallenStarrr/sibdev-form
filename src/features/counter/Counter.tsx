import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [hide, setHide] = useState(false)
  
  function Show() {
    setHide(!hide)
  }

  return (
    <div className={styles.container}>
        
        <form className='login'>
        <h3>Вход</h3>
        <label htmlFor="login" className={styles.label}>Логин</label>
          <div>
          <input  id="login" type="text" className={styles.login__input} />
          </div>
          <label htmlFor="password"  className={styles.label}>Пароль</label>
          <div>
            <input id="password" type={ hide ?  'password' : 'text' } className={styles.login__input}  />  
           <span className={styles.eye}> {hide ? <i onClick={Show} className="fas fa-eye-slash"></i> : <i onClick={Show} className="fas fa-eye"></i>  }  </span>     
           </div>
        
          <button className={styles.login__btn}>Войти</button>
        </form>
    </div>
  );
}
