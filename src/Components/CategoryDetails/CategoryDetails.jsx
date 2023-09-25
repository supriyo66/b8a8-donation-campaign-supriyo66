import { useLoaderData, useParams } from "react-router-dom";


const CategoryDetails = () => {
    const categories=useLoaderData();
    const {id}=useParams();
    const idI=parseInt(id);
    const category=categories.find(category=>category.id === idI);
    console.log(category)

    return (
        <div>
            {category.title}
        </div>
    );
};

export default CategoryDetails;