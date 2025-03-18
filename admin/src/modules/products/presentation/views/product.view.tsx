import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
// import SideNavbar from "@/components/SideNavbar";
// import CustomModal from "@/components/CustomModal";
import { ProductFormComponent } from "../components/product-form.component";
import { ProductListComponent } from "../components/product-list.component";
import { useProductViewModel } from "../viewmodels/product.viewmodel";
import { useProductFormViewModel } from "../viewmodels/product-form.viewmodel";

export default function ProductView() {
  const {
    isModalOpen,
    openModal,
    closeModal,
    handleLogout,
    productListViewModel,
  } = useProductViewModel();

  const { products, handleEdit, handleDelete, selectedProduct } =
    productListViewModel;

  const formViewModel = useProductFormViewModel(selectedProduct, closeModal);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        {/* <SideNavbar /> */}
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            {/* <Package2Icon className="h-6 w-6" /> */}
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button onClick={handleLogout}>Logout</Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Link className="text-sm font-medium underline" to="#">
                  View All
                </Link>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-end">
            <Button className="w-40" onClick={openModal}>
              Create New Product
            </Button>
          </div>

          <ProductListComponent
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </main>
      </div>

      {isModalOpen && (
        // <CustomModal isOpen={isModalOpen} toggleModal={closeModal}>
        <ProductFormComponent
          product={selectedProduct}
          viewModel={formViewModel}
        />
        // </CustomModal>
      )}
    </div>
  );
}
