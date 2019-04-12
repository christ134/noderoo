const e=require('express');
const c=require('chalk');
const p=require('path');

var d=e();

const nav=[
    {link:'/books',title:'books'},
    {link:'/admin',title:'admin'}
];

const booksRouter=require('./src/routes/bookroutes')(nav);
const adminRouter=require('./src/routes/adminroutes')(nav);
d.use('/books',booksRouter);
d.use('/admin',adminRouter);

d.set('views','./src/views');
d.set('view engine','ejs');



d.use(e.static(p.join(__dirname,"/")));


d.get('/',(req,res)=>{
res.render('index',{
                   nav,
                    title:"library"



                    });
                    });         


d.listen(5622,()=>{
    console.log('listening to port'+ c.green('5622'));
})





