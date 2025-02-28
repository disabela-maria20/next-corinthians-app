import Style from './Button.module.scss'

interface IButtonProps {
  children: React.ReactNode
  link?: boolean
  bgColor?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  link = false,
  bgColor = false,
  ...props
}) => {
  const buttonClass = `${Style.btnStyle} ${bgColor ? Style.active : ''}`

  return (
    <>
      {link ? (
        <a
          href="https://aztst-memorial-api-master.veloxtix.com/"
          {...props}
          className={buttonClass}
        >
          {children}
        </a>
      ) : (
        <button {...props} className={buttonClass}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
