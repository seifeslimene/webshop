import Image from 'next/image'

import { Icons, Services, LogoH, ResponsiveImage } from 'components'
import { siteTitle } from '@/utils'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-4 mt-8 border-t border-gray-200 bg-gray-50">
      <div className="container px-7 space-y-8 mx-auto ">
        {/* Logo & scroll to top */}
        <div className="flex justify-between">
          <div>
            <LogoH className="w-32 h-10 mb-6" />
            <div className="flex flex-col gap-y-2 lg:flex-row lg:space-x-5">
              <span>We are here to answer your questions 24 hours a day, 7 days a week</span>
            </div>
          </div>
          <div className="min-w-max">
            <button
              type="button"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center px-3 py-1 border border-gray-300 rounded-md"
            >
              <span className="text-sm ">Back to top</span>
              <Icons.ArrowUp className="text-gray-400 h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Services />
        </div>

        <div className="space-x-8 lg:flex lg:items-center lg:justify-between">
          {/* socials */}
          <div className="flex items-center justify-between">
            <p className="lg:mr-20">More contact information! </p>
            <div className="flex space-x-5">
              <Link target="_blank" href="https://twitter.com/webshop">
                <Icons.Twitter className="w-8 h-8 text-gray-400" />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/webshop/">
                <Icons.Facebook className="w-8 h-8 text-gray-400" />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/webshop/">
                <Icons.Instagram className="w-8 h-8 text-gray-400" />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/channel/webshop">
                <Icons.Youtube className="w-8 h-8 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Newslatter */}
          <div className="flex-1 max-w-lg">
            <form className="flex space-x-3">
              <input placeholder="your email" className="input" type="email" />
              <button
                type="submit"
                className="px-2 text-white bg-gray-200 rounded-md whitespace-nowrap"
              >
                Submit your email
              </button>
            </form>
          </div>
        </div>

        {/* info for seo */}
        <div className="space-y-6 lg:flex lg:justify-between">
          <div className="space-y-3 lg:max-w-2xl">
            <h5 className="font-semibold text-black">
              {siteTitle}, Online store, review, choose and buy online
            </h5>
            <p className="text-justify text-gray-700">
              Safe online shopping requires stores to be able to provide customers with diverse,
              high-quality, reasonably priced products in a short period of time, with return
              guarantees.
              <br />
              Features that online stores have been working on for years and have built up regular
              customers this way
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-3 mt-6 bg-gray-600 space-x-3">
        <p className="text-white">
          <a href="/" target="_blank" className="text-white-400">
            {`Ⓒ 2023-${new Date().getFullYear()}, Webshop, Inc.`}
          </a>
        </p>
      </div>
    </footer>
  )
}
