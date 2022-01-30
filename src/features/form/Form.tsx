import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addKey,
  addName,
  addType,
  selectForm,
  addItem,
  selectArr,
  setmin,
  setmax,
  validate
} from './formSlice';
import './form.css';
import { Link } from 'react-router-dom';

export function Form() {
  const input = useAppSelector(selectForm);
  const inputArr = useAppSelector(selectArr);
  const dispatch = useAppDispatch();


const [type, setType] = useState('')
const [name, setName] = useState('')
const [key, setKey] = useState('')

const [required, setRequired] = useState(false)
const [active, setActive] = useState(false)


const [min, setMin] = useState('0')
const [max, setMax] = useState('10')

function showMin (e: any) {
  setMin(e.target.value)
}

function showMax (e: any) {
  setMax(e.target.value)
}

function handleKey(e: any) {
 setKey(e.target.value)
}
function handleName(e: any) {
  setName(e.target.value)
 }
 function handleType(e: any) {
  setType(e.target.value)
 }
 
 function createForm(e:any) {
   dispatch(addKey(key))
   dispatch(addName(name))
   dispatch(addType(type))
   dispatch(setmin(min))
   dispatch(setmax(max))
   dispatch(validate(required))

   dispatch(addItem({key, name, type, id: Date.now(), required, min, max}))
   e.preventDefault()
   setType("")
   setName("")
   setKey("")
   setRequired(false)
   setMin('0')
   setMax('10')
  //  setType('')
  //  setName('')
  //  setKey('')
 }

  


  return (
    <div className="container">
             <nav className="nav">
          <div>
          <Link to="/sheme" className="link">Мои Схемы</Link>
          </div>
          <div>
          <Link to="form" className="link">Создать Схему</Link>
          </div>
        </nav>

   
          
        <details style={{marginTop: '160px'}}>
          <summary>Свойства</summary>
        <form action=""  style={{marginTop: '40px'}}>
        <h1>Товар</h1>
          <div>
          <p>Ключ свойства</p>
              <input  className="input" type="text" name='key'  value={key} onChange={handleKey}/>
          </div>
          <div>
              <p>Название</p>
              <input  className="input" type="text" name='name'  value={name}  onChange={handleName}/>
          </div>

          <div>
          <p>Тип</p>
          <input className="input"  type="text" name="type" value={type}  onChange={handleType}/>

          <p>Валидация</p>
          <div className={ active ? 'checkbox active': 'checkbox'} onClick={() => setActive(!active)}>
                  <input type="checkbox" name="validate" id="valid" style={{appearance: 'none'}}/>
          </div>
          <p>Мин</p>
          <div>
                <input type="text" value={min} onChange={showMin} />
          </div>
          <p>Мин</p>
          <div>
                <input type="text"  value={max} onChange={showMax}/>
          </div>
          {/* <select name="type" id="type">
                <option value="text">
                  Text
                </option>
                <option value="pass">
                  Pass
                </option>
                <option value="email">
                  Email
                </option>
          </select> */}
          <div style={{marginTop: '15px'}}>
          <button  onClick={createForm} className="btn">Добавить Схему</button>

          </div>
          </div>
             
        </form>
        </details>

    </div>
  );
}
