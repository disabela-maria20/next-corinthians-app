import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Loading } from '@/components/atoms'
import { getBanner, getHome } from '@/utils/server/requests'

const Home = dynamic(() => import('@/components/templetes/Home'), {
  ssr: false,
  loading: () => <Loading altura={true} />
})

export default async function PageHome() {
  const banner = await getBanner()
  const listaFilmes = await getHome()
  return (
    <Suspense fallback={<Loading altura={true} />}>
      <Home banner={banner.banners} listaFilmes={listaFilmes} />
    </Suspense>
  )
}
