import React from 'react'
class Audi extends React.Component
{
    render()
    {
        return(
            <section>
				<p>Sản phẩm Đề Cử 2019</p>
				<div className="main">
				<table className="xe">
			<div className="sach">
				<p className="tensach"><a href="hinh/images.jpg">Audi A4</a></p>
		<img className="hinhsach" src="hinh/5455005_00497_2018-audi-a4_001.png" alt="th" onClick="chitiet()" />
		<p className="dongia">Giá :<span className="gia">879,000,000 VNĐ&nbsp;</span></p>
			</div>
           <div className="sach">
				<p className="tensach"><a href="hinh/download (2).jpg">Audi A6 </a></p>
		<img className="hinhsach" src="hinh/Audi_A6_Premium_Plus_45_TFSI_quattro_2020.jpg" alt="th" />
		<p className="dongia">Giá :<span className="gia">1,029,000,000 VNĐ</span></p>
			</div>
           <div className="sach">
				<p class="tensach"><a href="./Chitietsanpham.html">Audi A8</a></p>
		<img className="hinhsach" src="hinh/A8.jpg" alt="th" />
		<p className="dongia">Đơn giá :<span className="gia">612,000,000 VNĐ</span></p>
	
			</div>
           <div class="sach">
				<p className="tensach"><a href="./Chitietsanpham.html">Audi Q2 </a></p>
		<img className="hinhsach" src="hinh/Q2.jpg" alt="th" />
		<p className="dongia">Giá :<span className="gia"> 1,235,000,000 VNĐ</span></p>
		
			</div>
           <div className="sach">
				<p className="tensach"><a href="./Chitietsanpham.html">Audi Q3</a></p>
		<img className="hinhsach" src="hinh/Q3.jpg" alt="th" />
		<p className="dongia">Giá :<span className="gia"> 622,000,000 VNĐ</span></p>

			</div>
           <div className="sach">
				<p className="tensach"><a href="./Chitietsanpham.html">Audi Q5</a></p>
		<img className="hinhsach" src="hinh/q5.jpg" alt="th" />
		<p className="dongia">Giá :<span className="gia">1,033,000,000VNĐ</span></p>
		
		
				</div>
			</table>
			</div>
			<br/>
			
        	<p>Sản phẩm Đề Cử 2018</p>
			<div class="main">
			<table className="xe">
			<div class="sach">
				<p class="tensach"><a href="./Chitietsanpham.html">Audi Q7</a></p>
		<img class="hinhsach" src="hinh/audi-q7.jpg" alt="th" />
		<p class="dongia">Đơn giá :<span class="gia">1,260,000,000 VNĐ</span></p>
	
			</div>
           <div class="sach">
				<p class="tensach"><a href="./Chitietsanpham.html">Audi Q8</a></p>
		<img class="hinhsach" src="hinh/2019-audi-q8-main-1560855708.jpg" alt="th" />
		<p className="dongia">Đơn giá :<span className="gia">1,500,000,000 VNĐ</span></p>
	
			</div>
           
          
		
			</table>
			</div>
		</section>
        )
    }
}
export default Audi;
