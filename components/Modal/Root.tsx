import Style from './Modal.module.scss'

interface IModelRoot {
  children: React.ReactNode
}

const ModelRoot = ({ children }: IModelRoot) => {
  return <section className={Style.modelRoot}>{children}</section>
}

export default ModelRoot
