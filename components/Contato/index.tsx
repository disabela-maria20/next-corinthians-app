'use client'
import { useForm, SubmitHandler } from 'react-hook-form'

import Style from './Contato.module.scss'

import Title from '../Title'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Definindo o schema de validação com Zod
const schema = z.object({
  nome: z
    .string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
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

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    alert('Formulário enviado com sucesso!')
  }

  return (
    <section className={Style.formContato}>
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
              <input type="tel" {...register('telefone')} />
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
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contato
