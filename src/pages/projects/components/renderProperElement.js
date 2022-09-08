import Image from './Image';
import ImagesGrid from './ImagesGrid';
import ImagesSlide from './ImagesSlide';
import List from './List';
import Paragraph from './Paragraph';
import Video from './Video';

const renderProperElement = ({ type, ...rest }, setImageToOpen) => {
    const itemOptions = {
        image: Image,
        'images-grid': ImagesGrid,
        'images-slide': ImagesSlide,
        list: List,
        paragraph: Paragraph,
        video: Video
    };
    const Component = itemOptions[type];

    if (!Component) return null;

    return <Component setImageToOpen={setImageToOpen} {...rest} />;
};

export default renderProperElement;
