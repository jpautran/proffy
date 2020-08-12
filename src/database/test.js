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
        subject: 1,
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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT  classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to < "1300"
    `)

    console.log(selectedClassesSchedules)
})