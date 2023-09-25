import { Link } from "react-router-dom";


const Category = ({category1}) => {
    const {id,picture,category,description,card_bg_color,category_bg_color,text_button_bg_color}=category1;
    const cardStyle = {
        backgroundColor: card_bg_color,
      };
      const titleStyle = {
        backgroundColor: category_bg_color,
        width: 110,
        borderRadius: 5,
        textAlign:'center',
        
         
      };
      
      
     
    return (
      
        <div>
          <Link to={`/category1/${id}`}>
          <div className="card w-80  bg-base-100 shadow-xl" style={cardStyle}>
  <figure className="w-80 rounded-md"><img src={picture}  /></figure>
  <div className="card-body">
    <div style={titleStyle}>
    <h2 className="card-title w-2/4 px-3 py-0 rounded-lg"  style={{ color: text_button_bg_color }}>{category}</h2>
    </div>
    <p className="font-bold" style={{ color: text_button_bg_color }}>{description}</p>
    
  </div>
</div>
          </Link>
        </div>
    );
      
};

export default Category;