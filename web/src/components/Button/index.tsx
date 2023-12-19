import Link from "next/link";
import styles from "./index.module.css";

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type: 'link' | 'button'
  size?: 'small' | 'medium' | 'large' | 'full'
  bgColor?: string
  borderColor?: string
  hoverColor?: string
  
};

export default function Button({
  children,
  href,
  type,
  size = "medium",
  onClick,
  bgColor = "--transparent",
  borderColor = "--orange-700",
  hoverColor = ""
}: ButtonProps) {

  const dynamicStyles: object = {
    '--backgroundColor': `var(${bgColor})`,
    '--borderColor': `var(${borderColor})`,
    '--hoverColor': `var(${hoverColor})`,
  }

  const buttonSizes = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    full: 'p-6 w-full'
  }

  const buttonSizeClass = buttonSizes[size];

  if(type === "link" && href){
  return (
    <Link 
     className={`transition-all shadow-lg flex gap-3 justify-center items-center text-center ${styles.button} ${buttonSizeClass}`}
     style={dynamicStyles}
     href={href}
     passHref>
        {children}
    </Link>
  )} else if (type === "button"){
    return (
      <button
        className={`transition-all shadow-lg flex gap-3 justify-center items-center text-center ${styles.button} ${buttonSizeClass}`}
        style={dynamicStyles}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    )
  } else {
    console.error("Invalid usage of ButtonLink. Make sure to provide either href for link or onClick for button.");
    return null
  }
}
