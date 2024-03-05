/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import Style from './Newsletter.module.scss'

import { NewsletterFormSchema } from './Newsletter.schema'

import { Phone } from '@/utils/hooks/useMask'
import { postNewsletter } from '@/utils/server/requests'
import { zodResolver as ResolverZod } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Model } from '..'

export type INewsletterForm = z.infer<typeof NewsletterFormSchema>

interface INewsletterProps {
  isBg?: boolean
  isHorrizontal?: boolean
}

const Newsletter = ({ isBg, isHorrizontal }: INewsletterProps) => {
  const [loaging, setLoaging] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const [dataEvent, setdataEvent] = useState<INewsletterForm>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<INewsletterForm>({
    resolver: ResolverZod(NewsletterFormSchema)
  })

  const onSubmit = async (data: INewsletterForm) => {
    setModal(true)
    setdataEvent(data)
  }
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setCheckbox(target.checked)
  }
  async function handleClick() {
    if (!dataEvent) return
    if (!checkbox) return
    setLoaging(true)
    try {
      const res = await postNewsletter(
        dataEvent.n_name,
        dataEvent.n_email,
        dataEvent.n_phone
      )
      console.log(res.data.done)
      reset()
    } catch (error) {
      console.error(error)
    } finally {
      setLoaging(false)
    }
  }
  return (
    <>
      <section
        className={`${Style.newsletter} ${isBg ? Style.newsletterBg : ''}`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${Style.gridNewsletter} ${isHorrizontal ? Style.gridNewsletterHorrizontal : ''}`}
        >
          <div className={Style.text}>
            Preencha seus dados e fique por dentro das nossas novidades, ações
            promocionais dos filmes e descontos exclusivos!
          </div>
          <div className={Style.inputNome}>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Nome"
                id="n_name"
                {...register('n_name')}
              />
              {errors.n_name && (
                <small className="text-error">{errors.n_name.message}</small>
              )}
            </label>
          </div>
          <div className={Style.inputTelefone}>
            <label htmlFor="n_phone">
              <input
                id="n_phone"
                type="text"
                placeholder="Telefone"
                {...register('n_phone')}
                onChange={(e) =>
                  ((e.target as HTMLInputElement).value = Phone(
                    (e.target as HTMLInputElement).value
                  ))
                }
              />
            </label>
          </div>
          <div className={Style.inputEmail}>
            <label htmlFor="n_email">
              <input
                type="email"
                id="n_email"
                placeholder="E-mail"
                {...register('n_email')}
              />
              <button type="submit">Enviar</button>
            </label>
          </div>
          <div className={Style.icon}>
            <img src="/img/carta.png" alt="" />
          </div>
        </form>
      </section>
      {modal && (
        <Model.Root>
          <Model.Body setOpen={() => setModal(!modal)}>
            <Model.Title>VOCÊ ACEITA OS TEMOS E CONDIÇÕES?</Model.Title>
            <Model.Content>
              <div className={Style.newsletterPopUpTermos}>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    name="termos"
                    id="termos"
                    checked={checkbox}
                    onChange={handleChange}
                  />
                  <p>
                    Li, e aceito as&nbsp;
                    <Link href="">politicas de provacidade</Link> e&nbsp;
                    <Link href="">Termos e consdições</Link>
                  </p>
                </label>
                <div className={Style.newsletterPopUpTermosFlex}>
                  <button onClick={handleClick}>
                    {loaging ? <span>carregando...</span> : 'Enviar'}
                  </button>
                </div>
              </div>
            </Model.Content>
          </Model.Body>
        </Model.Root>
      )}
    </>
  )
}

export default Newsletter
