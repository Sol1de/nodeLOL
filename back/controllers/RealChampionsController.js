import { PrismaClient } from "@prisma/client"

//import du fichier json
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const realChampionsData = require("../champions.json");

const prisma =  new PrismaClient()

const getRealChampions = (req, res) => {
    res.json(realChampionsData);
}

const createRealChampions = (req, res) => {
    prisma.champions.createMany({
        data: realChampionsData,
        skipDuplicates: true,
    })
    .then(createdChampions => {
        res.json(createdChampions)
    })
    .catch(error => {
        res.json(error)
    });
};

const deleteRealChampions = (req, res) => {
    const realChampionNames = realChampionsData.map(champion => champion.name);

    prisma.champions.deleteMany({
        where: {
            name: {
                in: realChampionNames,
            },
        },
    })
    .then(deletedChampions => {
        res.json(deletedChampions)
    })
    .catch(error => {
        res.json(error)
    });
};

export { getRealChampions, createRealChampions, deleteRealChampions }