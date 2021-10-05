
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myimage from './images/index.jpeg';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div className="App row no-gutters">
      <div className="side-bar col-sm-4">
        <div className="setting">
          <ImageComponent className='profile' url={myimage} alt='profile image'/>
        </div>
      </div>
      <div className="main-section col-sm-8">a</div>
    </div>
  );
}

export default App;
