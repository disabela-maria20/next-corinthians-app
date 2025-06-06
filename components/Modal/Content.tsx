import Style from './Modal.module.scss'

interface IModelContentProps {
  children: React.ReactNode
}

const ModelContent = ({ children }: IModelContentProps) => {
  return <div className={Style.modelContent}>{children}</div>
}

export default ModelContent
