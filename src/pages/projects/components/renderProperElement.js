import { getRandomId } from 'utils/helpers';

import Image from './Image';
import ImagesGrid from './ImagesGrid';
import ImagesInDiagonal from './ImagesInDiagonal';
import ImagesSlide from './ImagesSlide';
import List from './List';
import Paragraph from './Paragraph';
import Video from './Video';

const renderProperElement = ({ type, ...rest }, setImageToOpen) => {
    const itemOptions = {
        image: Image,
        'images-grid': ImagesGrid,
        'images-slide': ImagesSlide,
        'images-in-diagonal': ImagesInDiagonal,
        list: List,
        paragraph: Paragraph,
        video: Video
    };
    const Component = itemOptions[type];

    if (!Component) return null;

    return <Component key={getRandomId()} setImageToOpen={setImageToOpen} {...rest} />;
};

export default renderProperElement;
