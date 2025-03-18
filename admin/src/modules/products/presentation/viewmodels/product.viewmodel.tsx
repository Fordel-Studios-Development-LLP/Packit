import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useProductListViewModel } from "./product-list.viewmodel";

export interface ProductViewModel {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleLogout: () => void;
  productListViewModel: ReturnType<typeof useProductListViewModel>;
}

export const useProductViewModel = (): ProductViewModel => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productListViewModel = useProductListViewModel();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    productListViewModel.setSelectedProduct(undefined);
  };

  const handleLogout = () => {
    // dispatch(logout());
    navigate("/");
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    handleLogout,
    productListViewModel,
  };
};
