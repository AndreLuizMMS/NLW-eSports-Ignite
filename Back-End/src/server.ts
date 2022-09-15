import express from "express";
import cors from 'cors';

import { PrismaClient } from '@prisma/client'
import { convertHourToMinute } from './utils/convert-hour-to-minute'
import { convertMinutesToHourString } from "./utils/covert-minute-to-hour-string"

const app = express()
app.use(express.json())
app.use(cors({}))

const prisma = new PrismaClient({
  log: ['query']
})

app.post('/games/:id/ads', async (req, res) => {

  const gameId = req.params.id
  const body: any = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourToMinute(body.hourStart),
      hourEnd: convertHourToMinute(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel

    }
  })

  return res.status(201).json(ad)
})

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true
        }
      }
    }
  })

  return res.json(games)
})

app.get('/games/:id/ads', async (req, res) => {

  const gameId = req.params.id

  const Ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.json(Ads.map((Ad) => {
    return {
      ...Ad,
      weekDays: Ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(Ad.hourStart),
      hourEnd: convertMinutesToHourString(Ad.hourEnd)
    }

  }))
})

app.get('/ads/:id/discord', async (req, res) => {
  const asId = req.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: asId
    }
  })

  return res.json({
    discord: ad.discord,
  })
})


// localhost:3333/ads
app.listen(3333)