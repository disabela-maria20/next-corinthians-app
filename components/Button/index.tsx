import Link from 'next/link'

import Style from './Button.module.scss'

interface IButtonProps {
  children: React.ReactNode
  link?: boolean
  href?: string
  bgColor?: boolean
}

const Button: React.FC<IButtonProps> = ({
  href,
  children,
  link = false,
  bgColor = false
}) => {
  const buttonClass = `${Style.btnStyle} ${bgColor ? Style.active : ''}`

  return (
    <>
      {link ? (
        <Link href={href || '#'} className={buttonClass}>
          {children}
        </Link>
      ) : (
        <button className={buttonClass}>{children}</button>
      )}
    </>
  )
}

export default Button
