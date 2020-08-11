const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {

    proffyValue = {
        name: "Joao Paulo Autran",
        avatar:"https://avatars3.githubusercontent.com/u/66528086?s=460&u=423575da73790cb2dd0eb04378754ab211d0a276&v=4",
        whatsapp: "8383382173",
        bio: "lorenu udsahd duah udashd uhduashduahdua haudhaus uadhaudduhsa adsadpoqe opoada pok odjaidjqh md,admadjuqdkam dlasdpa",
    }

    classValue = {
        subject: "Artes",
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})
})