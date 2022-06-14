import Images from'../images.jpg'
import '../css/card.css'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import TheatersIcon from '@mui/icons-material/Theaters';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';
//https://www.instagram.com/p/Cek2_YUrbdm/?utm_source=ig_web_copy_link

function Card(){
  return(
    <div className="card">
      <ul className="ul">
        <li>
          <i className="bx bx-drink"><LocalBarIcon/></i>
        </li>
        <li>
          <i className="bx bx-film"><TheatersIcon/></i>
        </li>
        <li>
          <i className="bx bx-store-alt"><StoreIcon/></i>
        </li>
        <li>
          <i className="bx bx-map"><LocationOnIcon/></i>
        </li>
      </ul>
      <img src={Images}/>
      <div className='con-text'>
        <h2>
          Paris
        </h2>
        <p>
          Paris,the capital of France, is a major European city and a world center for gastronomy and culture. Its 19th century urban landscape is intersected by wide boulevards and the River Seine.
          <button>
            See more
          </button>
        </p>
      </div>
    </div>
  )  
}

export default Card;

