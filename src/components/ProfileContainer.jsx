import React from 'react';
import Profile from './Profile';
import Header from './Header';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.webp';

const title = 'About Us'

const employees = [
  {
    name:'So-and-so',
    position: 'Super manager',
    bio: "\"It's Commander Hoek and Stimpy! Happy, happy, happy! Joy, joy, joy! My favorite live-action drama!, Don't let it start, don't let it start, Roger, A O.K. Activate View Screen, I can't watch this show without my... Trusty Commander Hoek Radar Decoder Ring, My... Official Commander Hoek Space Helmet, Not to mention your Genuine Super Elastic Time Shorts bet you don't have a pair of these Earthling, And... my Anti-Gravity Bubblegum.\"",
    img: img1
  },
  {
    name:'Big Lebowski',
    position: 'Bowler',
    bio: "\"Let me explain something to you. Um, I am not 'Mr. Lebowski'. You're Mr. Lebowski. I'm the Dude. So that's what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you're not into the whole brevity thing.\"",
    img: img2
  },
  {
    name:'That one guy',
    position: 'Psychedelic weirdo',
    bio: "\"I am just a random musician and I play a crazy weird instrument. Pork belly chicken tri-tip, cow turducken landjaeger kevin beef ribs picanha prosciutto pancetta bacon. Jerky pork loin shank meatball, sausage salami cupim tail.\"",
    img: img3
  },
  {
    name:'Garth Algar',
    position: 'Cable Access TV Host',
    bio: "\"Did you ever see that 'Twilight Zone' where the guy signed a contract and they cut out his tongue and put it in a jar and it wouldn't die, it just grew and pulsated and gave birth to baby tongues? Pretty cool, huh?\"",
    img: img4
  },
];

function ProfileContainer() {
  return (
    <div>
    <Header title={title}/>
      {employees.map((employee, index) =>
          <Profile
          name={employee.name}
          bio={employee.bio}
          position={employee.position}
          img={employee.img}
          />
      )}
    </div>
  );
}

export default ProfileContainer;
