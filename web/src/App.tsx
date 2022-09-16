import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './Components/Game-Banner/GameBanner'
import { ButtonBanner } from './Components/Button-Banner/ButtonBanner'
import { GameController } from 'phosphor-react'

import './styles/main.css'
import { Head } from './Components/Head/Head'
import { Input } from './Components/form/Input'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    Ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  console.log(games)

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <Head />
      <div className="grid grid-cols-6 gap-6 6">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.Ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <ButtonBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed " />
          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/70">
            <Dialog.Title className="text-white font-black text-3xl">
              Publique um anúncio
            </Dialog.Title>

            <form action="" className='flex flex-col gap-4'>
              {/* Qual o gamne */}
              <div id="game-select" className=" flex flex-col">
                <label htmlFor="game" className="text-white font-semibold block " >
                  Qual o game?
                </label>
                <Input id="game" type="text" placeholder="Selecione o game que deseja jogar" />
              </div>
              <div className="  flex flex-col">
                <label htmlFor="name" className="text-white font-semibold block  " >
                  Seu nome (ou nickname)
                </label>
                <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
              </div>


              {/* discord , yearsPlaying */}
              <div className=" grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying" className="text-white font-semibold block  ">
                    Joga há quantos anos?
                  </label>
                  <Input id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord" className="text-white font-semibold block  " >
                    Qual seu Discord?
                  </label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>


              {/* weekDays, hourStart/hourEnd */}
              <div className=" flex gap-6">
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays" className='text-white font-semibold block '>Quando costuma jogar?</label>
                  <div className='grid grid-cols-5 gap-2 '>
                    <button title='Domingo'className='w-8 h-8 rounded bg-zinc-900'> D </button>
                    <button title='Segunda'className='w-8 h-8 rounded bg-zinc-900'> S </button>
                    <button title='Terça'  className='w-8 h-8 rounded bg-zinc-900'> T </button>
                    <button title='Quarta' className='w-8 h-8 rounded bg-zinc-900'> Q </button>
                    <button title='Quinta' className='w-8 h-8 rounded bg-zinc-900'> Q </button>
                    <button title='Sexta'  className='w-8 h-8 rounded bg-zinc-900'> S </button>
                    <button title='Sábado' className='w-8 h-8 rounded bg-zinc-900'> S </button>
                  </div>
                </div>

                <div className='flex flex-col gap-2 flex-1' >
                  <label htmlFor="hourStart" className="text-white font-semibold block " >
                    Qual horário do dia?
                  </label>
                  <div className='grid grid-cols-2 gap-2 '>
                    <Input id="hourStart" type="time" placeholder=" De" />
                    <Input id="hourEnd" type="time" placeholder=" Até" />
                  </div>
                </div>
              </div>

              {/* VoiceChannel */}
              <div className=" ">
                <Input type="checkbox" name="Voice Chat" />
                 Costumo me conectar ao chat de voz
              </div>

              {/* Button */}
              <footer className="flex gap-4 justify-end">
                <Dialog.Close className="font-semibold bg-zinc-600 py-3 px-5 rounded-md hover:bg-zinc-700">
                  Cancelar
                </Dialog.Close>
                <button className="font-semibold bg-violet-600 py-3 px-5 rounded-md flex gap-2 hover:bg-violet-700" type="submit" >
                  <GameController size={30} />
                  Encontrar duo
                </button>
              </footer>


            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
