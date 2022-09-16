interface GameBannerPorps {
  bannerUrl: string
  title: string
  adsCount: number
}

export function GameBanner(props: GameBannerPorps) {
  return (
    <a href="" className="relative  rounded-lg overflow-hidden">
      <img src={props.bannerUrl} className='w-44'/>
      <div className="w-full pt-16 pb-4 px-4 bg-gameBox-gradient absolute bottom-0 left-0 right-0 rounded-lg">
        <strong className="font-bold text-white">{props.title}</strong> <br />
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  )
}
