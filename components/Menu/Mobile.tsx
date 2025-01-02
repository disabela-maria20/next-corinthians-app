import Style from './Menu.module.scss'

interface IModelMobleProps {
  children: React.ReactNode
}
const Mobile = ({ children }: IModelMobleProps) => {
  return <div className={Style.flexMobile}>{children}</div>
}

export default Mobile
