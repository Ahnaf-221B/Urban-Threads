'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'


export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Mens Outfit
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Products
            </Link>
            
          
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard/add-product" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Add Product
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}