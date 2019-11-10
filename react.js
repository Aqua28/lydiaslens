import Mountains from './images/mountainlayers.jpg';
import Valley from './images/foginthevalley.jpg';
import Sand from './images/sanddunes.jpg';



function GalleryPicture(props) {
    return <h1> Image, {props.image}</h1>;
}

function Gallery() {
  return (
    <div>
      <GalleryPicture image=Mountains />
      <GalleryPicture name=Valley />
      <GalleryPicture name=Sand />
    </div>
  );
}

ReactDOM.render(<Gallery />, document.getElementById('root'));
