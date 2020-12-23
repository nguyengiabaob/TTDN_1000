/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {Link } from 'react-router-dom'
class Detailnews extends React.Component
{
    state={
        products:[],
        
        
        }
        
          componentDidMount()
          {
            this.getproduct();
          }
          getproduct=()=>
        
          {
            fetch('http://localhost:4000/detailnews')
            .then(response=>response.json())
            .then((response=>this.setState({products:response.data})))
            .catch(err=>console.err(err))
          }
     

    render()
    {   let prev= ">";
        let next="<";
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

            
                {this.state.products.map((product)=> {
                    
            return(
                <div>
                       <div id="bd" style={{height: '120px'}}>
                <p style={{marginTop: '20px'}}><b style={{fontSize: '30px'}}>{product.demuc}</b></p>
                <br />
                <p style={{marginBottom: '100px'}}>1 ngày trước - 71 lượt xem</p>
              </div>
              <div>
                <p style={{marginTop: '20px'}}><b style={{fontSize: '18px'}}>{product.noidung0}</b></p>
                <ul style={{marginLeft: '15PX'}}>
                <li style={{marginBottom: '10px'}}><a href="#" style={{color: '#118EC6'}}>{product.Chitietkhac}</a></li>
                  <li style={{marginBottom: '10px'}}><a href="#" style={{color: '#118EC6'}}> Mướt mắt với ảnh nhá hàng của Kia Sedona 2021</a></li>
                  <li style={{marginBottom: '10px'}}><a href="#" style={{color: '#118EC6'}}> Thông tin chiếc MPV đáng mong chờ nhất năm: Kia Sedona 2021</a></li>
                  <br />
                </ul>
                <p style={{fontSize: '18px', textAlign: 'justify'}}>{product.noidung1}</p>
                <br />
                <div>
                  <img src={product.hinh1} />
                </div>
                <br />
               
                
                
                
                <p style={{fontSize: '18px', textAlign: 'justify'}} /><p style={{fontSize: '18px', textAlign: 'justify'}}>{product.noidung2}</p>
                <p />
                <br />
                <div>
                  <img src={product.hinn2} />
                </div>
                <br />
                <p style={{fontSize: '18px', textAlign: 'justify'}} /><p style={{fontSize: '18px', textAlign: 'justify'}}>{product.noidung3}</p>
                <p />
                
                <br />
               
                <div>
                  <img src={product.hinh3} />
                </div>
                <br />
               
              </div><table>
              </table>
                  </div>
            )
                  
                    
                })}
             
                
            
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
export default Detailnews