import Link from "next/link"

type ButtonLinkProps = {
    children: React.ReactNode,
    href: string,
    borderColor?: string,
    hoverColor?: string,
}

export default function ButtonLink({ 
    children,
    href,
    borderColor = '',
    hoverColor = '' }: ButtonLinkProps) {
        
    return (
        <Link
            href={href}
            passHref
            className={`border border-${borderColor} p-6 transition-all hover:bg-${hoverColor}`}
        >
            {children}
        </Link>
    )
}