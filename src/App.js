
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Transition from './components/transition';

function App() {
  return (
  <div className='w-full p-2 h-screen  '>
   <Sidebar>
    <Header/>
    <Main/>
   
   </Sidebar>

  </div>

  );
}

export default App;
