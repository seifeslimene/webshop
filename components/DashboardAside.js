import Link from 'next/link'

import { Icons, BoxLink, Logout, LogoH } from 'components'

export default function ProfileAside() {
  const profilePaths = [
    {
      name: 'New product',
      Icon: Icons.Plus,
      path: '/admin/products/create',
    },
    {
      name: 'Product Management',
      Icon: Icons.Save,
      path: '/admin/products',
    },
    {
      name: 'Order Management',
      Icon: Icons.Bag,
      path: '/admin/orders',
    },
    {
      name: 'Category Management',
      Icon: Icons.Category,
      path: '/admin/categories',
    },
    {
      name: 'Classification specifications',
      Icon: Icons.Location,
      path: '/admin/details',
    },
    {
      name: 'User Management',
      Icon: Icons.Users,
      path: '/admin/users',
    },
    {
      name: 'Evaluation Management',
      Icon: Icons.Comment,
      path: '/admin/reviews',
    },
    {
      name: 'Slider Management',
      Icon: Icons.Slider,
      path: '/admin/sliders',
    },
    {
      name: 'banner management',
      Icon: Icons.Image,
      path: '/admin/banners',
    },
  ]

  //? Render(s)
  return (
    <aside className="sticky mt-6 lg:border lg:border-gray-200 lg:rounded-md lg:pt-4 min-w-max top-6">
      <Link passHref href="/admin">
        <LogoH className="w-40 h-12 mx-auto" />
      </Link>

      <div className="mt-4">
        {profilePaths.map((item, index) => (
          <BoxLink key={index} path={item.path} name={item.name}>
            <item.Icon className="icon text-black" />
          </BoxLink>
        ))}
        <Logout />
      </div>
    </aside>
  )
}
