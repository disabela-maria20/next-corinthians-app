export const MESES: string[] = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

export const SEMANA: string[] = [
  'dom',
  'seg',
  'ter',
  'qua',
  'qui',
  'sex',
  'sab'
]

export const useFormatarData = () => {
  const formatarData = (data: string): string => {
    const partesData = data.split('-')
    const dia = partesData[2]
    const mes = MESES[parseInt(partesData[1], 10) - 1]
    const ano = partesData[0]

    return `${dia} de ${mes} de ${ano}`
  }

  const formatDia = (text: string) => {
    const data = new Date(text)
    return data.getDate() + 1
  }

  const formatMes = (text: string) => {
    const data = new Date(text)
    const mes = data.getMonth()

    return MESES[mes]
  }

  const formatDiaDaSemana = (text: string) => {
    const data = new Date(text)
    const mes = data.getDay()

    return SEMANA[mes]
  }

  return {
    formatarData,
    formatDia,
    formatMes,
    formatDiaDaSemana
  }
}
