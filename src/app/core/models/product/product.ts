export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  emoji: string;
}

export class Product implements IProduct {
  public id: number;
  public productName: string;
  public productCode: string;
  public releaseDate: Date;
  public price: number;
  public description: string;
  public starRating: number;
  public imageUrl: string;
  public emoji: string;

  constructor(product: Partial<IProduct>) {
    this.id = product.id || null
    this.productName = product.productName || ''
    this.productCode = product.productCode || ''
    this.releaseDate = product.releaseDate || new Date()
    this.price = product.price || 0
    this.description = product.description || ''
    this.starRating = product.starRating || 0
    this.imageUrl = product.imageUrl || ''
    this.emoji = product.emoji || '🐣'
  }

  public toString(): string {
    return `#${this.productCode} - ${this.productName} (id: ${this.id}`
  }
}
