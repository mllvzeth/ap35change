import { cn } from "@/lib/utils"

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Navigation({ className, children, ...props }: NavigationProps) {
  return (
    <nav 
      className={cn(
        "flex flex-col gap-4 md:flex-row md:gap-[var(--space-16)]",
        className
      )} 
      {...props}
    >
      {children}
    </nav>
  )
}