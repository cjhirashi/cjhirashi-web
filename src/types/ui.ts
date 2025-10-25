// UI component types

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type AlertVariant = 'success' | 'error' | 'warning' | 'info'

export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  external?: boolean
}

export interface BreadcrumbItem {
  label: string
  href?: string
}
