import { useLoaderData, useParams } from "react-router-dom";


const CategoryDetails = () => {
    const categories=useLoaderData();
    const {id}=useParams();
    console.log(id,categories)
    return (
        <div>
            
        </div>
    );
};

export default CategoryDetails;