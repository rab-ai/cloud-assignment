import { Data, IProductInput } from '@/types'
import { toSlug } from './utils'

const products: IProductInput[] = [
  // 🎵 Vinyls
  {
    name: 'The Beatles - Abbey Road',
    slug: toSlug('The Beatles - Abbey Road'),
    category: 'Vinyls',
    image: [
      '/images/vinyl1-1.jpg',
      '/images/vinyl1-2.jpg',
      '/images/vinyl1-3.jpg',
      '/images/vinyl1-4.jpg',
    ],
    price: 29.99,
    seller: 'Classic Records',
    age: 54, // Vinyl'ler için "Age" gerekli
    rating: 4.8,
    numReviews: 120,
    reviews: [],
    description: 'Remastered edition of the classic Beatles album.',
  },
  {
    name: 'Pink Floyd - The Dark Side of the Moon',
    slug: toSlug('Pink Floyd - The Dark Side of the Moon'),
    category: 'Vinyls',
    image: [
      '/images/vinyl2-1.jpg',
      '/images/vinyl2-2.jpg',
      '/images/vinyl2-3.jpg',
      '/images/vinyl2-4.jpg',
    ],
    price: 34.99,
    seller: 'Rock Legends Store',
    age: 50,
    rating: 4.9,
    numReviews: 200,
    reviews: [],
    description: 'Iconic Pink Floyd album with legendary tracks.',
  },

  // 🛋 Antique Furniture
  {
    name: 'Victorian Wooden Chair',
    slug: toSlug('Victorian Wooden Chair'),
    category: 'Antique Furniture',
    image: [
      '/images/antique1-1.jpg',
      '/images/antique1-2.jpg',
      '/images/antique1-3.jpg',
    ],
    price: 199.99,
    seller: 'Antique World',
    age: 120, // Antika mobilyalar için "Age" gerekli
    material: 'Oak Wood', // Antika mobilyalar için "Material" gerekli
    rating: 4.5,
    numReviews: 45,
    reviews: [],
    description:
      'Handcrafted Victorian-era wooden chair with elegant carvings.',
  },
  {
    name: '1920s French Oak Table',
    slug: toSlug('1920s French Oak Table'),
    category: 'Antique Furniture',
    image: [
      '/images/antrique2-1.jpg',
      '/images/antrique2-2.jpg',
      '/images/antrique2-3.jpg',
    ],
    price: 499.99,
    seller: 'Timeless Pieces',
    age: 104,
    material: 'French Oak',
    rating: 4.7,
    numReviews: 60,
    reviews: [],
    description: 'A beautifully preserved oak table from the 1920s.',
  },

  // ⌚ GPS Sport Watches
  {
    name: 'Garmin Forerunner 945',
    slug: toSlug('Garmin Forerunner 945'),
    category: 'GPS Sport Watches',
    image: [
      '/images/gps1-1.jpg',
      '/images/gps1-2.jpg',
      '/images/gps1-3.jpg',
      '/images/gps1-4.jpg',
    ],
    price: 599.99,
    seller: 'SmartWear',
    batteryLife: 36, // GPS saatleri için "Battery Life" gerekli (saat cinsinden)
    rating: 4.8,
    numReviews: 150,
    reviews: [],
    description: 'Advanced GPS running and triathlon smartwatch with music.',
  },
  {
    name: 'Suunto 9 Baro',
    slug: toSlug('Suunto 9 Baro'),
    category: 'GPS Sport Watches',
    image: [
      '/images/gps2-1.jpg',
      '/images/gps2-2.jpg',
      '/images/gps2-3.jpg',
      '/images/gps2-4.jpg',
    ],
    price: 499.99,
    seller: 'Outdoor Gear',
    batteryLife: 120,
    rating: 4.6,
    numReviews: 85,
    reviews: [],
    description: 'Long battery life GPS smartwatch for endurance sports.',
  },

  // 👟 Running Shoes
  {
    name: 'Nike Air Zoom Pegasus 39',
    slug: toSlug('Nike Air Zoom Pegasus 39'),
    category: 'Running Shoes',
    image: [
      '/images/shoe1-1.jpg',
      '/images/shoe1-2.jpg',
      '/images/shoe1-3.jpg',
      '/images/shoe1-4.jpg',
    ],
    price: 129.99,
    seller: 'FastTrack Sports',
    size: 'M', // Koşu ayakkabıları için "Size" gerekli
    material: 'Mesh & Rubber', // Koşu ayakkabıları için "Material" gerekli
    rating: 4.7,
    numReviews: 95,
    reviews: [],
    description: 'Lightweight and responsive running shoes for daily training.',
  },
  {
    name: 'Adidas Ultraboost 22',
    slug: toSlug('Adidas Ultraboost 22'),
    category: 'Running Shoes',
    image: [
      '/images/shoe2-1.jpg',
      '/images/shoe2-2.jpg',
      '/images/shoe2-3.jpg',
    ],
    price: 139.99,
    seller: 'SpeedRun Outlet',
    size: 'L',
    material: 'Primeknit & Foam',
    rating: 4.9,
    numReviews: 130,
    reviews: [],
    description: 'High-energy return running shoes with premium comfort.',
  },
]

const data: Data = {
  headerMenus: [],
  products,
}

export default data

/*
const data = {
  headerMenus: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Categories',
      submenus: [
        { name: 'Vinyls', href: '/search?category=vinyls' },
        { name: 'Antique Furniture', href: '/search?category=antique-furniture' },
        { name: 'GPS Sport Watches', href: '/search?category=gps-watches' },
        { name: 'Running Shoes', href: '/search?category=running-shoes' },
      ],
    },
  ],
};

export default data;
*/
