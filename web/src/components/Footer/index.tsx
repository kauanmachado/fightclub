import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="flex flex-col md:flex-row justify-center md:items-center w-full gap-6 p-8 md:p-16 bg-gray-900 text-gray-300">
            <div className="flex flex-col md:flex-1">
            <Image
                    src="/img/logo.png"
                    alt="Logo FightClub"
                    width={200}
                    height={200}
                />
            <span className="mt-3">© 2023 FightClub. Todos os direitos reservados.</span>
            </div>
            <div className="flex flex-col md:flex-1">
                <h4 className="text-2xl font-bold mb-2">Links</h4>
                <ul className="gap-6">
                <li className="mb-2">
                    <Link href="/" className="text-white hover:text-gray-100 transition-all">
                        Inicio
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/" className="text-white hover:text-gray-100 transition-all">
                        Fórum
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/" className="text-white hover:text-gray-100 transition-all">
                        Treinos e Guias
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/" className="text-white hover:text-gray-100 transition-all">
                        Buscar Instrutores
                    </Link>
                </li>
                </ul>
            </div>
            <div className="flex flex-col md:flex-1">
                <h4 className="text-2xl font-bold mb-2">Redes Sociais</h4>
                <ul className="gap-6">
                    <li>
                        <Link href="/">
                            <Linkedin data-testid="linkedin-icon" size={30} className="text-white hover:text-orange-700 transition-all mb-2"/>
                        </Link>
                        <Link href="/">
                            <Github data-testid="github-icon" size={30} className="text-white hover:text-orange-700 transition-all"/> 
                        </Link>
                    </li>
                </ul>
                
            </div>
        </footer>
    )
}