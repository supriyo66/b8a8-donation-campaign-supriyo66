

const Category = ({category1}) => {
    const {picture,category,description,card_bg_color,category_bg_color,text_button_bg_color}=category1;
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
            <div className="card  bg-base-100 shadow-xl" style={cardStyle}>
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <div style={titleStyle}>
    <h2 className="card-title w-2/4 px-3 py-0 rounded-lg"  style={{ color: text_button_bg_color }}>{category}</h2>
    </div>
    <p className="font-bold" style={{ color: text_button_bg_color }}>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default Category;