import Style from './Menu.module.scss'

interface IModelBodyProps {
  children: React.ReactNode
}
const Body = ({ children }: IModelBodyProps) => {
  return (
    <div className={Style.bgNav}>
      <div className={Style.container}>
        <div className={Style.flexDeskTop}>{children}</div>
      </div>
    </div>
  )
}

export default Body
