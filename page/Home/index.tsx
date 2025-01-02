'use client'

import Link from 'next/link'
import { useState } from 'react'

import Style from './Home.module.scss'

import { Menu } from '@/components'

const Home = () => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <header className={Style.header}>
      <Menu.Body>
        <Menu.Nav open={open} setOpen={setOpen} />
        <Menu.Mobile>
          <Menu.Burger open={!open} setOpen={() => setOpen(!open)} />
          <Link href="/">
            <img
              src="/img/escudo-time.png"
              alt="logo do time"
              className={Style.logo}
            />
          </Link>
        </Menu.Mobile>
      </Menu.Body>
      <img
        src="/img/logo-memoria-sempre-fiel.png"
        alt="imagem de fundo"
        className={Style.memorial}
      />
    </header>
  )
}

export default Home
