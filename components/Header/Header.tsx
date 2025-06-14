import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-black shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-white">
                            ShifaVeda
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {/* <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                        <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-800">About Us</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        <Link href="/cart" className="text-gray-600 hover:text-gray-800">Cart</Link> */}
                        <p>This is our Ayurvedic Website </p>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                        <Link href="/signup" className="text-gray-600 hover:text-gray-800">Signup</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
