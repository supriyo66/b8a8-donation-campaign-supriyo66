import { useLoaderData, useParams } from "react-router-dom";
import toast,{ Toaster } from 'react-hot-toast';


const CategoryDetails = () => {
    const categories=useLoaderData();
    const {id}=useParams();
    const idI=parseInt(id);
    const category=categories.find(category=>category.id === idI);
    const buttonStyle = {
        backgroundColor: category.text_button_bg_color,
        zIndex: 1,
        
    };
    const overlayStyle = {
        position: "absolute",
        bottom: 0,
        left: 0,
        
        width: "75%",
        height: "10%",
        background: "rgba(0, 0, 0, 0.3)", 
        zIndex: 1,
        
    };
    const notify = () => {
        
        const toastMessage = `Thank you for donating ${category.price} to ${category.title}`;
    toast.success(toastMessage);}
        
    
    

    return (
       <div className="container mx-auto ">
        
        
         <div className="container mx-auto w-3/4   mt-10 relative ">
            <div className="flex-row justify-center items-center text-center ">
                <img className="w-3/4 h-[250px] md:h-[400px] " src={category.picture}></img>
                <div style={overlayStyle}> </div>
                <div className="absolute -mt-9  ml-3 p-1 rounded" style={buttonStyle}>
                <button onClick={notify} >Donate <span>{category.price}</span></button><Toaster />
                </div>
                
            </div>
            </div>
            <div className="container mx-auto w-3/4 mt-2">
                <h1 className="text-3xl font-bold">{category.title}</h1>
                <p className="w-3/4 mt-2">{category.description}</p>
                
            </div>
       </div>
    );
};

export default CategoryDetails;