const { authantication } = require("./middlewares/auth");
const { userrouter } = require("./routes/userRouter");
const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { fullBodyCheckRouter } = require("./routes/FullBodyCheckRoute")
const { comboDealsRouter } = require("./routes/ComboDealsRoute")
const { trendingRouter } = require("./routes/TrendingRoute")
const { cerealRouter } = require("./routes/CerealRoute")
const { plantRouter } = require("./routes/PlantBasesRoute")

const { AyurvedaRoute } = require("./routes/AyurvedRoute")
const { SkinRoute } = require("./routes/SkinRoute")
const { DigestRoute } = require("./routes/DigestivecareRoute")
const { HairRoute } = require("./routes/HairRoute")
const { HerbsRoute } = require("./routes/HerbsRoute")
const cartRouter = require("./routes/CartRoute")

require('dotenv').config()


const app = express();
app.use(
    cors({
        origin: "*",
    })

);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
});




app.use("/users", userrouter);
// app.use(authantication);



app.use("/fullBodyCheck", fullBodyCheckRouter)
app.use("/comboDeals", comboDealsRouter)
app.use("/trending", trendingRouter)
app.use("/cereal", cerealRouter)
app.use("/plant", plantRouter)

// Cart 
app.use("/cart", cartRouter)


// ayurveda page-----
app.use("/herbs", HerbsRoute);
app.use("/skin", SkinRoute);
app.use("/digest", DigestRoute);
app.use("/hairs", HairRoute);
app.use("/ayurveda", AyurvedaRoute);
// ayurveda page-----


app.listen(4000, async () => {
    try {
        await connection
        console.log("Connected to database")
    } catch (err) {
        console.log("Problem connecting")
        console.log(err)
    }
    console.log(`Port running`)
})


