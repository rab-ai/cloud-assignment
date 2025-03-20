import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

// Common
const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    )
export const ItemSchema = z.object({
  name: z.string().min(1, 'Item name is required'), // Zorunlu alan
  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'), // Zorunlu alan
  description: z.string().min(1, 'Description is required'), // Zorunlu alan
  price: Price('Price'), // Fiyat, tam olarak iki ondalık basamak içermelidir
  seller: z.string().min(1, 'Seller information is required'), // Zorunlu alan
  image: z.array(z.string().url('Image must be a valid URL')).min(1), // ✅ Tek fotoğraf yerine birden fazla destekler
  category: z.enum([
    'Vinyls',
    'Antique Furniture',
    'GPS Sport Watches',
    'Running Shoes',
  ]), // Kategori belirleme

  // Opsiyonel Alanlar (Belirli kategorilere özgü)
  batteryLife: z.number().positive().optional(), // GPS Sport Watches için
  age: z.number().int().positive().optional(), // Antique Furniture ve Vinyls için
  size: z.string().optional(), // Running Shoes için
  material: z.string().optional(), // Antique Furniture ve Running Shoes için

  // Derecelendirme ve İncelemeler
  rating: z.coerce
    .number()
    .min(0, 'Rating must be at least 0')
    .max(10, 'Rating must be at most 10')
    .default(0), // Ortalama puan (1-10 arası)
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('Number of reviews must be a non-negative integer')
    .default(0), // Toplam inceleme sayısı
  reviews: z.array(z.string()).default([]), // Kullanıcı yorumları
})
