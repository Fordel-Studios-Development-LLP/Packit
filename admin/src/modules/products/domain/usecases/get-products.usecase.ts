import { ProductEntity } from "../entity/product.entity";
import { ProductRepository } from "../repositories/product.repository";

export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(): Promise<ProductEntity[]> {
    return this.productRepository.getProducts();
  }
}
