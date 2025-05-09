import Style from './Title.module.scss'

interface ITitleProps {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  brasao?: boolean
}

const Title: React.FC<ITitleProps> = ({
  as: Tag = 'h1',
  children,
  brasao = false,
  ...props
}) => {
  return (
    <>
      {brasao && (
        <div className={Style.tag}>
          <Tag {...props} className={Style.tagStyle}>
            {children}
          </Tag>
        </div>
      )}
      {!brasao && <Tag className={Style.tagStyle}>{children}</Tag>}
    </>
  )
}

export default Title
