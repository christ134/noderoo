const e=require('express');
const adminRouter=e.Router();

const bookdata=require('../model/Bookdata');

function admin(nav){


adminRouter.route('/').get((req,res)=>{
    res.render('admin',
    {
        nav,
        title:"ADMIN DASHBOARD",

    

      });
})


adminRouter.route('/add')
.get((req,res)=>{
    
    var item={
        title : req.param('title'),
        author : req.param('author'),
        genre : req.param('genre')
            }
     var book= new bookdata(item);
    book.save();
        
    res.redirect('/books');
        
})

return adminRouter;
};
module.exports=admin;