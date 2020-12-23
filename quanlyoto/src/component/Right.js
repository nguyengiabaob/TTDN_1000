/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-distracting-elements */
import {Component} from 'react';
import  '../component/Css.css';
class Right extends Component

{

    render()
    {
        return(
            <aside id="right">
			<div className="sachbannhieu">
				<p>Top xe bán chạy nhất</p>
				<marquee direction="up" scrollamount="3" scrolldelay="100" onMouseMove="stop()" onMouseOut="start()">
					
					<p><a href="#"><img src="hinh/toyota-camry-new-img5-1516768j29459x450x450.jpg" alt="2" style={{float: "left"}}/>Toyota Camry 2.0G</a></p>
					<p><a href="#"><img src="hinh/toyota-fortuner-1400381j28803.jpg" alt="4" style={{clear: "both"}}/>Toyota Fortuner 2.4 MT 4x2</a></p>
					<p><a href="#"><img src="hinh/toyota-wigo-g-1-2-at-1516645j29459.jpg" alt="5" style={{float: "left"}}/>Toyota Wigo</a></p>
					<p style={{clear: "both"}}><a href="#"><img src="hinh/toyota-avanza-1-5at-1516690j29459.jpg" alt="2" />Toyota Avanza</a></p>
				</marquee>
			</div>
			<div className="sachbannhieu">
				<p>Những xe sắp có</p>
				<marquee direction="up" scrollamount="3" scrolldelay="100" onMouseMove="stop()" onMouseOut="start()">
					<p><a href="#"><img src="hinh/2020-kia-seltos-main-1573118852.jpg" alt="2"/>KIA Seltos</a></p>
					<p><a href="#"><img src="hinh/Xpander-Cross-1-5410-158458364-4137-5295-1593513481.jpg" alt="4"/>Mitsubishi Xpander Cross</a></p>
					<p><a href="#"><img src="hinh/gia-xe-toyota-altis-tai-tphcm-5.png" alt="5"/>Toyota Altis</a></p>
					<p><a href="#"><img src="hinh/model_main_comprar-320i-sport_c611dfd755.png" alt="2"/>BMW i320 Sport</a></p>
				</marquee>
					
				</div>
			</aside>
        )
    }
}
export default Right;