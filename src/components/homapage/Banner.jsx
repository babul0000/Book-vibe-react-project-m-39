import React from 'react';
import imageHero from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-2xl my-8 container mx-auto">

    <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
    <img
      src={imageHero}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-primary mt-10">View The List</button>
    </div>
    </div>
</div>
    );
};

export default Banner;