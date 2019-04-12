const e=require('express');
const bookdata=require('../model/Bookdata');
const booksRouter=e.Router();



function router(nav){

// var books=[{
//     book:"book1",
//     author:"author1",
//     genre:"aa"},
//     {
//     book:"book2",
//     author:"author2",
//     genre:"tt"},
//     {
//     book:"book3",
//     author:"author3",
//     genre:"rr"
//     }
//     ]
booksRouter.route('/')
.get((req,res)=>{
   
        bookdata.find()
        .then(function(books){


            res.render('books',{nav,title:"library",books});
        })

    });
    
   


booksRouter.route('/:id')
    .get((req,res)=>{
   
    const id=req.params.id;
    bookdata.findOne({_id:id})
        .then(function(book){

       
    
    
    res.render('book',
    {
        nav:[
            {link:'/books',title:'books'},
            {link:'/authors',title:'Authors'}
        ],
        title:"eBOOKS",

     book:books[id]
    })
        })
});

return booksRouter;
}
module.exports=router;