import { ProductRepository } from "../repositories/product.repository";

export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(id: string): Promise<boolean> {
    return this.productRepository.deleteProduct(id);
  }
}
