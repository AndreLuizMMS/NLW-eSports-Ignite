import LogoImg from '../../assets/logo-nlw-eSports.svg'


export function Head() {
  return (
    <>
      <img src={LogoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          {' '}
          duo{' '}
        </span>
        está aqui.
      </h1>
    </>
  )
}
