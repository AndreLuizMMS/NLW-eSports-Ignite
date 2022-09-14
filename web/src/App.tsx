import './styles/main.css'
import LogoImg from './assets/logo-nlw-eSports.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={LogoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          {' '}
          duo{' '}
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative  rounded-lg overflow-hidden">
          <img src="/game-1.png " />
          <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white">Game Name</strong> <br />
            <span className="text-zinc-300 text-sm block">X anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png " />
          <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white">Game Name</strong> <br />
            <span className="text-zinc-300 text-sm block">X anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png " />
          <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white">Game Name</strong> <br />
            <span className="text-zinc-300 text-sm block">X anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png " />
          <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white">Game Name</strong> <br />
            <span className="text-zinc-300 text-sm block">X anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png " />
          <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white">Game Name</strong> <br />
            <span className="text-zinc-300 text-sm block">X anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-7.png " />
          <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white">Game Name</strong> <br />
            <span className="text-zinc-300 text-sm block">X anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden ">
        <div className=" bg-[#2A2634] py-8 px-8  self-stretch  flex justify-between">
          <div className="">
            <h1 className="text-white text-2xl font-black">
              Não encontrou seu duo?
            </h1>
            <span className=" text-zinc-400 font-normal ">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-md flex items-center gap-4">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
