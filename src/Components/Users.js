import React, { useState } from 'react';

const Users = (props) => {
    const {name, email, picture, website, phone} = props.user;
    const addMember = props.addMember;
    const [mobile, setMobile] = useState('');
    const fullName = name.first + '' + name.last;
    const usersStyle = {
        border: '2px solid red',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%'
    }
    const showPhone = () => setMobile(phone);
    return (
        <div style={usersStyle}>
            <div style={{marginTop:'25px'}}>
                <img src={picture.large} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                 <h1>Name: {fullName}</h1>
                 <p>email: {email}</p>
                 <p><a target="blank" href={website}>Learn about me</a></p>
                 <p>phone: {mobile}</p>
                 <button onClick={showPhone}>Show phone number</button>
                 <button onClick={() => addMember(fullName)}>Add me</button>
            </div>
            
        </div>
    );
};

export default Users;