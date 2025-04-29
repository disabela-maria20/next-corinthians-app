'use client'
import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'

import Style from './Faq.module.scss'

import faq from './faq.json'

import { Menu, Footer } from '@/components'
import useThema from '@/hook/useThema'

type FAQItem = {
  REFERENCIA: string
  PERGUNTA: string
  RESPOSTA: string
}

type FAQCategory = {
  [key: string]: FAQItem[]
}

const FAQ = () => {
  const [open, setOpen] = useState<boolean>(true)
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  const isDarkMode = useThema()

  const toggleCollapse = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? null : id))
  }

  // Tipar o objeto faq como FAQCategory
  const faqData: FAQCategory = faq

  return (
    <div>
      <Menu.Body>
        <Menu.Nav open={open} setOpen={setOpen} />
        <Menu.Mobile>
          <Menu.Burger open={!open} setOpen={() => setOpen(!open)} />
        </Menu.Mobile>
      </Menu.Body>
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

          {/* Iterar sobre todas as categorias do JSON */}
          {Object.keys(faqData).map((category) => (
            <div key={category}>
              <h2 className={Style.categoryTitle}>{category}</h2>
              <div className={Style.areaFac}>
                {/* Iterar sobre os itens de cada categoria */}
                {faqData[category].map((item) => (
                  <div className={Style.details} key={item.REFERENCIA}>
                    <h3
                      className={Style.summary}
                      onClick={() => toggleCollapse(item.REFERENCIA)}
                    >
                      <span>{item.PERGUNTA}</span>
                      <span className={Style.icon}>
                        {openItemId === item.REFERENCIA ? (
                          <BsDash />
                        ) : (
                          <BsPlus />
                        )}
                      </span>
                    </h3>
                    <div
                      className={`${Style.description} ${openItemId === item.REFERENCIA ? Style.open : ''}`}
                    >
                      {item.RESPOSTA}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Contato /> */}
      <Footer />
    </div>
  )
}

export default FAQ
