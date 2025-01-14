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
      titulo: 'Pertencimento',
      descricao: 'Faça parte para sempre da história do Corinthians.'
    },
    {
      id: 1,
      titulo: 'Homenagem',
      descricao: 'Celebre a vida daqueles que amamos'
    },
    {
      id: 2,
      titulo: 'Conexão',
      descricao: 'Eternize a história da sua família com o Corinthians.'
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
                O Memorial Sempre Fiel é mais do que um simples memorial. É um
                convite para você celebrar a vida e a história do Corinthians de
                uma forma única. Nele, a paixão pelo futebol se encontra com a
                homenagem aos nossos maiores ídolos. Imagine ter seu nome ao
                lado dos maiores nomes da nossa história, em um espaço sagrado
                dentro da Neo Química Arena. Junte-se a nós e faça parte dessa
                jornada.
              </p>
            </div>
          </div>
          <section id="ComoFunciona">
            <Title brasao>COMO FUNCIONA?</Title>
            <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
              <div>
                <p>
                  No Memorial Sempre Fiel, você pode adquirir um relicário
                  personalizado para guardar as cinzas de seu ente querido no
                  coração do Corinthians, a Neo Química Arena. Este relicário
                  será cuidadosamente colocado na nossa Galeria dos Eternos, um
                  espaço projetado para oferecer tranquilidade e reverência. Ao
                  visitar a Arena, você e sua família poderão encontrar conforto
                  e celebrar a memória de quem ama.
                </p>
                <p>
                  Com a experiência e tradição da Bonavi, especialista em cuidar
                  de momentos especiais, oferecemos um tributo eterno aos nossos
                  torcedores mais apaixonados, garantindo respeito e cuidado em
                  cada detalhe. Juntos, construímos um legado de amor e
                  respeito, onde a paixão pelo futebol se encontra com a paz e o
                  conforto daqueles que amamos.
                </p>
              </div>
              <div>
                <img src="/img/estadio.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className={Style.card} id="Vantagem">
        <div className="container">
          <Title as="h2">QUAIS SÃO AS VANTAGENS?</Title>
          <p className={Style.paragrafo}>
            Perder um ente querido é difícil, mas saber que ele está em um lugar
            tão especial traz muita paz e conforto.
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
      <section className={Style.fac} id="faq">
        <div className="container">
          <h2>FAQ</h2>

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
