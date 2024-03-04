import Home from '@/components/templetes/Home'
import { getHome } from '@/utils/server/requests'

export default async function PageHome() {
  const banner = [
    {
      bannerMobile: '/img/poster/Banner_mobile_1180x1025.jpg',
      bannerDesktop: '/img/poster/Banner_desktop_1440x540.jpg',
      slug: '/'
    }
  ]
  const listaFilmes = await getHome()
  return <Home banner={banner} listaFilmes={listaFilmes} />
}
