import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import Search from '../search/search'

function Navigation() {
  return (
    <nav className="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
      <a href="/" className="block text-left">
        <img
          src="https://stitches.hyperyolo.com/images/logo.png"
          className="h-10 sm:h-10 rounded-full"
          alt="logo"
        />
      </a>
      <ul className="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <a
            href="/"
            className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/"
            className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            Pricing
          </a>
        </li>
        <li className="pr-2">
          <a
            href="/"
            className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            FAQs
          </a>
        </li>
        <li className="pl-2 border-l">
          <a
            href="/"
            className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
          >
            Log In
          </a>
        </li>
        <button
          type="button"
          className="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3"
        >
          Sign Up
        </button>
      </ul>
    </nav>
  )
}

export default Navigation
