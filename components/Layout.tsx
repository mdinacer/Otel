import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'

type Props = {
  children: ReactNode
  title: string
  description: string
}

// const variants = {
//   hidden: { opacity: 0 },
//   enter: { opacity: 1, transition: { duration: 1 } },
//   exit: { opacity: 0, transition: { duration: 1 } },
// }
const Layout = ({ children, title, description }: Props): JSX.Element => {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <main className="bg-lightBg dark:bg-darkBg relative h-full  min-h-screen  w-full font-Montserrat ">
        <main className="">{children}</main>
      </main>
    </div>
  )
}

export default Layout
