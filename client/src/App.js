import './App.css';
import './side_bar.css'
import './main_sec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Curent_contact from './Curent_contact';
import myimage from './images/index.jpeg';
import ImageComponent from './ImageComponent';
import senderimage from './images/H_P.jpg'
import Side_bar_friends_person from './Side_bar_friends_person';
import Side_bar_friends_group from './Side_bar_friends_group';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
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
            <div className="chatbubble bubble_left">
              <ImageComponent className='profile_image' url={senderimage} alt='left side profile'/>
              <div className="shape"></div>
              <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              </div>
            </div>
            <div className="chatbubble bubble_right">
              
              
              <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore qui reiciendis excepturi aliquam, quisquam minima quaerat at illo nulla omnis nesciunt facilis ducimus corrupti? Quaerat perferendis corporis deleniti at est.
              </div>
              <div className="shape"></div>
            </div>
          </div>
        </div>
        <div className="input_box">
          <IconButton onClick={()=>{document.querySelector('div.main-section div.sticker_box').classList.toggle('shown')}}>
            <TagFacesIcon/>
          </IconButton>
          <input type="text" name="" id="" placeholder='... متن خود را اینجا وارد کنید'/>
          <IconButton className='record' color='error'>
            <MicNoneIcon/>
          </IconButton>
          <IconButton>
            <SendIcon/>
          </IconButton>

        </div>
        <div className="sticker_box">
            <div className="head">
                
                  <WatchLaterOutlinedIcon className='on'/>
                  <TagFacesIcon/>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
