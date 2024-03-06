'use client'

import Link from 'next/link'

const LINK = [
  { nome: 'home', link: '/', menu: false, footer: false },
  {
    nome: 'catálogo',
    link: '/guerra-civil',
    menu: true,
    footer: true
  },
  { nome: 'Em Breve', link: '/em-breve', menu: false, footer: false },
  { nome: 'contato', link: '/contato', menu: false, footer: false },
  { nome: 'Termos de Uso', link: '/termos-de-uso', menu: false, footer: false },
  {
    nome: 'Política de Privacidade',
    link: '/politica-de-privacidade',
    menu: false,
    footer: true
  }
]

type Area = 'menu' | 'footer'

interface NavLinkProps {
  area: Area
  open?: boolean
  setOpen?: (value: boolean) => void
}

const NavLink = ({ area = 'menu', setOpen }: NavLinkProps) => {
  const filteredLinks = LINK.filter((link) => {
    if (area == 'menu') return link.menu
    if (area == 'footer') return link.footer
  })

  return (
    <>
      {filteredLinks.map((link) => (
        <li key={link.link}>
          <Link href={link.link} onClick={() => setOpen}>
            {link.nome}
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavLink
