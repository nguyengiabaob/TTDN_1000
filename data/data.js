const express = require('express');
const cors= require('cors')
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser')
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '1234',
    database: 'quanlyoto'

})



app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
console.log(connection);
const query = 'SELECT * FROM xe';
const query_1= 'SELECT * FROM chitietxe JOIN xe ON chitietxe.ID=xe.id join danhsachhinh on danhsachhinh.id=xe.id';

app.get('/product',(req,res)=>{connection.query(query,(err,result)=>
    {
        if(err)
            return res.send(err);
        else
            return res.json({data:result});
    }
    )
    }
    );
app.get('/productdetail',(req,res)=>{connection.query(query_1,(err,result_1)=>
    {
        if(err)
            return res.send(err);
        else
            return res.json({data:result_1});
    }
    )
    }
    );
app.get('/',(req,res)=>{
    res.send('product is ready');

})
app.get('/buying/getinsert',(req,res)=>{
    const query_3= 'SELECT * FROM muahang JOIN xe on muahang.id= xe.id JOIN danhsachhinh on muahang.id= danhsachhinh.Id';
    connection.query(query_3,(err,result_3)=>
    {
        if(err)
            return res.send(err);
        else
            return res.json({data:result_3});
    }
    )
    }
    );
    app.get('/searchresult',(req,res)=>{
        const query_3= 'SELECT * FROM lichsutimkiem ';
        connection.query(query_3,(err,result_3)=>
        {
            if(err)
                return res.send(err);
            else
                return res.json({data:result_3});
        }
        )
        }
        );
app.post('/buying/insert',(req,res)=>{
        const id =req.body.user.id;
        const hoten =req.body.user.hoten;
        const dienthoai =req.body.user.dienthoai;
        const diachi =req.body.user.diachi;
        const email =req.body.user.email;
        const thanhpho =req.body.user.thanhpho;
        const thanhtoan =req.body.user.thanhtoan;
        const query_2= "INSERT INTO muahang (id, hoten, diachi, email, sdt, thanhcong, thanhtoan) VALUES (?, ?, ?, ?, ?, ?, ?);"
        connection.query(query_2,[id,hoten,diachi,email,dienthoai,thanhpho,thanhtoan],(err,result_2)=>
        {
           
               console.log(req.body.user.id);
        }
        )
        }
        );
app.post('/lienhe',(req,res)=>{
const id =req.body.user.id;
const hoten =req.body.user.hoten;
const dienthoai =req.body.user.dienthoai;
const diachi =req.body.user.diachi;
const email =req.body.user.email;
const tieude =req.body.user.tieude;
const noidung =req.body.user.noidung;
const query_2= "INSERT INTO muahang (id, hoten, diachi, email, sdt, tieude, noidung) VALUES (?, ?, ?, ?, ?, ?, ?);"
connection.query(query_2,[id,hoten,diachi,email,dienthoai,tieude,noidung],(err,result_2)=>
            {
               
                   console.log(req.body.user.id);
            }
            )
            }
            );
app.post('/search',(req,res)=>{
    const tukhoa =req.body.user.tukhoa;
                
 const query_2= "INSERT INTO lichsutimkiem (tukhoa, ngay) VALUES (?,'');"
connection.query(query_2,[tukhoa],(err,result_2)=>
                {
                   
                       console.log(req.body.user.tukhoa);
                }
                )
                }
                );  
                app.get('/detailnews',(req,res)=>{
                    const query_3= 'SELECT * from tintucxe ';
                    connection.query(query_3,(err,result_3)=>
                    {
                        if(err)
                            return res.send(err);
                        else
                            return res.json({data:result_3});
                    }
                    )
                    }
                    );
app.listen(4000,console.log('product is connect'));