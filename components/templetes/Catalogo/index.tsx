'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

import Style from './Catalogo.module.scss'

import { useFormatarData } from '@/utils/hooks/useFormatarData/formatarData'
import { useGtag } from '@/utils/lib/gtag'
import { IFilmeResponse } from '@/utils/server/types'

interface ICatalogoProps {
  listaFilmes: {
    releases: Array<IFilmeResponse>
    streaming: Array<IFilmeResponse>
  }
}

const Catalogo: React.FC<ICatalogoProps> = ({ listaFilmes }) => {
  const [filtroGenero, setFiltroGenero] = useState<string>('')
  const [filtroAno, setFiltroAno] = useState<string>('')
  const [pesquisa, setPesquisa] = useState<string>('')
  const [filtroAlfabeto, setFiltroAlfabeto] = useState<string>('')
  const [filtroPesquisa, setFiltroPesquisa] = useState<IFilmeResponse[]>([])
  const { formatAno } = useFormatarData()

  const { dataLayerMovieSelect, dataLayerMovieFilter } = useGtag()

  const handleGeneroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltroAno('')
    setPesquisa('')
    setFiltroAlfabeto('')
    setFiltroPesquisa([])
    const novoGenero = event.target.value
    setFiltroGenero(novoGenero)
  }

  const handleAnoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltroGenero('')
    setPesquisa('')
    setFiltroAlfabeto('')
    setFiltroPesquisa([])
    const novoAno = event.target.value
    setFiltroAno(novoAno)
  }

  const handleFiltroAlfabeto = (letra: string) => {
    setFiltroGenero('')
    setFiltroAno('')
    setPesquisa('')
    setFiltroPesquisa([])
    setFiltroAlfabeto(letra)
  }

  const handlePesquisa = () => {
    setFiltroGenero('')
    setFiltroAno('')
    setFiltroAlfabeto('')
    const filmesPesquisados = listaFilmes.releases.filter(ItemPesquisados)
    setFiltroPesquisa(filmesPesquisados)
  }

  const ItemPesquisados = (filme: IFilmeResponse) => {
    dataLayerMovieFilter(
      filme.title,
      filme.slug,
      filme.originalTitle,
      filme.genre,
      filme.genre_id
    )
    if (pesquisa) {
      return filme.title.toLowerCase().includes(pesquisa.toLowerCase())
    }
    return true
  }

  const filtrarFilmes = (filme: IFilmeResponse) => {
    if (filtroPesquisa.length > 0 && !filtroPesquisa.includes(filme)) {
      return false
    }

    if (filtroGenero && filme.genre !== filtroGenero) {
      return false
    }
    if (filtroAno && formatAno(filme.releasedate) !== parseInt(filtroAno)) {
      return false
    }

    if (filtroAlfabeto === '#' && !isNaN(parseInt(filme.title.charAt(0)))) {
      return true
    }
    if (
      filtroAlfabeto &&
      filme.title.charAt(0).toUpperCase() !== filtroAlfabeto
    ) {
      return false
    }
    if (filtroAno === '2024' && formatAno(filme.releasedate) !== 2024) {
      return false
    }
    return true
  }

  return (
    <section className={Style.catalogo}>
      <div className="container">
        <h1>Filmes</h1>
        <div className={Style.gridCatalogo}>
          <select value={filtroGenero} onChange={handleGeneroChange}>
            <option value="">Gênero</option>
            {Array.from(
              new Set(listaFilmes.releases.map((data) => data.genre))
            ).map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <select value={filtroAno} onChange={handleAnoChange}>
            <option value="">Ano</option>
            {Array.from(
              { length: new Date().getFullYear() - 2023 },
              (_, index) => (
                <option
                  key={index}
                  value={(new Date().getFullYear() - index).toString()}
                >
                  {new Date().getFullYear() - index}
                </option>
              )
            )}
          </select>
          <div className={Style.areaPesquisarCatalogo}>
            <input
              type="text"
              placeholder="Pesquisar nome..."
              value={pesquisa}
              onChange={({ target }) => setPesquisa(target.value)}
            />
            <button onClick={() => handlePesquisa()}>
              <IoSearchSharp />
            </button>
          </div>
        </div>
        <div className={Style.gridFiltroAlfabeto}>
          <button onClick={() => handleFiltroAlfabeto('')}>
            <strong>TUDO</strong>
          </button>
          <button onClick={() => handleFiltroAlfabeto('#')}>#</button>
          {Array.from({ length: 26 }, (_, index) => (
            <button
              key={index}
              onClick={() =>
                handleFiltroAlfabeto(String.fromCharCode(65 + index))
              }
            >
              {String.fromCharCode(65 + index)}
            </button>
          ))}
        </div>
        {(filtroPesquisa.length > 0 ||
          listaFilmes?.releases.filter(filtrarFilmes).length > 0) && (
          <>
            <div className={Style.areaTitleCatalogoFilmeAno}>
              <h2>2024</h2> <span>Até o momento e em ordem de lançamento.</span>
            </div>
            <div className={Style.gridFilmesCatalogo}>
              {(filtroPesquisa.length > 0
                ? filtroPesquisa
                : // eslint-disable-next-line no-unsafe-optional-chaining
                  listaFilmes?.releases.filter(filtrarFilmes)
              ).map((data) => (
                <div key={data.id}>
                  <Link
                    href={`/${data.slug}`}
                    onClick={() =>
                      dataLayerMovieSelect(
                        data.title,
                        data.slug,
                        data.originalTitle,
                        data.genre,
                        data.genre_id
                      )
                    }
                  >
                    <img src={data.cover} alt={data.title} />
                    <h2>{data.title}</h2>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {filtroPesquisa.length === 0 &&
          listaFilmes?.releases.filter(filtrarFilmes).length === 0 && (
            <p className={Style.CatalogoVazio}>Nenhum filme encontrado</p>
          )}
      </div>
    </section>
  )
}

export default Catalogo
