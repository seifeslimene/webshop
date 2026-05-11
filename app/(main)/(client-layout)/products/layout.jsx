import { siteTitle } from '@/utils'

export const metadata = {
  title: `Classification ${siteTitle}`,
}

export default function Layout({ children }) {
  return <>{children}</>
}
