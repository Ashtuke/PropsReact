import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({fullName,profession,bio,alertUser,children}) => {

  return (
    <div className='container'>
    Name :
        <h1>{fullName}</h1>
  {children} 
         
    Profession:   
        <h4> {profession} </h4>
    Bio:
       <h2>{bio}</h2>
       {alertUser(fullName)}
    </div>
  )
}
Profile.propTypes ={
  fullName: PropTypes.string,
  profession:PropTypes.string,
}
export default Profile;
