import React, { useState } from 'react'
import { navLinks } from '../constants/index'
import { MenuIcon } from 'lucide-react'
import { XIcon } from 'lucide-react'
import { BriefcaseMedicalIcon } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    const NavItems = () => {
        return (
            <ul className="flex flex-col sm:flex-row gap-6">
                {navLinks.map(({id, name, href}) => (
                    <li key={id}>
                        <a 
                            href={href} 
                            onClick={toggleMenu}
                            className="text-black hover:text-blue-500 text-lg transition-colors"
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-xl'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className="flex justify-between items-center py-5">
                    <a 
                        href="/" 
                        className='text-blue-900 flex items-center gap-2 text-xl transition-colors'
                    >
                        Health Dashboard <span className='text-red-500'> <BriefcaseMedicalIcon/></span> 
                    </a>
                    
                    <button 
                        onClick={toggleMenu} 
                        className='text-black hover:text-blue-500 focus:outline-none sm:hidden'
                        aria-label='Toggle Menu'
                    >
                        <div className='w-6 h-6'>
                            {isOpen ? <XIcon/> : <MenuIcon/>}
                        </div>
                    </button>

                    <nav className='hidden sm:block'>
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`${isOpen ? 'block' : 'hidden'} sm:hidden transition-all duration-300 ease-in-out`}
            >
                <nav className='bg-white px-4 py-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar