import Image from './Image';
import ImagesSlide from './ImagesSlide';
import Paragraph from './Paragraph';
import Video from './Video';

const renderProperElement = ({ type, ...rest }, setImageToOpen) => {
    const itemOptions = {
        image: Image,
        video: Video,
        paragraph: Paragraph,
        'images-slide': ImagesSlide
    };
    const Component = itemOptions[type];

    if (!Component) return null;

    return <Component setImageToOpen={setImageToOpen} {...rest} />;
};

export default renderProperElement;
