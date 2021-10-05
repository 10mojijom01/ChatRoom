import './App.css';
import './side_bar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import myimage from './images/index.jpeg';
import ImageComponent from './ImageComponent';
import Side_bar_friends_person from './Side_bar_friends_person';
import Side_bar_friends_group from './Side_bar_friends_group';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
function App() {
  return (
    <div className="App row no-gutters">
      <div className="side-bar col-sm-4">
        <div className="setting">
          <ImageComponent className='profile-image' url={myimage} alt='profile image' />
          {/* <span className="profile"></span> */}
          <span className="setting--right float-right">
            <abbr title="شروع چت جدید"><i><MessageIcon /></i></abbr>

            <abbr title="تنظیمات"><i><SettingsIcon /></i></abbr>
          </span>
        </div>
          <div className="search-box">
            <div className="input-warpper">
              <i><SearchIcon/></i>
              <input type="text" name="" id="" placeholder='Search'/>
            </div>
          </div>
          <div className="friend-list">
              <Side_bar_friends_person last_seen='30:12' p_name='مجتبی باغی بیرق' profile_url={myimage}/>
              <Side_bar_friends_group  group_name='مجتبی باغی بیرق' profile_url={myimage} discription='گروه بازی مافیا'/>
          </div>
        </div>
        
      <div className="main-section col-sm-8">

      </div>
    </div>
  );
}

export default App;
