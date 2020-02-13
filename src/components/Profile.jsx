import React from 'react';
import PropTypes from "prop-types";

function Profile(props) {
  const profileStyle = {
    height: 'auto',
    display: 'flex',
    margin: '20px 72px'
  }
  const profileTextStyle = {
    paddingLeft: '40px'
  }
  const profilePicStyle = {

  }
  return (
    <div style={profileStyle}>
      <div style={profilePicStyle}>
        <img width='240px' height='auto'  src={props.img}/>
      </div>
      <div style={profileTextStyle}>
        <h2>{props.name}</h2>
        <h3><em>{props.position}</em></h3>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  img: PropTypes.object
};

export default Profile;
