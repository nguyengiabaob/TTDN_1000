/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { Link } from 'react-router-dom';
class Tintuc extends React.Component {
    render() {
        let prev= ">";
		let next="<";
        return (
            <div>
			<aside id="slide">
			<div class="slide-pager">
				<div class="slide-control-next" >{prev}</div>
				<div class="slide-control-prev" >{next}</div>
			</div>
			<div class="slide-container">
				<div class="slide-stage">
					<div class="slide-image">
						<img src="hinh/p0.jpg" name="image" alt="1"/>	
					 </div>
		
		
	   
		</div>
	</div>
		</aside>
			<article id="midlle">
			<aside id ="left">
			<div>
			<p><b>Danh mục sản phẩm</b></p>
			<ul type="square" style={{textDec0oration:"none"}}>
			<li><img src="hinh/Toyota.png" alt="1"/><a href="/Toyota"><Link  to="/Toyota"></Link>ToYota</a></li>
					<li><img src="hinh/Audi.png" alt="1"/><a href="/Audi"><Link to="/Audi"></Link>Audi</a></li>
					<li><img src="hinh/KIA.png" alt="1"/><a href="/KIA"><Link to="/KIA" >KIA</Link></a></li>
					<li><img src="hinh/Hyundai.png" alt="1"/><a href="/Huyndai"><Link to="/Huyndai">Hyundai</Link></a></li>
					<li><img src="hinh/Honda.png" alt="1"/><a href="/Honda"><Link to="/Honda">Honda</Link></a></li>
					<li><img src="hinh/Suzuki.png" alt="1"/><a href="/Suzuki"><Link to="/Suzuki">Suzuki</Link></a></li>
					<li><img src="hinh/Mercedes-Benz.png" alt="1"/><a href="/Mescedes"><Link to="/Mescedes">Mercedes-Benz</Link></a></li>
					<li><img src="hinh/Mazda.png" alt="1"/><a href="/Mazda"><Link to="/Mazda">Mazda</Link></a></li>
					<li><img src="hinh/BMW.png" alt="1"/><a href="/BMW"><Link to="/BMW">BMW</Link></a></li>
		
			
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
            <section>
                <p>Tin Tức</p>
                <div className="main2">
                    <table className="xe">
                        <div className="tintuc">
                            <img src="hinh/LVOcYlzWvS.jpg" class="hinhtintuc" alt="th" onClick="chitiet()" />
                            <div style={{}}>
                                <a style={{textDecoration:"none"}} href="/sieuphamlamborghinisianroadster"> <b style={{ fontSize: "17px", color: "#E94F52" }}>Siêu phẩm Lamborghini Sian Roadster, chỉ có 19 chiếc trên toàn thế giới</b></a>
                                <br />
                                <p style={{ textAlign: "justify", marginLeft: "150px" }}>Nhìn chung, Sian Roadster vẫn giữ nguyên phong cách thiết kế chuẩn của một biến thể mui trần và nền tảng cơ khí từ Sian FKP 37. Chiếc xe tiếp tục mang thiết kế ngoại thất hầm hố đặc trưng, xen lẫn dáng dấp của một mẫu ô tô tương lai.</p>
                            </div>
                        </div>
                        <div className="tintuc">

                            <img className="hinhtintuc" src="hinh/eNCKtDoK5Q.jpg" alt="th" onClick="chitiet()" />

                            <p><b style={{ fontSize: "17px", color: "#E94F52" }}>BMW X7 mạnh ngang siêu xe khi qua tay hãng độ Alpina</b></p>
                            <br />
                            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "150px" }}>Mẫu Alpina XB7 là phiên bản được độ lại từ chiếc BMW X7, có ngoại hình thể thao và sức mạnh ngang ngửa một siêu xe.</p>

                        </div>
                        <div className="tintuc">

                            <img className="hinhtintuc" src="hinh/QVKe3lss9e.jpg" alt="th" onClick="chitiet()" />

                            <p><b style={{ fontSize: "17px", color: "#E94F52" }}>Audi Q4 Sportback E-Tron - xe điện hứa hẹn gây bão trong 2021</b></p>
                            <br />
                            <p style={{ fontsize: "16px", textAlign: "justify", marginLeft: "150px" }}>Thương hiệu xe cao cấp Audi mới đây đã công bố những hình ảnh phác thảo của mẫu SUV concept chạy điện.</p>

                        </div>
                        <div class="tintuc">

                            <img className="hinhtintuc" src="hinh/XMReSsYmlO.jpg" alt="th" onClick="chitiet()" />

                            <p><b style={{ fontsize: "17px", color: "#E94F52" }}>Ấn tượng với sức mạnh của Kia K5 GT</b></p>
                            <br />
                            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "150px" }}>Thị trường Mỹ hiện đang xôn xao với Kia K5 2021 phiên bản GT hoàn toàn mới sử dụng động cơ 2.5 tăng áp có thể tạo ra năng suất đạt tới 290 mã lực giúp ô tô tăng tốc từ 0 - 100 km/giờ chỉ trong 5,9 giây.</p>

                        </div>
                        <div class="tintuc">
                            <img className="hinhtintuc" src="hinh/dg1uNQMFhl.jpg" alt="th" onClick="chitiet()" />

                            <p><b style={{ fontSize: "17px", color: "#E94F52" }}>Nhiều đại lý Việt Nam đã bắt đầu mở đơn đặt hàng cho Mercedes GLB</b></p>
                            <br />
                            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "150px" }}>Mẫu xe 5+2 GLB hiện đã được các các đại lý nhận cọc và dự kiến sẽ cập cảng Việt Nam trong cuối năm nay.</p>

                        </div>

                        <div className="tintuc">
                            <img className="hinhtintuc" src="hinh/bouFQbxcp3.jpg" alt="th" onClick="chitiet()" />

                            <p><b style={{ fontSize: "17px", color: "#E94F52" }}>Kia Sedona 2015 máy xăng đã qua sử dụng chỉ còn 700 triệu</b></p>
                            <br />
                            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "150px" }}>Những chiếc Kia Sedona 2015 phiên bản máy xăng cũ hiện có giá bán lại hơn 700 triệu đồng, ngang ngửa với Toyota Innova và thấp hơn phiên bản máy dầu cho dù giá niêm yết lúc ra mắt cao hơn.</p>

                        </div>
                    </table>
                </div>
                <br />
            </section>
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
		 </article>
		 </div>
        )
    }
}
export default Tintuc;