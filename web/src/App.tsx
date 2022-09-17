import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './Components/Game-Banner/GameBanner'
import { ButtonBanner } from './Components/Button-Banner/ButtonBanner'

import './styles/main.css'
import { Head } from './Components/Head/Head'
import { CreateAdModal } from './Components/form/CreateAdModal'

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



  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <Head />
      <div className="mt-20 grid grid-cols-6 gap-6 6">
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
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}


export default App;