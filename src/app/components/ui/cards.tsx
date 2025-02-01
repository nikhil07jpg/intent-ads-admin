import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-4 border ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="pb-2 border-b">{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
}

interface CardContentProps {
  children: ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return <div className="pt-2">{children}</div>
}
