import React, { useState } from 'react';
import NewMember from './newMember';
import './App.css';
import NewMemberList from './newMemberList';


const formValues= {
  firstName: '',
  lastName: '',
  email:'',
  number: '',
}

export default function App() {

/*   const [mainList, setMainList] = useState([]) */
  const [inputvalue, setInputValue] = useState(formValues);
  const [newf, setnewf]= useState([])

   const updateform = (inputName, inptValue) =>{
     console.log('ddd');
     setInputValue({ ...inputvalue, [inputName]: inptValue})
   }

   const submitform = () =>{
    const newpal = {
      firstName: inputvalue.firstName.trim(),
      lastName: inputvalue.lastName.trim(),
      email: inputvalue.email.trim(),
      number: inputvalue.number
    }

    setnewf([...newf ,newpal]);
   setInputValue(formValues);
  }

  return (
    <div>
      <header>
       
        <h1>
          THE ULTIMATE FORM
        </h1>
          
        
      </header>
       <NewMember 
      values={inputvalue} 
      update={updateform} 
      submit={submitform} />
          {
        newf.forEach(xyz =>{
          <NewMemberList person={xyz} key={xyz.number}/>
        })
      }
      
    </div>
  );
}