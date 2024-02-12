import React from "react";


function GifList({gifs}){
    return (
        <div className="container">
                <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      ))}
    </ul>
        </div>
    )
}
export default GifList;