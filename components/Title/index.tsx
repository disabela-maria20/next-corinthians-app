import Style from './Title.module.scss'

interface ITitleProps {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  brasao?: boolean
}

const Title: React.FC<ITitleProps> = ({
  as: Tag = 'h1',
  children,
  brasao = false
}) => {
  return (
    <>
      {brasao && (
        <div className={Style.tag}>
          <img src="/img/icon-yellow.webp" alt="" />
          <Tag className={Style.tagStyle}>{children}</Tag>
        </div>
      )}
      {!brasao && <Tag className={Style.tagStyle}>{children}</Tag>}
    </>
  )
}

export default Title
