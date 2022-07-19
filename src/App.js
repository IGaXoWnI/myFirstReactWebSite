import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import Wrapped from './components/Features/wrapped';
import VideoSide from './components/VideoSide/VideoSide';
import UserI from './components/UserI/UserI';
import Letstalk from './components/Letstalk/Letstalk';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <VideoSide/>
        <Sponsors/>
        <Wrapped />
        <UserI/>
        <Letstalk/>
        <Footer/>
        
    </div>
  );
}

export default App;
