"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AlignJustify, X } from "lucide-react"
import styles from './Navbar.module.css'
import ButtonLink from "../ButtonLink/ButtonLink"

export default function Navbar() {

    const [scrolling, setScrolling] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled: boolean = window.scrollY > 0
            setScrolling(isScrolled)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    
    return (
        <header
            data-testid="navbar"
            className={`flex p-8 fixed top-0 left-0 right-0 z-50 transition-all 
            ${scrolling ? "bg-gray-700" : ""}`}>
            <div className="flex flex-1 items-center">
                <Image
                    src="/img/logo.png"
                    alt="Logo FightClub"
                    width={200}
                    height={200}
                />
            </div>
            {/* DISPOSIVOS MENORES */}
            {menuOpen && (
                <div data-testid="menu" className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-700 flex items-center justify-center ${styles['animate-fadeIn']}`}>
                    <X size={60} data-testid="toggle-close" onClick={toggleMenu} className="absolute text-orange-700 top-0 right-0 m-4 sm:m-12"/>
                    <ul className="flex flex-col gap-16 text-white p-12 items-center justify-center text-1xl">
                        <li>
                            <Link href="/" className="hover:bg-gray-600 transition-all p-8">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:bg-gray-600 transition-all p-8">
                                Fórum
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:bg-gray-600 transition-all p-8">
                                Treinos e Guias
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:bg-gray-600 transition-all p-8">
                                Buscar Instrutores
                            </Link>
                        </li>
                        
                            <Link
                                href="/"
                                className="border border-orange-700 p-6 hover:bg-orange-700 transition-all"
                            >
                                Acessar minha conta
                            </Link>
                    </ul>
                </div>
            )}
            {/* RESOLUÇÕES MAIORES */}
            <ul className={`p-6 md:flex flex-row gap-2 md:gap-4 text-white lg:text-1xl items-center hidden
             ${menuOpen ? "hidden" : "flex"}`}>
                <li>
                    <Link href="/" className="hover:bg-gray-600 transition-all p-4">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/" className="hover:bg-gray-600 transition-all p-4">
                        Fórum
                    </Link>
                </li>
                <li>
                    <Link href="/" className="hover:bg-gray-600 transition-all p-4">
                        Treinos e Guias
                    </Link>
                </li>
                <li>
                    <Link href="/" className="hover:bg-gray-600 transition-all p-4">
                        Buscar Instrutores
                    </Link>
                </li>
                <li>
                    <ButtonLink borderColor="orange-700" hoverColor="orange-700" href="/">
                        Acessar minha conta
                    </ButtonLink>
                </li>
            </ul>
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                <AlignJustify data-testid="toggle-button" size={40} className="text-orange-700" />
            </div>
        </header>
    )
}