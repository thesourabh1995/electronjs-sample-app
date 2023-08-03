import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from './PhotoGallery';
// import { Link } from 'react-router-dom';

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const GalleryCover : React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      // Fetch data from the API
      axios
        .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          console.log("this is api all :: ", response);
          setPhotos(response.data);
          // setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          // setLoading(false);
        });
    }, []);
  
    return (
      <div>
        {/* {loading ? (
          <p>Loading...</p>
        ) : ( */}
          <div>
            <ImageGrid images={photos} />
          </div>
        {/* )} */}
      </div>
    );
};

export default GalleryCover;
