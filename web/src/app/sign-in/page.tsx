import Input from "@/components/Input"
import { LockKeyhole, Mail } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"

export default function SignIn() {
    return(
        <div className="flex flex-col border border-gray-500 rounded shadow-lg justify-center  gap-4 p-12 w-full md:w-[600px]  mt-16 md:mt-32 mb-12">

            <p className="text-gray-100 text-end">
            Não possuí conta? 
            <Link href="/sign-up" className="ms-2 underline hover:text-orange-700 transition-all">
                Cadastrar-se
            </Link>
            </p>
            
            <h1 className="text-start text-4xl text-white font-bold mb-4">Acessar conta</h1>
            <p className="text-1xl text-gray-100 mb-4">Conecte-se e explore um mundo de possibilidades.</p>
        <form>
        <Input placeholder="Digite seu email" icon={<Mail className="text-gray-400"/>} iconColor="text-gray-100" type="text" label="E-mail"/>
        <Input placeholder="Digite sua senha" icon={<LockKeyhole className="text-gray-400"/>} type="password" label="Senha"/>
        <Link href="" className="text-gray-100 hover:text-gray-200 transition-all mb-4 underline">Esqueci minha senha</Link>
        <Button type="button" size="full" borderColor="--orange-700" bgColor="--orange-700" hoverColor="--orange-800" href="/pages/sign-in">
            Entrar
        </Button>
        <p className="text-gray-100 font-bold text-center my-4">Ou continue com</p>
        <Button type="button" size="full" borderColor="--orange-700" bgColor="#ffff" hoverColor="#ffff" href="/pages/sign-in">
            <FcGoogle size={40}/>
        </Button>
        </form>
        </div>
    )
}