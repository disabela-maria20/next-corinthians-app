import Style from './Footer.module.scss'

import Button from '../Button'
const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={`${Style.gridFooter} grid grid-3-md gap-32`}>
          <img src="/img/logo-memoria-sempre-fiel.png" alt="memorial" />
          <Button>Quero me Eternizar</Button>
          <Button>Quero saber mais</Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
