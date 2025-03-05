'use client'

import Link from 'next/link'
import { IoClose } from 'react-icons/io5'

import Style from './Menu.module.scss'

import Button from '../Button'

interface NavProps {
  open: boolean
  setOpen?: (value: boolean) => void
}

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
  const closeMenu = () => setOpen && setOpen(false)

  return (
    <nav className={`${Style.navBar}`}>
      <div className={`${Style.NavArea} ${!open ? Style.open : Style.close}`}>
        <button
          aria-label="Fechar"
          className={Style.navFechar}
          onClick={closeMenu}
        >
          <IoClose />
        </button>
        <ul>
          <li className={Style.NomeMenu}>
            <span>Menu</span>
          </li>
          <li>
            <Link
              href={'/#ComoFunciona'}
              scroll={true}
              onClick={() => setOpen && setOpen(!false)}
            >
              como funciona?
            </Link>
          </li>
          <li>
            <Link
              href={'/#Relicario'}
              scroll={true}
              onClick={() => setOpen && setOpen(!false)}
            >
              O Relicário
            </Link>
          </li>
          <li>
            <Link
              href={'/#faq'}
              scroll={true}
              onClick={() => setOpen && setOpen(!false)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Button link>quero me eternizar</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
