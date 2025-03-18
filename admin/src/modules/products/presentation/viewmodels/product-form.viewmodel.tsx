import { useState, useEffect } from "react";
import { ProductEntity } from "../../domain/entity/product.entity";
import { useProductContext } from "../providers/product.provider";

export interface ProductFormState {
  name: string;
  price: string;
  description: string;
  productImgs: File[];
  error: string;
  isLoading: boolean;
}

export interface ProductFormViewModel {
  state: ProductFormState;
  setName: (name: string) => void;
  setPrice: (price: string) => void;
  setDescription: (description: string) => void;
  setProductImgs: (files: File[]) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
}

export const useProductFormViewModel = (
  initialProduct?: ProductEntity,
  onSubmitSuccess?: () => void
): ProductFormViewModel => {
  const { createProduct, updateProduct, isLoading } = useProductContext();

  const [state, setState] = useState<ProductFormState>({
    name: "",
    price: "",
    description: "",
    productImgs: [],
    error: "",
    isLoading: false,
  });

  useEffect(() => {
    if (initialProduct) {
      setState((prev) => ({
        ...prev,
        name: initialProduct.name,
        price: initialProduct.price,
        description: initialProduct.description,
      }));
    }
  }, [initialProduct]);

  const setName = (name: string) => {
    setState((prev) => ({ ...prev, name }));
  };

  const setPrice = (price: string) => {
    setState((prev) => ({ ...prev, price }));
  };

  const setDescription = (description: string) => {
    setState((prev) => ({ ...prev, description }));
  };

  const setProductImgs = (productImgs: File[]) => {
    setState((prev) => ({ ...prev, productImgs }));
  };

  const setError = (error: string) => {
    setState((prev) => ({ ...prev, error }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImgs(Array.from(e.target.files));
    }
  };

  const resetForm = () => {
    setState({
      name: "",
      price: "",
      description: "",
      productImgs: [],
      error: "",
      isLoading: false,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!initialProduct && state.productImgs.length === 0) {
      setError("Please select image files.");
      return;
    }

    setError("");
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const productData = {
        name: state.name,
        price: state.price,
        description: state.description,
        images: initialProduct?.images || [],
      };

      if (initialProduct?.id) {
        await updateProduct(initialProduct.id, productData, state.productImgs);
      } else {
        await createProduct(productData, state.productImgs);
      }

      resetForm();
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      setError("An error occurred while saving the product");
      console.error(error);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return {
    state,
    setName,
    setPrice,
    setDescription,
    setProductImgs,
    handleSubmit,
    handleFileChange,
    resetForm,
  };
};
