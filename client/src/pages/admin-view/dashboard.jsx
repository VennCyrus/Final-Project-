import ProductImageUpload from "@/components/admin-view/image-upload";
import {Button} from "@/components/ui/button";
import {addFeatureImage, deleteFeatureImage, getFeatureImages} from "@/store/common-slice";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaTrash} from "react-icons/fa";

function AdminDashboard() {
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const dispatch = useDispatch();
    const {featureImageList} = useSelector((state) => state.commonFeature);

    const [editImageId, setEditImageId] = useState(null);

    function handleUploadFeatureImage() {
        dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
            if (data?.payload?.success) {
                dispatch(getFeatureImages());
                setImageFile(null);
                setUploadedImageUrl("");
            }
        });
    }


    function handleDeleteFeatureImage(id) {
        dispatch(deleteFeatureImage(id)).then((data) => {
            if (data?.payload?.success) {
                dispatch(getFeatureImages());
            }
        });
    }


    useEffect(() => {
        dispatch(getFeatureImages());
    }, [dispatch]);

    return (
        <div>
            <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                isCustomStyling={true}
            />
            <Button onClick={handleUploadFeatureImage} className="mt-5 w-full" disabled={!uploadedImageUrl}
                    style={{backgroundColor: '#1E90FF', color: '#ffffff'}}>
                Upload
            </Button>
            <div className="flex flex-col gap-4 mt-5">
                {featureImageList && featureImageList.length > 0
                    ? featureImageList.map((featureImgItem) => (
                        <div className="relative" key={featureImgItem._id}>
                            <img
                                src={featureImgItem.image}
                                className="w-full h-[300px] object-cover rounded-t-lg"
                            />
                            <Button
                                onClick={() => handleDeleteFeatureImage(featureImgItem._id)}
                                className="absolute top-2 right-2"
                                variant="ghost"
                            >
                                <FaTrash className="w-5 h-5 text-red-500"/>
                            </Button>
                        </div>
                    ))
                    : null}
            </div>
        </div>
    );
}

export default AdminDashboard;
