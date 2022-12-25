const express= require("express")
const router= express.Router()
const customerController= require("../src/controller/customercontroller")
const cardController= require("../src/controller/cardcontroller")

//===================================CUSTOMER API's======================================//
router.post("/customer",customerController.createCustomer)

router.get("/customer",customerController.getCustomer)

router.delete("/customer/:customerId",customerController.deleteCustomer)

//==================================CARD API's==============================================//

router.post("/card",cardController.createCard)

router.get("/card",cardController.getCardDetails)


router.all("/*" ,function(req,res){
return res.status(404).send({msg:"Provide a right path"})
})


module.exports= router