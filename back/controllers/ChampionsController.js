import { PrismaClient } from "@prisma/client"

const prisma =  new PrismaClient()

const getChampions = (req, res) => {
    let idChampion = Number(req.params.id)

    prisma.champions.findUnique({
        where: {
            id: idChampion,
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
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
    let idChampion = Number(req.params.id)
    let champion = req.body

    prisma.champions.update({
        where: {
            id: idChampion
        }, 
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

const deleteChampions = (req, res) => {
    let idChampion = Number(req.params.id)

    prisma.champions.delete({
        where: {
            id: idChampion
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

export { getChampions, getAllChampions, createChampions, updateChampions, deleteChampions }