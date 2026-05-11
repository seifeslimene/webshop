'use client'

import { FavoritesListEmpty, PageContainer, ProfileLayout } from 'components'
import { useTitle } from '@/hooks'

const Lists = () => {
  useTitle('My Collection')
  //? Render(s)
  return (
    <main>
      <PageContainer title="My Collection">
        <section className="py-20">
          <FavoritesListEmpty className="mx-auto h-52 w-52" />
          <p className="text-center">Your favorites list is empty</p>
          <span className="block my-3 text-base text-center text-amber-500">(coming soon)</span>
        </section>
      </PageContainer>
    </main>
  )
}

export default Lists
