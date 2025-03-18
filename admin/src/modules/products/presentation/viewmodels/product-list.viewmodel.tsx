import { useState } from "react";
import { ProductDTO } from "../../data/dto/product.dto";
import { useProductContext } from "../providers/product.provider";

export interface ProductListViewModel {
  products: ProductDTO[];
  isLoading: boolean;
  handleEdit: (product: ProductDTO) => void;
  handleDelete: (productId: string) => Promise<void>;
  selectedProduct: ProductDTO | undefined;
  setSelectedProduct: (product: ProductDTO | undefined) => void;
}

export const useProductListViewModel = (): ProductListViewModel => {
  const { products, isLoading, deleteProduct } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<
    ProductDTO | undefined
  >(undefined);

  const handleEdit = (product: ProductDTO) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (productId: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(productId);
    }
  };

  return {
    products,
    isLoading,
    handleEdit,
    handleDelete,
    selectedProduct,
    setSelectedProduct,
  };
};
