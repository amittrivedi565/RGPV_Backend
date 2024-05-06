const homepageGet = async (req,res)=>
    {
        res.render("../public/views/home")
    }

module.exports = {
    homepageGet
}