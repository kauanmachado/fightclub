import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "./Navbar"
import userEvent from "@testing-library/user-event"

describe('Navbar component', () => {
    test('Renders all the elements correctly', () => {
        render(<Navbar/>)

        const logo = screen.getByAltText('Logo FightClub')
        expect(logo).toBeInTheDocument()

        const navLinks = screen.getAllByRole('link')
        expect(navLinks).toHaveLength(5)

        const menuButton = screen.getByTestId('toggle-button')
        expect(menuButton).toBeInTheDocument()
    })

    test('Changes styles on scroll', () => {
        render(<Navbar/>)

        const navbar = screen.getByTestId('navbar')
        expect(navbar).not.toHaveClass('bg-gray-700')

        window.scrollY = 100
        fireEvent.scroll(window)
        expect(navbar).toHaveClass('bg-gray-700')
    })

    test('Menu opens/closes on menu button click', () => {
        render(<Navbar/>)

        const menu = screen.queryByTestId('menu')
        expect(menu).not.toBeInTheDocument()

        const menuButton = screen.queryByTestId('toggle-button')
        userEvent.click(menuButton)
        expect(menuButton).toBeInTheDocument()

        const menuCloseButton =  screen.queryAllByTestId('toggle-close')
        userEvent.click(menuCloseButton)
        expect(menu).not.toBeInTheDocument()
    })


})