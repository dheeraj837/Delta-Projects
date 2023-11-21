const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main().then(()=>
{
    console.log("connection successful!");
})
.catch((err)=>{
    console.log(err);
});

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//index route
app.get("/chats",async (req,res)=>{
    let chats=await chat.find();
    //console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats", (req,res)=>{
    let { from, to ,msg }=req.body;
    let newChat=new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()
    .then((res)=>{ console.log("chat was saved")})
    .catch((err)=>{console.log(err)});
    res.redirect("/chats");
    res.send("working");
});

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let editChat=await chat.findById(id);
    res.render("edit.ejs");
});

app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let {msg :newMsg}=req.body;
    let updatedChat=await chat.findByIdAndUpdate(id,{msg: newMsg},{runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let chatDeleted=await chat.findByIdAndDelete(id);
    console.log(chatDeleted);
    res.redirect("/chats");
});

app.listen(8080,()=>{
    console.log("conn listening");
});
app.get("/",(req,res)=>{
    res.send("conn successful");
});
