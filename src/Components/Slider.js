import "../Stylesheets/Slider.css";
import {useState} from "react"
import { GrNext, GrPrevious } from "react-icons/gr";

function Slider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const imageNumber = images?.length;

  if (!Array.isArray(images) || imageNumber === 0) return;

  const nextImage = () => {
    setCurrentImage(currentImage === imageNumber - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageNumber - 1 : currentImage - 1);
  };

  return (
    <div className="container">
      <button onClick={previousImage}>
        <GrPrevious />
      </button>
      {images.map((image, index) => {
        return (
          <div className={currentImage === index ? `slide active` : "slide"}>
            {currentImage === index && (
              <img key={index} src={image} alt="imagen" />
            )}
          </div>
        );
      })}
      <button onClick={nextImage}>
        <GrNext />
      </button>
    </div>
  );
}

export default Slider;
