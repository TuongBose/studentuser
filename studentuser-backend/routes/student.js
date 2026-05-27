import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello from student route');
});
router.get('/:id',(req,res)=>{
    res.send('Get student by ID');
});
router.post('/insert',(req,res)=>{
    res.send('insert student');
});

export default router;