import React from 'react'
import user from "./images/user.png";
const ContactCard = (props) => {
const {id,email,name,} = props.contact;
  return (
    <div className='item'>
        <img className='ui avatar image' src={user} alt ="user"/>
        <div className='contact'>
        <div className='header'>{ name}</div>
            <div>{ email}</div>
        </div>
        <i className='trash alternate outline icon '
        style={{color :"red", marginTop :"7px"}}
         >
        </i>
    </div>
  );
}

export default ContactCard;