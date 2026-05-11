import { siteTitle } from '@/utils'

export const metadata = {
  title: `shopping cart-${siteTitle}`,
}

export default function Layout({ children }) {
  return <>{children}</>
}
