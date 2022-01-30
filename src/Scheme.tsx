import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import form from './features/form/Form.module.css'
import { useAppSelector, useAppDispatch } from './app/hooks';
import './Scheme.css'
import {
  addKey,
  addName,
  addType,
  selectForm,
  addItem,
  selectArr
} from './features/form/formSlice';
import { Link } from 'react-router-dom';




export function Scheme() {
  const [error, setError] = useState(false)
  const inputArr = useAppSelector(selectArr);

 function handleClick(e:any) {
        e.preventDefault()
 }  

  return (
    <div className={form.container}>
        <nav className={form.nav}>
          <div>
          <Link to="shemes" className={form.link}>Мои Схемы</Link>
          </div>
          <div>
          <Link to="form" className={form.link}>Создать Схему</Link>
          </div>
        </nav>

         

        <form action="" style={{marginTop: '120px'}}>

        {inputArr.map((e: any) => {
          return (
              <details>
              <summary>{e.name}</summary>
              <div key={e.id}>
                          <p>{e.key}</p>
                          <label htmlFor={e.id}>{e.name}</label>
                        <input
                            
                           id={e.id}
                          className={error ? 'input error': 'input'}
                          type={e.type}
                          required={e.required} 
                          min={e.min} 
                          max={e.max}
                          />
                        
                    </div> 
                     
            </details>
                    
                    

          )
        }
        )
        }
          <button 
          type='submit'
            onClick={handleClick}
          >
            Ok
            </button>
        </form>

    </div>
  );
}
