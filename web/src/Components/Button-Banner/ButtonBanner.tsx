import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function ButtonBanner() {
  return (
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

        <Dialog.Trigger className="py-3 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-md flex items-center gap-4">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}
