/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
class Buying extends React.Component
{
  state={
    products:[],
    txthoten:"",
		txtdiachi:"",
		txtdienthoai:"",
		txtemail:"",
		cbxvanchuyen:"",
		
    hinhthucvanchuyen:"",
    txtghichu:"",
    }
    
	  componentDidMount()
	  {
		this.getproduct();
	  }
	  getproduct=()=>
	
	  {
		fetch('http://localhost:4000/buying/getinsert')
		.then(response=>response.json())
		.then((response=>this.setState({products:response.data})))
		.catch(err=>console.err(err))
      }
onChange=(e)=>
{
 var target= e.target;
var name =target.name;
var value=target.value;
  //if(target.type==="radio"&& target.checked==="true")
  //{
   // value=target.defaultValue;
   
  //}
 
  this.setState({
   [name]:value
  })
  
        
}
send=()=>
{
  fetch('http://localhost:4000/buying/insert', {
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
        thanhpho:this.state.cbxvanchuyen,
				thanhtoan: this.state.hinhthucvanchuyen,
			
				  
                
              }
          })
      });
}
    render()
    {
      var {txthoten,txtdienthoai,txtdiachi,txtemail,cbxvanchuyen,hinhthucvanchuyen,txtghichu}=this.state;
      console.log(this.props.id)
        return(
            <div id="body" style={{marginTop: 20}}>
            <article>
              <section>
                <div className="khungngoai">
                  <p><b>Thông tin giỏ hàng</b></p>
                  <table className="thontin">
                    <tbody><tr>
                        <td width="60%" style={{textAlign: 'center'}}><b>Sản phẩm</b></td>
                        <td width="12%" style={{padding: 15}}><b>Đơn giá<br />(VNĐ)</b></td>
                        <td width="8%" style={{padding: 15}}><b>Số Lượng</b></td>
                        <td width="15%" style={{padding: 15}}><b>Thành tiền<br />(VNĐ)</b></td>
                        <td width="15%" style={{padding: 15}} />
                      </tr>
                      <tr><td><img src="Images/Images/toyota-innova-venturer-2018-1516760j29459x450x450.jpg" style={{border: '0.7px solid #AAAAAA', marginTop: '1.5px', float: 'left'}}  alt="1"/><b style={{paddingTop: '50%'}}>Toyota Innova Venturer</b></td>
                        <td><b style={{color: 'red', padding: 15}}>879,000,000</b></td>
                        <td><input type="text" defaultValue={1} style={{width: '50%', height: 25, paddingLeft: 5, marginLeft: 5}} />
                        </td><td><b style={{color: 'red', padding: 15}}>879,000,000</b></td>
                        <td><input type="button" defaultValue="Xóa" style={{margin: 15}} />
                        </td></tr>
                        {this.state.products.map((product)=>{
                          return(
                          <tr><td><img src={product.Hinhsmall} style={{border: '0.7px solid #AAAAAA', marginTop: '1.5px', float: 'left'}}  alt="1"/><b style={{paddingTop: '50%'}}>{product.tenxe}</b></td>
                        <td><b style={{color: 'red', padding: 15}}>{product.giaxe*1000000}</b></td>
                        <td><input type="text" defaultValue={1} style={{width: '50%', height: 25, paddingLeft: 5, marginLeft: 5}} />
                        </td><td><b style={{color: 'red', padding: 15}}>{product.giaxe*1000000}</b></td>
                        <td><input type="button" defaultValue="Xóa" style={{margin: 15}} />
                        </td></tr>
                          )
                        })}
                        <tr>
                        <td style={{width: 750}} colSpan={2}><b style={{float: 'right'}}>Thành tiền</b></td>
                        <td width="300px;" colSpan={3}><b style={{color: 'red', float: 'right'}}>879,000,000</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><b style={{float: 'right'}}>Phí vận chuyển</b></td>
                        <td colSpan={3}><b style={{color: 'red', float: 'right'}}>0</b></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><b style={{float: 'right'}}>Tổng tiền</b></td>
                        <td colSpan={3}><b style={{color: 'red', float: 'right'}}>879,000,000</b></td>
                      </tr>
                    </tbody></table>
                </div>
              </section>
              <aside id="phai">
                <div className="khungngoai">
                  <p><b>Thông tin người đặt hàng</b></p>
                  <table id="khungthongtin">
                    <tbody><tr>
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
                        <td>Vận chuyển đến</td>
                        <td><select name="cbxvanchuyen" onChange={this.onChange} value={cbxvanchuyen}>
                            <option>--Chọn Tỉnh/Thành phố--</option>
                            <option>TPHCM</option>
                            <option>Hà Nội</option>
                            <option>An Giang</option>
                            <option>Bà rịa-vũng tàu</option>
                            <option>Bắc Giang</option>
                            <option>Bắc Kạn</option>
                            <option>Bạc Liêu</option>
                            <option>Bắc Ninh</option>
                            <option>Bến Tre</option>
                            <option>Bình Định</option>
                            <option>Bình Phước</option>
                            <option>Bình Dương</option>
                            <option>Bình Thuận </option>
                            <option>Cà Mau</option>
                            <option>Cần Thơ</option>
                            <option>Cao Bằng</option>
                            <option>Đà Nẵng</option>
                            <option>Đắk Lắk</option>
                            <option>Đắk Nông</option>
                            <option>Phú Thọ</option>
                            <option>Phú Yên</option>
                            <option>Quảng Bình</option>
                            <option>Quảng Nam</option>
                            <option>Quảng Ninh</option>
                            <option>Quảng Ngãi</option>
                            <option>Quảng Trị</option>
                            <option>Sóc Trăng</option>
                            <option>Sơn La</option>
                            <option>Tây Ninh</option>
                            <option>Tiền Giang</option>
                            <option>Tuyên Quang</option>
                            <option>Thái Bình</option>
                            <option>Thái Nguyên</option>
                            <option>Thanh Hóa</option>
                            <option>Thừa Thiên Huế</option>
                            <option>Trà Vinh</option>
                            <option>Vĩnh Phúc</option>
                            <option>Vĩnh Long</option>
                            <option>Yên Bái</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Hình thức<br />thanh toán</td>
                        <td><input onChange={this.onChange} type="radio" name="hinhthucvanchuyen" defaultValue="Khi nhận hàng" value={hinhthucvanchuyen}  />Khi nhận hàng<br />
                          <input onChange={this.onChange} type="radio" defaultValue="Chuyển khoản ngân hàng" name="hinhthucvanchuyen" value={hinhthucvanchuyen} />Chuyển khoản ngân hàng</td>
                      </tr>
                      <tr>
                        <td>Ghi chú</td>
                        <td><textarea defaultValue={""} name="txtghichu" onChange={this.onChange} value={txtghichu}/></td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="bt">
                  <Link><p><a onClick={this.send} href="" style={{color:"white", textDecorationColor:"#DDA81E"}}>Đặt hàng</a></p></Link>
                </div>
              </aside>
            </article>
          </div>
        )
    }
}
export default Buying;