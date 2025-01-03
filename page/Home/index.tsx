'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'

import Style from './Home.module.scss'

import { Button, Footer, Menu, Range, Slide, Title } from '@/components'

const Home = () => {
  const [open, setOpen] = useState<boolean>(true)
  const [openItemId, setOpenItemId] = useState<number | null>(null)

  const toggleCollapse = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id))
  }

  const vantagens: {
    id: number
    titulo: string
    descricao: string
  }[] = [
    {
      id: 0,
      titulo: 'Vantagem 1',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae error voluptates non, quo neque vel mollitia ducimus asperiores veritatis, impedit soluta. Beatae pariatur quis odit voluptatum, porro doloribus mollitia.'
    },
    {
      id: 1,
      titulo: 'Vantagem 2',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae error voluptates non, quo neque vel mollitia ducimus asperiores veritatis, impedit soluta. Beatae pariatur quis odit voluptatum, porro doloribus mollitia.'
    },
    {
      id: 2,
      titulo: 'Vantagem 3',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae error voluptates non, quo neque vel mollitia ducimus asperiores veritatis, impedit soluta. Beatae pariatur quis odit voluptatum, porro doloribus mollitia.'
    }
  ]

  const fac = [
    {
      id: 1,
      title: 'Seção 1',
      content:
        'Este é o conteúdo da Seção 1. Pode ser qualquer texto ou elemento React.'
    },
    {
      id: 2,
      title: 'Seção 2',
      content: 'Este é o conteúdo da Seção 2. Adicione mais informações aqui.'
    },
    {
      id: 3,
      title: 'Seção 3',
      content:
        'Este é o conteúdo da Seção 3. Você pode personalizar como quiser!'
    }
  ]
  return (
    <>
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
      <div className={Style.banner}>
        <img src="/img/foto.png" alt="banner" />
      </div>
      <Range />
      <main className={Style.mainInfo}>
        <div className="container">
          <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
            <div>
              <img src="/img/estadio.png" alt="" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
          <Title brasao>COMO FUNCIONA?</Title>
          <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>
            <div>
              <img src="/img/estadio.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <section className={Style.card}>
        <div className="container">
          <Title as="h2">QUAIS SÃO AS VANTAGENS?</Title>
          <p className={Style.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mattis enim sit amet turpis sagittis, a dictum sapien hendrerit. In
            hac habitasse platea dictumst. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Sed
            egestas aliquet consequat.
          </p>

          <div className="grid grid-3-md gap-10">
            {vantagens.map((vantagem) => (
              <div className={Style.item} key={vantagem.id}>
                <h3>{vantagem.titulo}</h3>
                <div className={Style.divisor}></div>
                <p>{vantagem.descricao}</p>
              </div>
            ))}
          </div>
          <div className={Style.areaButton}>
            <Button link>Quero garantir o meu</Button>
          </div>
        </div>
        <Slide></Slide>
      </section>
      <section className={Style.fac}>
        <div className="container">
          <h2>FAC</h2>

          <div className={Style.areaFac}>
            {fac.map((item) => (
              <div className={Style.details} key={item.id}>
                <h3
                  className={Style.summary}
                  onClick={() => toggleCollapse(item.id)}
                >
                  <span>{item.title}</span>
                  <span className={Style.icon}>
                    {openItemId === item.id ? <BsDash /> : <BsPlus />}
                  </span>
                </h3>
                <div
                  className={`${Style.description} ${openItemId === item.id ? Style.open : ''}`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
