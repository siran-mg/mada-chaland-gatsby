import React from "react"
import Link from "./link"

function Header() {
  return (
    <div className="flex justify-between items-center px-56 h-24 text-onPrimary w-full bg-primary">
      <div className="font-bold text-xl">
        <Link href="/" className={"text-onPrimary"}>
          Mada Chaland
        </Link>
      </div>
      <ul className="flex gap-8 justify-center items-center">
        <Link href="/" className="text-onPrimary">
          <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
            Accueil
          </li>
        </Link>
        <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
          A propos
        </li>
        <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
          Circuits
        </li>
        <Link href="/partners" className="text-onPrimary">
          <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
            Partenaires
          </li>
        </Link>
      </ul>

      <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
        Contactez nous
      </button>
    </div>
  )
}

export default Header
