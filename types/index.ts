import { z } from 'zod'
import { ItemSchema } from '@/lib/validator'

export type IProductInput = z.infer<typeof ItemSchema>

// ✅ Data tipi, ürünleri ve diğer UI bileşenlerini içerir.
export type Data = {
  products: IProductInput[] // ✅ Ürün listesi

  headerMenus: {
    name: string
    href: string
  }[]
}
