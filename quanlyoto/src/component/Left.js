import{ Component } from 'react';
import { BrowserRouter as  Link} from "react-router-dom";
import  '../component/Css.css';
class Left extends Component
{
    render()
    {
        return(
            <aside id ="left">
				<div>
                <p><b>Danh mục sản phẩm</b></p>
				<ul type="square" style={{textDecoration:"none"}}>
					<li><img src="hinh/Toyota.png" alt="1"/><a href="/ToYota"><Link  to="/ToYota"></Link>ToYota</a></li>
					<li><img src="hinh/Audi.png" alt="1"/><a href="/Audi"><Link to="/Audi"></Link>Audi</a></li>
					<li><img src="hinh/KIA.png" alt="1"/><Link to="KIA" >KIA</Link></li>
					<li><img src="hinh/Hyundai.png" alt="1"/><Link to="Huyndai">Hyundai</Link></li>
					<li><img src="hinh/Honda.png" alt="1"/><Link to="HONDA">Honda</Link></li>
					<li><img src="hinh/Suzuki.png" alt="1"/><Link to="SUZUKI">Suzuki</Link></li>
					<li><img src="hinh/Mercedes-Benz.png" alt="1"/><Link to="mescedes">Mercedes-Benz</Link></li>
					<li><img src="hinh/Mazda.png" alt="1"/><Link to="MAZDA">Mazda</Link></li>
					<li><img src="hinh/BMW.png" alt="1"/><Link to="BMW">BMW</Link></li>
				</ul>
				</div>
                <div>
				    <img src="hinh/Anh-dong-Xe-Hoi-30.gif" alt="1"/>
				</div>
                <div>
					<p><b>Like Facebook</b></p>
					<table>
					<iframe  title="15" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOTOGBcomvn-101392914982497%2F%3Fmodal%3Dadmin_todo_tour&tabs&width=240&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="237" height="130" style={{border:"none" ,overflow:"hidden" ,scrolling:"no" ,frameborder:"0",allowTransparency:"true" ,allow:"encrypted-media"}}></iframe>
					</table>
				</div>
			
			</aside>
        )
    }
}
export default Left;