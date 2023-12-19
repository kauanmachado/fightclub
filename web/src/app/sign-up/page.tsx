import Input from "@/components/Input"
import MediaPicker from "@/components/MediaPicker"
import Button from "@/components/Button"
import { Camera, LockKeyhole, Mail, User } from "lucide-react"
import Link from "next/link"

export default function SignUp() {
    return (
        <div className="flex flex-col border border-gray-500 rounded shadow-lg justify-center  gap-4 p-12 w-full md:w-[600px]  mt-16 md:mt-32 mb-12">
            <p className="text-gray-100 text-end">
            Já possuí conta? 
            <Link href="/sign-in" className="ms-2 underline hover:text-orange-700 transition-all">
                Entrar
            </Link>
            </p>
            <h1 className="text-start text-4xl text-white font-bold mb-4">Criar conta</h1>
            <form>
                <Input placeholder="Digite seu nome completo" icon={<User className="text-gray-400" />} iconColor="text-gray-100" type="text" label="Nome completo" />
                <Input placeholder="Digite seu email" icon={<Mail className="text-gray-400" />} iconColor="text-gray-100" type="email" label="E-mail" />
                <Input placeholder="Digite sua senha" icon={<LockKeyhole className="text-gray-400" />} type="password" label="Senha" />
                <Input placeholder="Digite sua senha novamente" icon={<LockKeyhole className="text-gray-400" />} type="password" label="Repetir senha" />
                <label
                    htmlFor="media"
                    className="flex cursor-pointer justify-center items-center gap-1.5 text-1xl text-gray-200 hover:text-gray-100 mt-6"
                >
                    <Camera size={30} />
                    Escolher foto de perfil
                </label>
                <MediaPicker />
                <Button type="button" size="full" borderColor="--orange-700" bgColor="--orange-700" hoverColor="--orange-800" href="/pages/sign-in">
                    Cadastrar
                </Button>
            </form>
        </div>
    )
}