import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Search from './search'

export default function Header() {
  return (
    <header className='bg-gray-900 text-white w-full'>
      {/* Container genişliği tamamen kaplar */}
      <div className='w-full'>
        {/* Üst Kısım: Logo + Arama Çubuğu (Büyük Ekran) + Menü */}
        <div className='flex items-center justify-between w-full'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center header-button font-extrabold text-2xl m-1'
          >
            <Image
              src='/icons/logo.svg'
              width={40}
              height={40}
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>

          {/* Arama Çubuğu (Sadece büyük ekranlar) */}
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>

          {/* Menü Bileşeni */}
          <Menu />
        </div>

        {/* Mobil İçin Arama Çubuğu */}
        <div className='md:hidden block py-2 w-full'>
          <Search />
        </div>

        {/* Alt Kısım: "All" Butonu ve Menü Linkleri */}
        <div className='flex items-center justify-between !w-full px-3 mb-[-1px] bg-navy-blue'>
          {/* "All" Butonu */}
          <Button
            variant='ghost'
            className='header-button flex items-center gap-1 text-base [&_svg]:size-6'
          >
            <MenuIcon />
            All
          </Button>

          {/* Menü Linkleri */}
          <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
            {data.headerMenus.map((menu) => (
              <Link
                href={menu.href}
                key={menu.href}
                className='header-button !p-2'
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
