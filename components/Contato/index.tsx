/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputMask from 'react-input-mask'

import Style from './Contato.module.scss'

import { Modal } from '../Modal'
import Title from '../Title'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { z } from 'zod'

// Definindo o schema de validação com Zod
const schema = z.object({
  nome: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(50, 'O nome não pode ter mais de 50 caracteres'),
  email: z.string().email('E-mail inválido').min(1, 'O e-mail é obrigatório'),
  telefone: z
    .string()
    .min(11, 'O telefone deve ter pelo menos 11 dígitos')
    .regex(/^\d+$/, 'O telefone deve conter apenas números'),
  assunto: z
    .string()
    .min(5, 'O assunto deve ter pelo menos 5 caracteres')
    .max(100, 'O assunto não pode ter mais de 100 caracteres'),
  mensagem: z
    .string()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres')
    .max(500, 'A mensagem não pode ter mais de 500 caracteres')
})

type FormData = z.infer<typeof schema>
export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/)

  if (match) {
    let formatted = ''

    if (match[1]) {
      formatted += `(${match[1]}`
    }

    if (match[2]) {
      formatted += `) ${match[2]}`
    }

    if (match[3]) {
      formatted += `-${match[3]}`
    }

    return formatted
  }

  return value
}
const Contato = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<{
    status: number
    data?: any
  } | null>(null)
  // const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const sendEmail = async (data: FormData) => {
    const payload = {
      to: 'memorialsemprefiel@veloxtickets.com',
      from_email: 'noreply.cineidea@cineidea.com',
      from_name: 'Email do Site Corinthias',
      assunto: data.assunto,
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      mensagem: data.mensagem
    }

    try {
      setLoading(true)
      const response = await axios.post(
        'https://api.vibezz.com/api/sendmail',
        payload
      )
      setResponse(response)
      setOpen(true)
    } catch (err) {
      return err
    } finally {
      setLoading(false)
    }
  }
  const onSubmit: SubmitHandler<FormData> = (data) => {
    sendEmail(data)
  }

  return (
    <section id="contato" className={Style.formContato}>
      <div className="container">
        <Title as="h2">Fale Conosco</Title>
        <p>
          Tem mais alguma dúvida ou sugestão? Entre em contato conosco
          preenchendo o formulário abaixo com suas informações e sua mensagem.
          Iremos retornar o mais breve possível!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={Style.form}>
          <div className={Style.formArea}>
            <div className={Style.formGroup}>
              <label>Nome</label>
              <input type="text" {...register('nome')} />
            </div>
            {errors.nome && (
              <span className={Style.error}>{errors.nome.message}</span>
            )}
          </div>
          {/* Campo E-mail */}
          <div className={Style.formArea}>
            <div className={Style.formGroup}>
              <label>E-mail</label>
              <input type="email" {...register('email')} />
            </div>

            {errors.email && (
              <span className={Style.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={Style.formArea}>
            <div className={Style.formGroup}>
              <label>Telefone</label>
              <InputMask
                mask="(99) 99999-9999"
                type="tel"
                {...register('telefone')}
              />
            </div>

            {errors.telefone && (
              <span className={Style.error}>{errors.telefone.message}</span>
            )}
          </div>

          <div className={Style.formArea}>
            <div className={Style.formGroup}>
              <label>Assunto</label>
              <input type="text" {...register('assunto')} />
            </div>
            {errors.assunto && (
              <span className={Style.error}>{errors.assunto.message}</span>
            )}
          </div>

          <div className={Style.formArea}>
            <div className={Style.formGroup}>
              <label>Mensagem:</label>
              <textarea {...register('mensagem')}></textarea>
            </div>
            {errors.mensagem && (
              <span className={Style.error}>{errors.mensagem.message}</span>
            )}
          </div>

          {/* Botão de Envio */}
          <div className={Style.formbtn}>
            <button type="submit">
              {loading && 'Carregando'}
              {!loading && 'enviar'}
            </button>
          </div>
        </form>
        {open && (
          <Modal.Root>
            <Modal.Body
              setOpen={() => setOpen(!open)}
              className={Style.ModaliframeVideoYoutube}
            >
              <Modal.Content>
                <Modal.Title>
                  {response?.status === 200 ? 'Enviado com Sucesso!' : 'Erro'}
                </Modal.Title>
                <p>
                  {response?.status === 200
                    ? 'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato. Obrigado!'
                    : 'Erro no envio! Tente novamente mais tarde.'}
                </p>
              </Modal.Content>
            </Modal.Body>
          </Modal.Root>
        )}
      </div>
    </section>
  )
}

export default Contato
