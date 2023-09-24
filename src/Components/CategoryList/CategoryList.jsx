import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>
    {
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="grid grid-cols-4 gap-5 mt-10">
            
            {
              categories.map(category1=><Category key={category1.id} category1={category1}></Category>)
            }
        </div>
    );
};

export default CategoryList;