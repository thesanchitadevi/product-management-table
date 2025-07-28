"use client"

interface IDataTableHeader {
  title?: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

export function DataTableHeader({ title, description, actions, className = "" }: IDataTableHeader) {
  return (
    <main className={`flex items-center justify-between ${className}`}>
      <div>
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      {actions && <div>{actions}</div>}
    </main>
  )
}
