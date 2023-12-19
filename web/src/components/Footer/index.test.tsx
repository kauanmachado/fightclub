import { render, screen } from "@testing-library/react"
import Footer from "."

describe('Footer component', () => {
    test('Renders all the elements correctly', () => {
        render(<Footer/>)

        const logo = screen.getByAltText('Logo FightClub')
        expect(logo).toBeInTheDocument()

        const linkedinIcon = screen.getByTestId('linkedin-icon')
        expect(linkedinIcon).toBeInTheDocument()

        const githubIcon = screen.getByTestId('github-icon')
        expect(githubIcon).toBeInTheDocument()
    })

    test('Navigation links are present and have correct attributes', () => {
        render(<Footer/>)

        const inicio = screen.getByText('Inicio')
        expect(inicio).toBeInTheDocument()
        expect(inicio).toHaveAttribute('href', '/')

        const forum = screen.getByText('Fórum')
        expect(forum).toBeInTheDocument()
        expect(forum).toHaveAttribute('href', '/')

        const treinosGuias = screen.getByText('Treinos e Guias')
        expect(treinosGuias).toBeInTheDocument()
        expect(treinosGuias).toHaveAttribute('href', '/')

        const buscarInstrutores = screen.getByText('Buscar Instrutores')
        expect(buscarInstrutores).toBeInTheDocument()
        expect(buscarInstrutores).toHaveAttribute('href', '/')
    })


})