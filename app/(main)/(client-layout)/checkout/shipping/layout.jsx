import { siteTitle } from '@/utils'

export const metadata = {
  title: `Payment-${siteTitle}`,
}

export default function Layout({ children }) {
  return <>{children}</>
}
