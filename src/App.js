import './App.css';
import Profile from './profile/profile';
function App() {
    <div className='container'></div>
    let fullName = 'Assil Bouzouita'
    let Bio =
  <div>
    <p>Simplicity is the key to happiness.</p>
    <p>In a world of worriers, be a warrior.</p>
    <p>Captivated from life, showing it here.</p>
    <p>We have tomorrows for reason.'</p>
  </div>

    const alertUser = () => {
    alert('Profile User name is Assil')
  }
 
 return (
      <div className='app'>
        <Profile alertUser={alertUser} fullName={fullName} profession='Student' bio={Bio}><img src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' alt='img'></img></Profile>
      </div>
  );
};

export default App;
