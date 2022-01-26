const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', ({ body }, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.post('/api/workouts', (req, res) => {
    Workout.create().then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err);
    })
})

module.exports = router;