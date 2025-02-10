import Style from './Footer.module.scss'

import Button from '../Button'

import useThema from '@/hook/useThema'
const Footer = () => {
  const isDarkMode = useThema()
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={`${Style.gridFooter} grid grid-3-md gap-32`}>
          <img
            src={`${isDarkMode ? '/img/LOGO-horizontal-escuro.png' : '/img/LOGO-horizontal.png'}`}
            alt="memorial"
          />
          <Button>Quero me Eternizar</Button>
          <Button>Quero saber mais</Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
