const proffys = [
    {
        name: "Joao Paulo Autran",
        avatar:"https://avatars3.githubusercontent.com/u/66528086?s=460&u=423575da73790cb2dd0eb04378754ab211d0a276&v=4",
        whatsapp: "8383382173",
        bio: "lorenu udsahd duah udashd uhduashduahdua haudhaus uadhaudduhsa adsadpoqe opoada pok odjaidjqh md,admadjuqdkam dlasdpa",
        subject: "Artes",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Joao P. Autran",
        avatar:"https://avatars3.githubusercontent.com/u/66528086?s=460&u=423575da73790cb2dd0eb04378754ab211d0a276&v=4",
        whatsapp: "8383382173",
        bio: "lorenu udsahd duah udashd uhduashduahdua haudhaus uadhaudduhsa adsadpoqe opoada pok odjaidjqh md,admadjuqdkam dlasdpa",
        subject: "Artes",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Joao Paulo",
        avatar:"https://avatars3.githubusercontent.com/u/66528086?s=460&u=423575da73790cb2dd0eb04378754ab211d0a276&v=4",
        whatsapp: "8383382173",
        bio: "lorenu udsahd duah udashd uhduashduahdua haudhaus uadhaudduhsa adsadpoqe opoada pok odjaidjqh md,admadjuqdkam dlasdpa",
        subject: "Artes",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0;
    if (isNotEmpty) {
        data.subject = getSubject(data.subject);
        
        proffys.push(data);

        return res.redirect("/study");
    }

    return res.render("give-classes.html", { subjects, weekdays });
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

server.use(express.static("public"));

server.get("/", pageLanding);
server.get("/study", pageStudy);
server.get("/give-classes", pageGiveClasses); 

server.listen(5500);