import bgi from "./Clothing.png"

const Bannner = () => {
    const bgStyle = {
        backgroundImage: `url(${bgi})`,
    };
    return (
        // <div className="text-center bg-cover h-[500px] bg-black" style={bgStyle}>
        //    <div className="py-60">
        //    <h1 className="text-3xl font-bold">I Grow By Helping People In Need</h1>
        //     <div className="mt-4">
        //     <input className="border-2 border-black rounded" type="text" placeholder="Search Here" ></input>
        //     <button className="bg-red-400 p-1 py-0.5 rounded">Search</button>
        //     </div>
        //    </div>
        // </div>
        <div className="container mx-auto ">
            <div className="hero h-[400px]" style={bgStyle}>
  <div className="hero-overlay bg-white bg-opacity-95"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <div>
      <h1 className="mb-5 text-2xl font-bold text-black">I Grow By Helping People In Need</h1>
      </div>
      <input className="border-2 border-gray-300 rounded text-black p-0.7" type="text" placeholder="Search Here" ></input>
      <button className="bg-red-500 p-1 py-0.5 rounded">Search</button>
      
      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Bannner;