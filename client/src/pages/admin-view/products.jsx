import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {useToast} from "@/components/ui/use-toast";
import {addProductFormElements} from "@/config";
import {addNewProduct, deleteProduct, editProduct, fetchAllProducts,} from "@/store/admin/products-slice";
import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaPlus} from "react-icons/fa";

const initialFormData = {
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
    averageReview: 0,
};

function AdminProducts() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] =
        useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const [currentEditedId, setCurrentEditedId] = useState(null);

    const {productList} = useSelector((state) => state.adminProducts);
    const dispatch = useDispatch();
    const {toast} = useToast();

    function onSubmit(event) {
        event.preventDefault();

        const updatedFormData = {
            ...formData,
            image: uploadedImageUrl || formData.image,
        };

        currentEditedId !== null
            ? dispatch(
                editProduct({
                    id: currentEditedId,
                    formData: updatedFormData,
                })
            ).then((data) => {
                if (data?.payload?.success) {
                    dispatch(fetchAllProducts());
                    setFormData(initialFormData);
                    setOpenCreateProductsDialog(false);
                    setCurrentEditedId(null);
                    setUploadedImageUrl("");
                }
            })
            : dispatch(
                addNewProduct({
                    ...formData,
                    image: uploadedImageUrl,
                })
            ).then((data) => {
                if (data?.payload?.success) {
                    dispatch(fetchAllProducts());
                    setOpenCreateProductsDialog(false);
                    setImageFile(null);
                    setFormData(initialFormData);
                    setUploadedImageUrl("");
                    toast({
                        title: "Product added successfully",
                    });
                }
            });
    }

    function handleDelete(getCurrentProductId) {
        dispatch(deleteProduct(getCurrentProductId)).then((data) => {
            if (data?.payload?.success) {
                dispatch(fetchAllProducts());
            }
        });
    }

    function isFormValid() {
        return Object.keys(formData)
            .filter((currentKey) => currentKey !== "averageReview")
            .map((key) => formData[key] !== "")
            .every((item) => item);
    }

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <Fragment>
            <div className="mb-5 w-full flex">
                <Button onClick={() => setOpenCreateProductsDialog(true)}
                        style={{backgroundColor: '#1E90FF', color: '#ffffff'}}>
                    <FaPlus className="mr-2"/>
                    Add New Product
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {productList && productList.length > 0
                    ? productList.map((productItem) => (
                        <AdminProductTile
                            key={productItem.id}
                            setFormData={setFormData}
                            setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                            setCurrentEditedId={setCurrentEditedId}
                            product={productItem}
                            handleDelete={handleDelete}
                        />
                    ))
                    : null}
            </div>
            <Dialog open={openCreateProductsDialog} onOpenChange={setOpenCreateProductsDialog}>
                <DialogContent className="max-h-[80vh] overflow-auto">
                    <DialogHeader>
                        <DialogTitle>
                            {currentEditedId !== null ? "Edit Product" : "Add New Product"}
                        </DialogTitle>
                    </DialogHeader>
                    <ProductImageUpload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                        isEditMode={currentEditedId !== null}
                    />
                    <div className="py-6">
                        <CommonForm
                            onSubmit={onSubmit}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText={currentEditedId !== null ? "Edit" : "Add"}
                            formControls={addProductFormElements}
                            isBtnDisabled={!isFormValid()}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}

export default AdminProducts;
