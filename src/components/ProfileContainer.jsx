import React from 'react';
import Profile from './Profile';
import Header from './Header';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const title = 'About Us'

const employees = [
  {
    name:'So-and-so',
    position: 'Super manager',
    bio: 'I have nothing creative to write. Pork belly chicken tri-tip, cow turducken landjaeger kevin beef ribs picanha prosciutto pancetta bacon. Jerky pork loin shank meatball, sausage salami cupim tail.',
    img: img1
  },
  {
    name:'Big Lebowski',
    position: 'Bowler',
    bio: "Well that's just like, your opinion, man. 'I have nothing creative to write. Pork belly chicken tri-tip, cow turducken landjaeger kevin beef ribs picanha prosciutto pancetta bacon. Jerky pork loin shank meatball, sausage salami cupim tail.",
    img: img2
  },
  {
    name:'That one guy',
    position: 'Psychedelic weirdo',
    bio: "I play a crazy weird instrument.Pork belly chicken tri-tip, cow turducken landjaeger kevin beef ribs picanha prosciutto pancetta bacon. Jerky pork loin shank meatball, sausage salami cupim tail.",
    img: img3
  },
];

function ProfileContainer() {
  return (
    <div>
    <Header title={title}/>
      {employees.map((employee, index) =>
          <Profile name={employee.name}
          bio={employee.bio}
          position={employee.position}
          img={employee.img}/>
      )}
    </div>
  );
}

export default ProfileContainer;
