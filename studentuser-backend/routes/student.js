import express from 'express';
const router = express.Router();
import {
    studentController
} from '../controllers/index.js';

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.insertStudent);
router.post('/generateFakeStudents', studentController.generateFakeStudents);
router.patch('/', studentController.updateStudentById);
router.delete('/:id', studentController.deleteStudentById);

export default router;