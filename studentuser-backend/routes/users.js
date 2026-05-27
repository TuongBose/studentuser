import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello from Users route');
});
router.post('/login',(req,res)=>{
    res.send('Login route');
});
router.post('/register',(req,res)=>{
    res.send('Register route');
});

export default router;