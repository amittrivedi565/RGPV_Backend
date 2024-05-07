const homepageGet = async (req,res)=>
    {
        const locals = {
            title : "Welcome To RGPV Vault!"
        }
        res.render("../views/home",{locals})
    }

module.exports = {
    homepageGet
}