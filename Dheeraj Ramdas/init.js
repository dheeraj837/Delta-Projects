const mongoose=require("mongoose");
const chat=require("./models/chat.js");
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

let allchats=[
    {
    from: "dheeraj",
    to: "meghana",
    msg: "lets meet today!",
    created_at: new Date()
    },
    {
        from: "rama",
        to: "sita",
        msg: "lets meet today!",
        created_at: new Date()
    },
    {
        from: "ramesh",
        to: "annapurna",
        msg: "lets meet today!",
        created_at: new Date()
    },
    {
        from: "koti",
        to: "swathi",
        msg: "lets meet today!",
        created_at: new Date()
    },
    {
        from: "venkat",
        to: "tualsi",
        msg: "lets meet today!",
        created_at: new Date()
    },
    {
        from: "lingchary",
        to: "yadhamma",
        msg: "lets meet today!",
        created_at: new Date()
    },
    {
        from: "amar",
        to: "dhana",
        msg: "lets meet today!",
        created_at: new Date()
    },
    {
        from: "satwik",
        to: "vanmayi",
        msg: "lets meet today!",
        created_at: new Date()
    },
];

chat.insertMany(allchats);
