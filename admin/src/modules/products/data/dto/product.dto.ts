// DTOs (Data Transfer Objects) for product operations

export interface ImageDTO {
  secure_url: string;
}

export interface CreateProductDTO {
  name: string;
  price: string;
  description: string;
  productImages?: ImageDTO[];
}

export interface UpdateProductDTO {
  name?: string;
  price?: string;
  description?: string;
  productImages?: ImageDTO[];
}

export interface ProductResponseDTO {
  id: string;
  name: string;
  price: string;
  description: string;
  productImages: ImageDTO[];
}
