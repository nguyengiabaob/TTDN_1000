/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';


import  '../component/detail.css';

let a
class Detail extends React.Component
{
  
  state={gia:this.props.giaxe*1000000,t:1}
  
  increase=(e)=>
  {
    this.setState({gia:this.props.giaxe*e.target.value*1000000})
    
   
    
  }

    
    render()
    {
      const id=this.props.id;
      const insert=()=> {
        fetch('http://localhost:4000/buying/insert', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  id: this.props.id
                
              }
          })
      });
          
         
        }
   
      
      console.log(id)
        return(
            <div id="body">
  <article style={{float:'left'}}>
    <aside id="trai">
      <div>
        <img name="phu" src={this.props.hinhchinh1} />
        <div id="trai1">
          <div className="hinh">
            <img src="hinh/muitenprev.png" />
          </div><div className="hinhxe">
            <img src={this.props.hinhsmall}  />
          </div><div className="hinhxe">
            <img src={this.props.hinhsmall2}  />
          </div><div className="hinh">
            <img src="hinh/muitennext.png" />
          </div>
        </div>
      </div>
      </aside>
    <section>
      <div>
        <p style={{fontSize: 25}}><b>{this.props.tenxe}</b></p>
        <br />
        <p style={{fontSize: 20}}>Xuất xứ : {this.props.theloai}</p>
        <p style={{fontSize: 20}}>Bảo hành : 3 Năm Hoặc 100.000 Km</p>
        <br />
        <p style={{fontSize: 18}}><b>Thông số cơ bản của xe :</b></p>
        <br />
        <p style={{fontSize: 18}}><b>+ Kích thước tổng thể bên ngoài (D x R x C) :{this.props.kichthuoc}<br />
            + Số chỗ ngồi : {this.props.socho}<br />
            + Kiểu dáng : {this.props.kieudang}<br />
            + Nhiên liệu : {this.props.nhienlieu}<br />
            + {this.props.canxe}<br />
            + Động cơ xăng dung tích {this.props.dungtichxang} cc
            <br />
          </b></p>
        <br />
      </div>
      <div>
        <p style={{fontSize: 18}}><b>Chương trình khuyến mãi trong tháng: Ưu đãi nhiều phụ kiện cao cấp: Phim cách nhiệt, Camera hành trình, Đầu DVD, Camera de, Định vị GPS, Lót sàn giảm âm,…</b></p>
        <br />
      </div>
      <div>
        <p style={{fontSize: 18}}><b>Bổ sung: Camera lùi, Apple Carplay, Android Auto</b></p>
        <br />
      </div>
      <div>
        <p style={{fontSize: 18}}><b>Nâng cấp: Đầu CD lên DVD với màn hình cảm ứng 7 inch, ghế nỉ lên ghế da</b></p>
        <br />
      </div>
      <div style={{border: '2px solid #A0A0A0', backgroundColor: '#F0F0F0', height: 120}}>
        <table>
          <thead>
        
          </thead>
          <tbody>
            <tr>
              <td style={{fontSize: 20}}><p>Giá sản phẩm : </p></td>
              <td><b style={{fontSize: 20}}><font color="#F41F23"> {}</font></b></td>
            </tr>
            <tr>
              <td style={{fontSize: 20}}>Số lượng:</td>
              <td><input className="button" type="number" min={1} defaultValue={1} style={{fontSize: 20, width: '20%', textAlign: 'center'}} onClick={(e)=>{this.increase(e)} }/></td>
            </tr>
            <tr>
              <td style={{fontSize: 20}}><p>Tỗng tiền :</p></td>	
              <td style={{fontSize: 20}}><b><font color="#F41F23"> {this.state.gia} VND</font></b></td>
            </tr>
          </tbody>
          </table>
        <div>
          
          <div style={{backgroundColor: '#DDA81E', width: '30%', textAlign: 'center', height: 30, float: 'left', marginLeft: 5}}>
           <Link to="/buying"><a onClick={insert} style={{textDecoration:"none",fontSize: 18,color:"white"}} href="/buying">Thêm giỏ hàng</a></Link>
          </div>
        </div>
      </div>
      <div style={{marginTop: 10, border: '2px solid #A0A0A0', backgroundColor: '#F0F0F0', height: 50, textAlign: 'center'}}>
        <p style={{fontSize: 22, marginTop: 10}}><b><font color="#3182F3">HOTLINE: </font></b><b><font color="#D6090D">  0999856410 Mr.Bảo</font></b></p>
      </div>
    </section>
  </article>
  <table>
    
  <div style={{backgroundColor: '#E01C1F', width: '10%', height: 40, textAlign: 'center', marginTop: 20}}>
  <p style={{fontSize: 22}}><b><font color="white" style={{marginTop: 150}}>CHI TIẾT</font></b></p>
  </div>
   
  <div style={{border: '1.5px solid #C7C7C7', marginLeft: 4, marginRight: 4, marginBottom: 5}}>
  
   <div>
      <p style={{fontSize: 20}}><b><font color="red">TỔNG QUAN</font></b></p>
      <br />
    </div>
    <div>
      <p style={{fontSize: 18}}><b><font color="black">Đầu xe</font></b></p>
      <br />
    </div>
    <div>
        <p style={{fontSize: 18}}>{this.props.noidung1}</p>
    </div>
    <div>
      <img src={this.props.hinh1} />
    </div>
    <div>
      <p style={{fontSize: 18}}><b>Thân xe</b></p><br />
        <p style={{fontSize: 18}}>{this.props.noidung2}</p>
    </div>
    <div><img src={this.props.hinh2} />
    </div>
    <div>
      <p style={{fontSize: 18}}><b>Đuôi xe</b></p><br />
        <p style={{fontSize: 18}}>{this.props.noidung3}</p>
    </div>
    <div>
      <img src={this.props.hinh3} />
    </div>
  </div>
 
  </table>
</div>

        )
    }
}
export default Detail;