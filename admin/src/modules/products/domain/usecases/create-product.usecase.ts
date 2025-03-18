import { ProductEntity } from "../entity/product.entity";
import { ProductRepository } from "../repositories/product.repository";

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(
    product: Omit<ProductEntity, "id">,
    images: File[]
  ): Promise<ProductEntity> {
    return this.productRepository.createProduct(product, images);
  }
}
