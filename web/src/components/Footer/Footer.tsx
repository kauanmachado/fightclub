import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="flex justify-center items-center w-full p-16 bg-gray-900 text-gray-300">
            <div className="flex flex-col flex-1">
            <Image
                    src="/img/logo.png"
                    alt="Logo FightClub"
                    width={200}
                    height={200}
                />
            <span className="mt-3">© 2023 FightClub. Todos os direitos reservados.</span>
            </div>
            <div className="flex flex-col">
                <h4 className="text-2xl font-bold">Site Links</h4>
                <ul className="gap-6">
                <li>
                    <Link href="/" className=" p-4">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/" className=" p-4">
                        Fórum
                    </Link>
                </li>
                <li>
                    <Link href="/" className=" p-4">
                        Treinos e Guias
                    </Link>
                </li>
                <li>
                    <Link href="/" className=" p-4">
                        Buscar Instrutores
                    </Link>
                </li>
                </ul>
            </div>
        </footer>
    )
}