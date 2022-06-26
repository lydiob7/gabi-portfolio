import rito1 from 'assets/images/projects/rito/rito1.jpg';
import rito2 from 'assets/images/projects/rito/rito2.jpg';
import rito3 from 'assets/images/projects/rito/rito3.jpg';
import rito4 from 'assets/images/projects/rito/rito4.jpg';
import rito5 from 'assets/images/projects/rito/rito5.jpg';

const rito = {
    id: 'rito',
    behanceLink: 'https://www.behance.net/gallery/141042255/Rito-Emergent-art-magazine%28-UX-UI-Case-Study-Ironhack%29',
    title: 'Rito',
    en: {
        subtitle: 'Web/app editorial project',
        overview: [
            'Project created from scratch, in 4 days, in collaboration with Tadeau Carabias.',
            'The challenge was to create a responsive online platform for a magazine to meet the needs and goals of users. The goal was to deliver a consistent, branded, and engaging experience and our main focus was on UI Design.'
        ],
        scope: 'Desktop research, user flow, information architecture, wireframing, mock-up, design system, prototyping, and usability testing.',
        categories: 'Website/Mobile',
        comment:
            "I highly recommend checking out the full case study here, but if you don't have time today, below is a summary.",
        post: [
            {
                sectionNumber: '01',
                id: 'brief',
                content: [
                    {
                        type: 'paragraph',
                        content:
                            'Rito is an emergent art magazine to promote new and upcoming artists and review the work of established ones, with the intent to democratize art and enable easier access for everyone both artist and viewers.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'image',
                        content: { src: rito1, alt: 'Rito 1', size: 'auto' }
                    }
                ]
            },
            {
                sectionNumber: '02',
                id: 'research',
                content: [
                    {
                        type: 'paragraph',
                        content:
                            'At first, we searched the web for different digital and physical magazines to understand how this type of market works and what people want to consume when they read an art magazine.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'paragraph',
                        content:
                            'After visiting and comparing different sites, the information they offer, how they organize content, their aesthetics, their accessibility, and even the frequency of content, we started thinking of questions for the interviews that would allow us to achieve our goal.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'images-slide',
                        content: [
                            { src: rito2, alt: 'Rito 2' },
                            { src: rito3, alt: 'Rito 3' }
                        ]
                    },
                    {
                        type: 'paragraph',
                        content: 'We interviewed five people and this is what we learned from them.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'image',
                        content: { src: rito4, alt: 'Rito 4', size: 'auto' }
                    },
                    {
                        type: 'paragraph',
                        content:
                            'On the other hand, the surveys allow us to learn that magazines are a product that is not consumed daily but more sporadically during the week. Also, 100% of the time, they are accessed by recommendation on social networks. Finally, people consume them because they look for inspiration and recommendations.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'paragraph',
                        content:
                            'In this stage of seeking to empathize with our users, we opened the door to Latin American art. We decided to create RITO to contribute to the visibility and democratization of emerging artists from Argentina and Brazil, countries that share territorial borders, proximity, and a long history of cooperation despite not sharing the same language.',
                        size: '400',
                        weight: '600',
                        style: 'normal'
                    }
                ]
            },
            {
                sectionNumber: '03',
                id: 'visualConcept',
                content: [
                    {
                        type: 'paragraph',
                        content:
                            'We choose a  colorful palette since colors are representative of Latin America.Our name was born after brainstorming a lot. We thought about our interviews, what we heard about them, and reflected on what we understood about art.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'image',
                        content: { src: rito5, alt: 'Rito 5', size: 'auto' }
                    }
                ]
            },
            {
                sectionNumber: '04',
                id: 'prototype',
                content: [
                    {
                        type: 'video',
                        content: { src: 'https://www.youtube.com/embed/PsXkEXV3cgA', alt: 'Rito 6' }
                    }
                ]
            }
        ]
    },
    es: {
        subtitle: 'web/app editorial project',
        overview: [
            'Proyecto creado desde cero, en 4 días, en colaboración con Tadeau Carabias.',
            'El reto consistía en crear una plataforma online responsiva para una revista con el fin de satisfacer las necesidades y objetivos de los usuarios. El objetivo era ofrecer una experiencia consistente, de marca y atractiva y nuestro enfoque principal fue el diseño de la interfaz de usuario.'
        ],
        scope: 'Investigación de usuarios, análisis, flujo de usuarios, arquitectura de la información, wireframing, mock-up, sistema de diseño, prototipado y pruebas de usabilidad.',
        categories: 'Website/Movil',
        post: [
            {
                sectionNumber: '01',
                id: 'brief',
                content: [
                    {
                        type: 'paragraph',
                        content:
                            'Rito es una revista de arte emergente para promocionar a los nuevos artistas y revisar el trabajo de los establecidos, con la intención de democratizar el arte y permitir un acceso más fácil para todos, tanto para los artistas como para los espectadores.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'image',
                        content: { src: rito1, alt: 'Rito 1', size: 'auto' }
                    }
                ]
            },
            {
                sectionNumber: '02',
                id: 'research',
                content: [
                    {
                        type: 'paragraph',
                        content:
                            'Al principio, buscamos en la web diferentes revistas digitales y físicas para entender cómo funciona este tipo de mercado y qué es lo que la gente quiere consumir cuando decide leer una revista de arte.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'paragraph',
                        content:
                            'Después de visitar y comparar diferentes sitios, la información que ofrecen, cómo se organizan los contenidos, su estética, su accesibilidad e incluso la frecuencia de los contenidos, empezamos a pensar en preguntas para las entrevistas que nos permitieran alcanzar nuestro objetivo.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'images-slide',
                        content: [
                            { src: rito2, alt: 'Rito 2' },
                            { src: rito3, alt: 'Rito 3' }
                        ]
                    },
                    {
                        type: 'paragraph',
                        content: 'Hemos entrevistado a cinco personas y esto es lo que hemos aprendido de ellas.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'image',
                        content: { src: rito4, alt: 'Rito 4', size: 'auto' }
                    },
                    {
                        type: 'paragraph',
                        content:
                            'Por otro lado, las encuestas nos permitieron conocer que las revistas son un producto que no se consumen a diario, sino más bien de forma esporádica durante la semana. Además, el 100% de las veces se accede a ellas por recomendación en las redes sociales. Por último, la gente las consume porque busca inspiración y recomendaciones.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'paragraph',
                        content:
                            'En esta etapa de búsqueda de empatía con nuestros usuarios, abrimos la puerta al arte latinoamericano. Decidimos crear RITO para contribuir a la visibilidad y democratización de los artistas emergentes de Argentina y Brasil, países que comparten fronteras territoriales, proximidad y una larga historia de cooperación a pesar de no compartir el mismo idioma.',
                        size: '400',
                        weight: '600',
                        style: 'normal'
                    }
                ]
            },
            {
                sectionNumber: '03',
                id: 'visualConcept',
                content: [
                    {
                        type: 'paragraph',
                        content:
                            'Elegimos una paleta colorida ya que los colores son representativos de América Latina.Nuestro nombre nació después de una lluvia de ideas. Pensamos en nuestras entrevistas, en lo que oímos sobre ellas y reflexionamos sobre lo que entendíamos por arte.',
                        size: '200',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        type: 'image',
                        content: { src: rito5, alt: 'Rito 5', size: 'auto' }
                    }
                ]
            },
            {
                sectionNumber: '04',
                id: 'prototype',
                content: [
                    {
                        type: 'video',
                        content: { src: 'https://www.youtube.com/embed/PsXkEXV3cgA', alt: 'Rito 6' }
                    }
                ]
            }
        ]
    }
};

export default rito;
