'use client'

import Link from 'next/link'
import { IoClose } from 'react-icons/io5'

import Style from './Menu.module.scss'

interface NavProps {
  open: boolean
  setOpen?: (value: boolean) => void
}

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
  return (
    <nav className={`${Style.navBar}`}>
      <div className={`${Style.NavArea} ${!open ? Style.open : Style.close}`}>
        <button
          aria-label="Fechar"
          className={Style.navFechar}
          onClick={() => setOpen && setOpen(!open)}
        >
          <IoClose />
        </button>
        <ul>
          <li className={Style.NomeMenu}>
            <span>Menu</span>
          </li>
          <li>
            <Link href={''}>como funciona?</Link>
          </li>
          <li>
            <Link href={''}>quais são as vantagens</Link>
          </li>
          <li>
            <Link href={''}>FAC</Link>
          </li>
          <li>
            <Link href={''}>quero me eternizar</Link>
          </li>
          <li>
            <Link href={''}>Quero saber mais</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
