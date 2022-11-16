/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a className="ml-3 text-xl cursor-pointer">
                        Home
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white cursor-pointer">
                        Projects
                    </a>
                    <a className="mr-5 hover:text-white cursor-pointer">
                        Resume
                    </a>
                    <a className="mr-5 hover:text-white cursor-pointer">
                        Blog
                    </a>
                    <a className="mr-5 hover:text-white cursor-pointer">
                        About
                    </a>
                </nav>
            
            </div>
        </header>
    );
}

