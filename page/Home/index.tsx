'use client'

import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
      title: 'Como faço para colocar em ente querido que já está sepultado',
      content:
        'As pessoas que foram sepultadas, podem depois de 03 anos serem exumadas. Neste caso o familiar deve solicitar no cemitério a exumação, solicitar uma ata de exumação, juntar uma certidão de óbito e entrar em contato conosco. Providenciaremos por nossa contra a cremação dos restos mortais e agendaremos a data para que as cinzas sejam colocadas no Memorial Eternamente Fiel.'
    },
    {
      id: 2,
      title: 'Quando será entregue para uso o Memorial Sempre Fiel ',
      content: 'A previsão de entrega da obra é 22 de outubro próximo'
    },
    {
      id: 3,
      title: 'Qual o valor do direito de uso do espaço.',
      content:
        'O valor de direito de uso é inferior ao de muitos cemitérios e dependerá do setor escolhido.'
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
        <LazyLoadImage effect="blur" src="/img/memorial.webp" alt="banner" />
        <div className={Style.logo}>
          <img loading="eager" src="/img/LOGO.webp" alt="logo" />
          <h1>
            Um lugar para eternizar <br />
            as lembranças e o amor.
          </h1>
        </div>
      </div>
      <Range />

      <main className={Style.mainInfo}>
        <div className="container">
          <h2 className={Style.titulo}>
            A exemplo de grandes times da Europa,
            <strong>
              &nbsp;o Corinthians é o <span>primeiro time do Brasil</span> que
              abre um espaço para homenagear os torcedores que já se adiantaram
              de nós,
            </strong>
            &nbsp;reforçando assim a ideia de respeito, pertencimento e união da
            Família Corinthiana.
          </h2>
          <div className={`${Style.gridInfosobre} gap-32`}>
            <figure>
              <LazyLoadImage
                effect="blur"
                loading="eager"
                src="/img/campo.webp"
                alt=""
              />
              <figcaption>Créditos: Rodrigo Coca</figcaption>
            </figure>
            <div>
              <Title as="h2">
                “É DEVER DA VIDA HERDADA HONRAR SEUS ANCESTRAIS”
              </Title>
              <p>
                O MEMORIAL ETERNAMENTE FIEL é uma galeria de relicários, um
                local único destinado a homenagear a história de vida daqueles
                que se adiantaram de nós, mas que continuam vivos em nossos
                pensamentos, em nossos corações.
              </p>
              <p>
                Localizada no coração da Neo Química Arena, o Memorial
                Eternamente Fiel irá guardar não apenas histórias, mas também
                preservar sentimentos. Em um espaço projetado para criar uma
                áurea de sagrado, emoção, respeito e eternidade. Uma prova de
                amor eterno.
              </p>
              <p>
                Aqueles que se adiantaram de nós estarão sempre vivos ao serem
                lembrados e homenageados.
              </p>
            </div>
          </div>
          <section id="ComoFunciona" tabIndex={-1}>
            <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
              <div>
                <Title>COMO FUNCIONA:</Title>
                <p>
                  Após realizar um cadastro, (o número de pessoas que farão
                  parte desta biblioteca de histórias reais é limitado) o
                  Curador do Memorial Eternamente Fiel irá analisar e avaliar o
                  pedido e o relato.
                </p>
                <p>
                  Após a aprovação e seleção do seu pedido, você irá adquirir o
                  direito de uso para guardar em um relicário uma homenagem
                  única, dentro da Neo Química Arena, com as cinzas do seu ente
                  querido.
                </p>
              </div>
              <figure>
                <LazyLoadImage
                  effect="blur"
                  loading="eager"
                  src="/img/area-interna.webp"
                  alt=""
                />
                <figcaption>Créditos: Bruno Teixeira </figcaption>
              </figure>
            </div>
          </section>
          <section id="Relicario" tabIndex={-1}>
            <div className={`${Style.gridInfo} grid grid-2-md gap-32`}>
              <div>
                <Title>O que é um Relicário.</Title>
                <p>
                  Relicário é um artefato onde é guardado o bem mais valioso.
                  Hoje, quando alguém se adianta de nós, seu corpo é cremado ou
                  sepultado em um cemitério, onde também são colocadas suas
                  cinzas. Estamos criando uma nova opção. Um Memorial que é uma
                  Galeria, onde poderão ser colocados relicários com as cinzas
                  dos entes queridos.
                </p>
                <p>
                  Cada relicário terá uma identificação, um QR Code, que quando
                  escaneado trará a história, imagens e até vídeos e áudios
                  (quando disponibilizados pela família) daquela pessoa que ali
                  está sendo homenageada.
                </p>
              </div>
              <figure>
                <LazyLoadImage
                  effect="blur"
                  loading="eager"
                  src="/img/galeria/CTR_09.webp"
                  alt=""
                />
                <figcaption>Créditos: Bruno Teixeira </figcaption>
              </figure>
            </div>
          </section>
          <section id="Garantir" tabIndex={-1}>
            <div className={`${Style.gridInfo} grid grid-1-md gap-32`}>
              <div>
                <Title>Segurança e visitação</Title>
                <p>
                  O local contará com um sistema avançado de segurança, com
                  visitação controlada e limitada para terceiros, mas liberada
                  nos horários estabelecidos no regimento interno para
                  familiares cadastrados
                </p>
                <div className={Style.areaButton}>
                  <Button link>SAIBA COMO GARANTIR O SEU</Button>
                </div>
              </div>
            </div>
          </section>
          <Slide></Slide>
        </div>
      </main>
      {/* <section className={Style.card} id="Vantagem" tabIndex={-1}>
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
        tabIndex={-1}
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
