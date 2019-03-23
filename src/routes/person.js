let express = require('express');
let router = express.Router();

// QueryString => query property on the request object
// localhost:3000/person?name=siraji&age=30
router.get('/',(req,res) => {
    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`);
    } else{
        res.send('You have requested a person');
    }
    
});

// Paramas => property on the request object
// localhost:3000/person/siraji
router.get('/:name',(req,res) => {
    res.send(`You have requested a person ${req.params.name}`);
});

router.get('/error',(req,res) => {
    throw new Error('This is a forced error.');
})


module.exports = router;