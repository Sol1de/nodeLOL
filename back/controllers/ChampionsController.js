import { PrismaClient } from "@prisma/client"

const prisma =  new PrismaClient()

const getChampions = (req, res) => {
    //
}

const getAllChampions = (req, res) => {
    prisma.champions.findMany()
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })

}

const createChampions = (req, res) => {
    let champion = req.body
    console.log(champion)

    prisma.champions.create({
        data: {
            name: champion.name,
            type: champion.type
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const updateChampions = (req, res) => {
    //
}

const deleteChampions = (req, res) => {
    //
}

export { getChampions, getAllChampions, createChampions, updateChampions, deleteChampions }