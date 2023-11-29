import useFetch from "../CustomHook/useFetch";
import Paragraph from "./Paragraph";
import "./ShowPhotos.css";
export default function ShowPhotos() {
  const [photos] = useFetch("https://jsonplaceholder.typicode.com/photos");

  return (
    <div>
      <h1>Photos</h1>
      <div className="photos">
        {photos &&
          photos.slice(1, 13).map((photo) => (
            <div className="photo" key={photo.id}>
              <img src={photo.url} alt="" />
              <h3>{photo.title}</h3>
              <Paragraph />
            </div>
          ))}
      </div>
    </div>
  );
}
