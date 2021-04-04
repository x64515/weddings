const db = require('./connection');
const { User, Meal, Wedding, Attendant } = require('../models');

db.once('open', async () => {
    await Meal.deleteMany({}, (err)=>{
        if(err){
            console.log(err);
        }
    });

    const meals = await Meal.insertMany([
        { name: 'Chicken' },
        { name: 'Steak' },
        { name: 'Seafood' },
        { name: 'Vegan' },
        { name: 'Kosher/Halal' }
    ]);

    console.log('meals seeded');

    await Attendant.deleteMany({}, (err)=>{
        if(err){
            console.log(err);
        }
    });

    const guestList = await Attendant.insertMany([
        {
            firstName: 'Rick',
            lastName: 'James',
            foodChoice: 'Chicken',
            rsvp: 1
        },
        {
            firstName: 'Loretta',
            lastName: 'Lynn',
            foodChoice: 'Steak',
            rsvp: 1
        },
        {
            firstName: 'Jonny',
            lastName: 'Cash',
            foodChoice: "Seafood",
            rsvp: 0
        },
        {
            firstName: 'Elvis',
            lastName: 'Presley',
            foodChoice: 'Vegan',
            rsvp: 1
        },
        {
            firstName: 'Teddy',
            lastName: 'Roosevelt',
            foodChoice: 'Kosher/Halal',
            rsvp: 1
        },
        {
            firstName: 'Tom',
            lastName: 'Brady',
            foodChoice: 'Vegan',
            rsvp: 1
        }
    ]);

    console.log('attendants seeded');

    await Wedding.deleteMany({}, (err)=>{
        if(err){
            console.log(err);
        }
    });

    const weddings = await Wedding.insertMany([
    {
        weddingDate: '4/15/2021',
        bride: 'Beyonce',
        groom: 'Justin Bieber',
        attendants: guestList,
        location: 'Mara Lago',
        meals: meals
    }]);

    console.log('wedding seeded');

    await User.deleteMany({}, (err)=>{
        if(err){
            console.log(err);
        }
    });

    await User.create({
        firstName: 'Beyonce',
        lastName: 'Knowles',
        email: 'beyonce@fabulous.com',
        password: 'password12345',
        wedding: weddings
    });

    console.log('users seeded');

    process.exit();
});
