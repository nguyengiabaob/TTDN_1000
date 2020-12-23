/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import '../component/Css.css';
class Lienhe extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={ 
			txthoten:"",
			txtdiachi:"",
			txtdienthoai:"",
			txtemail:"",
			txttieude:"",
			txtnoidung:""

	}
	}
	onChange=(e)=>{
		var target= e.target;
		var name =target.name;
		var value = target.value;
		this.setState({
			[name]:value
		})
	}
	send=()=>
{
	fetch('http://localhost:4000/lienhe', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
				 hoten: this.state.txthoten,
				 dienthoai: this.state.txtdienthoai,
				email: this.state.txtemail,
				diachi: this.state.txtdiachi,
				tieude: this.state.txttieude,
				noidung: this.state.txtnoidung
				  
                
              }
          })
      });
}
erase=()=>
{
	
	var value ="";
	this.setState({
		txthoten:value
	})

}
	render()
	
    {	let prev= ">";
		let next="<";
		 var {txthoten,txtdienthoai,txtdiachi,txtemail,txttieude,txtnoidung}=this.state;
        return(
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
			<article>
				<aside id ="left">
			<div>
			<p><b>Danh mục sản phẩm</b></p>
			<ul type="square" style={{textDecoration:"none"}}>
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
                <p>Thông tin liên hệ</p>
				<div class="main"  style={{height: "600px"}}>
					
				<table id="lh" style={{marginTop: "20px"}}>
				<tbody>
                <tr>
						<td>Họ tên</td>
						<td><input type="text" width="" name="txthoten" value={txthoten} onChange={this.onChange}/></td>
					</tr>
                    <tr>
						<td>Điện thoại</td>
						<td><input type="text"name="txtdienthoai" value={txtdienthoai} onChange={this.onChange}/></td>
					</tr>
					<tr>
						<td>Email</td>
						<td><input type="email" name="txtemail" value={txtemail} onChange={this.onChange}/></td>
					</tr>
					<tr>
						<td>Địa chỉ</td>
						<td><input type="text" name="txtdiachi" value={txtdiachi} onChange={this.onChange}/></td>
					</tr>
					<tr>
						<td>Tiêu đề</td>
						<td>
							<input type="text" name="txttieude" value={txttieude} onChange={this.onChange}/>
						</td>
					</tr>
					<tr id="tt">
						<td>Nội dung</td>
						<td ><input type="text" name="txtnoidung" value={txtnoidung} onChange={this.onChange}/></td>
					</tr>
				</tbody>
                </table>
                <div id="bt3">
					<div className="bt" >
					<Link><p><a href="" style={{textDecorationColor:"#DDA81E", color:"white",fontWeight:500}} onClick={this.send}>Gửi đi </a></p></Link>
				</div>
					<div class=" bt bt1" >
					<Link><p><a href="" style={{textDecorationColor:"#DDA81E", color:"white",fontWeight:500}} onClick={this.erase}>Xóa trắng</a></p></Link>
				</div>
						</div>
			</div>
				<br/>
                
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
export default Lienhe;