import './globals.css'
export default function Home() {
  return (
    <>
      <section className="bg-[url(../../public/img/bg-fighter.jpg)]  w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
        <div className="p-24 ">
          <h1 className={`text-center drop-shadow-2xl uppercase bebasNeue text-4xl md:text-5xl lg:text-7xl text-white font-bold`}>A Busca pela Excelência<br/>Seu Guia no Mundo das Artes Marciais</h1>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-16">
          <div className="text-center rounded-full bg-orange-900 w-[300px] h-[300px] p-16 shadow-xl">
            <h1 className="text-white text-4xl font-bold uppercase">dicas de treino</h1>
          </div>
          

        </div>
      </section>
      </>

      
  )
}
