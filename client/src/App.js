import './App.css';
import './side_bar.css'
import './main_sec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Curent_contact from './Curent_contact';
import myimage from './images/index.jpeg';
import ImageComponent from './ImageComponent';
import Side_bar_friends_person from './Side_bar_friends_person';
import Side_bar_friends_group from './Side_bar_friends_group';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <div className="setting">
          <ImageComponent className='profile-image' url={myimage} alt='profile image' />
          {/* <span className="profile"></span> */}
          <span className="setting--right float-right">
            <abbr title='تازه سازی'><i><CachedIcon/></i></abbr>

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
        
      <div className="main-section">
        <Curent_contact  contact_last_seen='online' contact_name='نام مخاطب' contact_discription='چت روم مافیا' profile_url={myimage}/>
        <div className="chat_panel">
          <div className='display'>
     
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
