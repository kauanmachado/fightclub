import { RiBoxingFill } from "react-icons/ri"
import './globals.css'
import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <section className="bg-[url(../../public/img/bg-fighter.jpg)]  w-full min-h-screen flex flex-col items-center shadow-lg justify-center bg-cover bg-center">
        <div className="p-24 ">
          <h1 className={`text-center drop-shadow-2xl uppercase bebasNeue text-5xl lg:text-7xl text-white font-bold`}>A Busca pela Excelência<br />Seu Guia no Mundo das Artes Marciais</h1>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 lg:p-16">
          <div className="flex flex-col flex-1 justify-center md:items-end p-8 lg:p-16">
            <Image alt="Figther training" src="/img/training.png" width={800} height={800} />
          </div>
          <div className="justify-center  items-start flex flex-col flex-1">
            <h1 className={`text-center md:text-start  drop-shadow-2xl uppercase bebasNeue text-5xl lg:text-7xl text-white font-bold mb-8`}>
              Quer aprender a lutar?<br></br>
              Treinos e Guias gratuitos
            </h1>
            <div className="flex flex-col  justify-center items-center md:items-start md:justify-start">
              <p className="mb-6 text-2xl text-gray-100 flex"><RiBoxingFill className="me-4" />Como iniciar no mundo das lutas</p>
              <p className="mb-6 text-2xl text-gray-100 flex"><RiBoxingFill className="me-4" />Dieta para atletas de luta</p>
              <p className="mb-6 text-2xl text-gray-100 flex"><RiBoxingFill className="me-4" />Musculação para lutadores</p>
              <p className="mb-12 text-2xl text-gray-100 flex"><RiBoxingFill className="me-4" />Como achar a academia ideal</p>
            </div>
            <Button type="link" borderColor="--orange-700" hoverColor="--orange-700" href="/">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>

      
      <section className="bg-[url(../../public/img/test.webp)]  w-full min-h-screen flex flex-col items-center shadow-lg justify-center bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 lg:p-16">

          <div className="">

          </div>
          <div className=" flex flex-col flex-1 justify-center items-center md:items-start md:justify-start">
            <h1 className={`text-center md:text-start  drop-shadow-2xl uppercase bebasNeue text-5xl lg:text-7xl text-white font-bold mb-8`}>

              Se conecte com outros lutadores
              e compartilhe suas expêriencias
            </h1>
            <Button
              type="link"
              href="/"
              bgColor="--orange-700"
              borderColor="--orange-700"
              hoverColor="--orange-600"
            >
              Comece agora
            </Button>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 lg:p-16">
          <div className="flex flex-col flex-1 justify-center md:items-end p-8 lg:p-16">
            <h1 className={`text-center md:text-end  drop-shadow-2xl uppercase bebasNeue text-5xl lg:text-7xl text-white font-bold mb-8`}>
              Acompanhe tudo sobre os eventos
            </h1>
            <Button type="link" borderColor="--orange-700" hoverColor="--orange-700" href="/">
              Ir para eventos
            </Button>
          </div>
          <div className="flex-1">
            <VideoPlayer src="/videos/PoatanVideo.mp4" poster="/img/ufc-event.jpg" />
          </div>
        </div>
      </section>
      



    </>


  )
}
