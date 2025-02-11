'use client'

import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'

import Style from './Home.module.scss'

import { Button, Footer, Menu, Range, Slide, Title } from '@/components'
import useThema from '@/hook/useThema'

const Home = () => {
  const [open, setOpen] = useState<boolean>(true)
  const [openItemId, setOpenItemId] = useState<number | null>(null)

  const toggleCollapse = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id))
  }
  const isDarkMode = useThema()
  // const vantagens: {
  //   id: number
  //   titulo: string
  //   descricao: string
  // }[] = [
  //   {
  //     id: 0,
  //     titulo: 'Pertencimento',
  //     descricao: 'Faça parte para sempre da história do Corinthians.'
  //   },
  //   {
  //     id: 1,
  //     titulo: 'Homenagem',
  //     descricao: 'Celebre a vida daqueles que amamos'
  //   },
  //   {
  //     id: 2,
  //     titulo: 'Conexão',
  //     descricao: 'Eternize a história da sua família com o Corinthians.'
  //   }
  // ]

  const fac = [
    {
      id: 1,
      title: 'Como faço para colocar em ente querido que já esta sepultado',
      content:
        'As pessoas que foram sepultadas, podem depois de 03 anos serem exumadas. Neste caso o familiar deve solicitar no cemitério a exumação, solicitar uma ata de exumação, juntar uma certidão de óbito e entrar em contato conosco. Providenciaremos por nossa contra a cremação dos restos mortais e agendaremos a data para que as cinzas sejam colocadas no Memorial Sempre Fiel.'
    },
    {
      id: 2,
      title: ' Quando será entregue para uso o Memorial Sempre Fiel ',
      content: 'A previsão de entrega da obra é 22 de outubro próximo.'
    },
    {
      id: 3,
      title: 'Qual o valor do direito de uso do espaço.',
      content:
        'O valor de direito de uso é inferior ao de muitos cemitérios e depederá do setor escolhido.'
    },
    {
      id: 4,
      title: 'Quantas pessoas posso colocar no espaço',
      content:
        'Tantas quantas a dimensão estabelecida permita, vai depender no modelo de relicário escolhido.'
    },
    {
      id: 5,
      title: 'Como consigo me cadastrar para ter o direito de uso',
      content: 'Acesse no final deste site a aba “quero me eternizar”'
    }
  ]

  return (
    <>
      <header
        className={Style.header}
        style={{
          backgroundImage: `url(${isDarkMode ? '/img/bg-dark.webp' : '/img/bg-claro.webp'})`
        }}
      >
        <Menu.Body>
          <Menu.Nav open={open} setOpen={setOpen} />
          <Menu.Mobile>
            <Menu.Burger open={!open} setOpen={() => setOpen(!open)} />
          </Menu.Mobile>
        </Menu.Body>
      </header>
      <div className={Style.banner}>
        <img src="/img/memorial.webp" alt="banner" />
        <div className={Style.logo}>
          <img src="/img/LOGO.webp" alt="logo" />
        </div>
      </div>
      <Range />
      <main className={Style.mainInfo}>
        <div className="container">
          <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
            <figcaption>
              <img src="/img/campo.webp" alt="" />
              <figcaption>Créditos: Marcelo Masili </figcaption>
            </figcaption>
            <div>
              <Title as="h2">
                “É DEVER DA VIDA HERDADA HONRAR SEUS ANCESTRAIS”
              </Title>
              <p>
                O MEMORIAL SEMPRE FILE é uma galeria de relicários, um local
                único destinado a homenagear a história de vida, daqueles que se
                adiantaram de nós, mas que continuam vivos em nossos
                pensamentos, em nossos corações.
              </p>
              <p>
                Localizada no coração da Arena do Corinthians, o Memorial Sempre
                Fiel irá guardar não apenas histórias, mas preservar
                sentimentos. Em um espaço projetado para criar uma áurea de
                sagrado, emoção, respeito e eternidade. Uma prova de amor
                eterno.
              </p>
              <p>
                Aqueles que se adiantaram de nós, se sentem vivos em nós quando
                são lembrados e homenageados.
              </p>
            </div>
          </div>
          <section id="ComoFunciona">
            <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
              <div>
                <Title>COMO FUNCIONA?</Title>
                <p>
                  Após realizar um cadastro (o número de pessoas que farão parte
                  desta biblioteca de histórias reais é limitado) o Curador do
                  Memorial Sempre Fiel, irá analisar e avaliar o pedido e o
                  relato, sendo ele aprovado e selecionado, você poderá realizar
                  uma homenagem única, adquirindo o direito de uso para guardar
                  em um relicário, dentro da arena Corinthians, as cinzas do seu
                  ente querido
                </p>
              </div>
              <figure>
                <img src="/img/area-interna.webp" alt="" />
                <figcaption>Créditos: Bruno Teixeira </figcaption>
              </figure>
            </div>
          </section>
          <section id="Relicario">
            <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
              <div>
                <Title>O que é um Relicário.</Title>
                <p>
                  ARelicário é um artefato onde é guardado o bem mais valioso.
                  Hoje quando alguém se adianta de nós seu corpo é cremado ou
                  sepultado em um cemitério, onde também são colocadas suas
                  cinzas. Estamos criando uma nova opção. Um Memorial que é uma
                  Galeria, onde poderão ser colocados relicários com as cinzas
                  dos entes queridos.
                </p>
                <p>
                  Cada relicário terá uma identificação, um qrcod, que quando
                  escaneado trará a história, imagens e até vídeos e áudios
                  (quando disponibilizados pela familia) daquela pessoa que ali
                  está sendo homenageada por alguém que amou.
                </p>
              </div>
              <figure>
                <img src="/img/galeria/CTR_09.webp" alt="" />
                <figcaption>Créditos: Bruno Teixeira </figcaption>
              </figure>
            </div>
          </section>
          <section id="Garantir">
            <div className={`${Style.gridInfo} grid grid-1-md gap-32`}>
              <div>
                <Title>Segurança e visitação</Title>
                <p>
                  O local contará com um sistema avançado de segurança, a
                  visitação será controlada e limitada para terceiros, mas
                  liberada nos horários estabelecidos no regimento interno para
                  familiares cadastrados.
                </p>
                <div className={Style.areaButton}>
                  <Button link>Quero garantir o meu</Button>
                </div>
              </div>
            </div>
          </section>
          <Slide></Slide>
        </div>
      </main>
      {/* <section className={Style.card} id="Vantagem">
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
      </section> */}
      <section
        className={Style.fac}
        id="faq"
        style={{
          backgroundImage: `url(${isDarkMode ? '/img/bg-yellow.webp' : '/img/pontilhado.webp'})`
        }}
      >
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
