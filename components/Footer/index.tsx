import { LazyLoadImage } from 'react-lazy-load-image-component'

import Style from './Footer.module.scss'

import Button from '../Button'

//import useThema from '@/hook/useThema'
const Footer = () => {
  //const isDarkMode = useThema(true)
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={`${Style.gridFooter} grid grid-2-md gap-32`}>
          <LazyLoadImage
            effect="blur"
            src={'/img/LOGO-horizontal.webp'}
            alt="memorial"
          />
          <Button link>Quero me Eternizar</Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
