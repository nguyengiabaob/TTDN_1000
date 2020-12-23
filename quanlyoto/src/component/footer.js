/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
class Footers extends React.Component
{
    render()
    {
        return(
            <footer style={{height:"300px", marginTop: "30px"}}>
		<div style={{height:"500px"}}>
		<table id="cuoi">
			<tbody>
			<tr><td><p style={{color: "white", fontSize: '30px', fontWeight: "bolder"}}>Thông tin</p></td>
			<td style={{paddingLeft: "210px", color:"white",fontSize: "20px", fontWeight: "bolder"}}>Kết nối</td></tr>
		<tr>
			<td><p><font color="#FFFFFF" style={{fontsize: "17px", fontweight: "bolder"}}>OTOGB.com - Chuyên trang mua bán ô tô uy tín nhất Việt Nam từ năm 2006.</font></p></td>
			<td style={{paddingTop: "20px"}}><img src="hinh/fa.png" style={{marginLeft: "200px"}}/><img src="hinh/go.png" style={{paddingLeft: "10px"}}/><img src="hinh/tw.png" style={{paddingLeft: "10px"}}/></td>
		</tr>
		<tr>
			<td><p><font color="#FFFFFF" style={{fontSize: "17px", fontWeight: "bolder"}}>Copyright © 2006-2020 OTOGB.com - Công ty cổ phần OTOGB. Mã số doanh nghiệp: 0101833960</font></p></td>
			
				</tr>
		<tr>
			<td  style={{paddingTop: "20px"}}><p><font color="#FFFFFF"  style={{fontSize: "17px", fontWeight: "bolder"}}>Email: otogb@gmail.com</font></p></td>
		</tr>
			<tr>
				<td><img src="hinh/bct.gif" style={{border: "#BABABA solid 2px",marginLeft:"280px", marginTop: "10px"}} alt="1"/></td>
			</tr>
			</tbody>
            </table>
		</div>
		
	</footer>
        )
        
    }
}
export default Footers;