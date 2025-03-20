import { Document, Model, model, models, Schema } from 'mongoose'
import { IProductInput } from '@/types' // `index.ts` içinden import ediyoruz
import { toSlug } from '@/lib/utils'

// ✅ `IProduct`: `IProductInput` + Mongoose için gerekli ekstra alanlar (_id, timestamps)
export interface IProduct extends Document, IProductInput {
  _id: string
  createdAt: Date
  updatedAt: Date
}

// ✅ Mongoose Şema Tanımı
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    }, // ✅ Slug alanı eklendi!
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    seller: { type: String, required: true },
    image: { type: [String], required: true },
    category: {
      type: String,
      required: true,
      enum: [
        'Vinyls',
        'Antique Furniture',
        'GPS Sport Watches',
        'Running Shoes',
      ],
    },

    // ✅ Kategorilere Özgü Alanlar (Mongoose doğrulama)
    batteryLife: {
      type: Number,
      required: function (this: IProduct) {
        return this.category === 'GPS Sport Watches'
      },
    },
    age: {
      type: Number,
      required: function () {
        return (
          this.category === 'Antique Furniture' || this.category === 'Vinyls'
        )
      },
    },
    size: {
      type: String,
      required: function () {
        return this.category === 'Running Shoes'
      },
    },
    material: {
      type: String,
      required: function () {
        return (
          this.category === 'Antique Furniture' ||
          this.category === 'Running Shoes'
        )
      },
    },

    // ✅ Derecelendirme ve İncelemeler
    rating: { type: Number, required: true, default: 0, min: 0, max: 10 },
    numReviews: { type: Number, required: true, default: 0, min: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', default: [] }],
  },
  {
    timestamps: true, // createdAt ve updatedAt otomatik olarak eklenecek
  }
)

// ✅ Slug'ı otomatik oluştur (Eğer yoksa)
productSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = toSlug(this.name) // ✅ Senin `toSlug` fonksiyonun kullanıldı!
  }
  next()
})

// ✅ Mongoose Modeli
const Product =
  (models.Product as Model<IProduct>) ||
  model<IProduct>('Product', productSchema)

export default Product
