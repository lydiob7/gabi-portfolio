import rito1 from 'assets/images/projects/rito/rito1.png';
import rito2 from 'assets/images/projects/rito/rito2.png';
import rito3 from 'assets/images/projects/rito/rito3.png';
import rito4 from 'assets/images/projects/rito/rito4.png';
import rito5 from 'assets/images/projects/rito/rito5.png';
import rito6 from 'assets/images/projects/rito/rito6.png';
import rito7 from 'assets/images/projects/rito/rito7.png';
import rito8 from 'assets/images/projects/rito/rito8.png';
import rito9 from 'assets/images/projects/rito/rito9.png';
import ritoVisualConcept from 'assets/images/projects/rito/rito-visual-concept.png';
import ritoVisualConcept2 from 'assets/images/projects/rito/rito-visual-concept2.png';

const rito = {
    id: 'rito',
    behanceLink: 'https://www.behance.net/gallery/141042255/Rito-Emergent-art-magazine%28-UX-UI-Case-Study-Ironhack%29',
    title: 'Rito',
    en: {
        subtitle: 'Web/app editorial project',
        overview: [
            'Project created from scratch in 4 days, in collaboration with Tadeau Carabias.',
            'The challenge was to create a responsive online platform for a magazine to meet the needs and goals of users. The goal was to deliver a consistent, branded, and engaging experience and our main focus were on UI Design.'
        ],
        scope: 'User Research, analyzing, user flow, information architecture, wireframing, mock-up, design system, prototyping, and usability testing.',
        categories: 'Website/Mobile',
        brief: [
            {
                type: 'paragraph',
                content:
                    'Rito is an emergent art magazine that aims to promote new and upcoming artists and review the work of established ones, with the intent to democratize art and enable easier access for everyone, both artist and viewer.',
                size: '300',
                weight: '400',
                style: 'normal'
            }
        ],
        research: [
            {
                type: 'paragraph',
                content:
                    'At first, we searched for different digital and physical magazines to understand how this type of market works and what people want to consume when they decide to read an art magazine.',
                size: '300',
                weight: '400',
                style: 'normal'
            },
            {
                type: 'paragraph',
                content:
                    'After visiting and comparing different sites, the information they offer, how content is organized, their aesthetics, their accessibility, and even the frequency of content, we started thinking of questions for the interviews that would allow us to achieve our goal.',
                size: '300',
                weight: '400',
                style: 'normal'
            },
            {
                type: 'paragraph',
                content: 'We interviewed five people, and this is what we learned from them.',
                size: '300',
                weight: '400',
                style: 'normal'
            },
            {
                type: 'list',
                listItems: [
                    {
                        content:
                            'Art in Latin American contexts is generally understood more as a hobby or an elitist practice but very rarely taken as the result of a creative process that requires a work commitment, which is usually not recognized or compensated economically.',
                        size: '300',
                        weight: '400',
                        style: 'normal'
                    },
                    {
                        content:
                            'WORK FOR THE LOVE OF ART: An excuse for not offering the necessary working conditions and retribution to artists who, by making art, make culture invaluable wealth of any society.',
                        size: '300',
                        weight: '400',
                        style: 'normal'
                    },
                    {
                        content:
                            "The existence of subscriptions to access certain content contributes economic value to artists' creations.",
                        size: '300',
                        weight: '400',
                        style: 'normal'
                    },
                    {
                        content:
                            'An interviewee talked about "un cafecito" ( buy me a coffee) in Argentina, a way of donating money symbolically for the artist\'s work. He also mentioned that for him, democratizing art would be to find a space in between, which gives access to art in a free and free way to those who do not have the material means to access it.',
                        size: '300',
                        weight: '400',
                        style: 'normal'
                    }
                ]
            },
            {
                type: 'paragraph',
                content:
                    'On the other hand, the surveys allow us to learn that magazines are a product that is not consumed daily but more sporadically during the week. Also, 100% of the time, they are accessed by recommendations on social networks. Finally, people consume them because they look for inspiration and suggestions.',
                size: '300',
                weight: '400',
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
        ],
        visualConcept: [
            {
                type: 'paragraph',
                content:
                    'We choose a very colorful palette since it is representative of Latin America. We thought about our interviews and what we heard about them and reflected on what we understood about art to pick up the name.',
                size: '300',
                weight: '400',
                style: 'normal'
            },
            {
                type: 'paragraph',
                content: 'Rito was born from collective discussions.',
                size: '300',
                weight: '400',
                style: 'normal'
            },
            {
                type: 'images-slide',
                size: 'auto',
                content: [
                    { src: ritoVisualConcept2, alt: 'Rito visual concept' },
                    { src: ritoVisualConcept, alt: 'Rito visual concept 2' }
                ]
            }
        ],
        prototype: [
            {
                type: 'video',
                content: { src: 'https://www.youtube.com/embed/PsXkEXV3cgA', alt: 'Rito 6' }
            }
        ],
        post: [
            {
                backgroundColor: '#EBEBDF',
                id: 'research',
                content: [
                    {
                        type: 'image',
                        content: { src: rito1, alt: 'Rito 1', size: 'auto' }
                    },
                    {
                        type: 'image',
                        content: { src: rito2, alt: 'Rito 2', size: 'auto' }
                    },
                    {
                        type: 'image',
                        content: { src: rito3, alt: 'Rito 3', size: 'auto' }
                    }
                ]
            },
            {
                backgroundColor: '#D4643F',
                id: 'visualConcept',
                content: [
                    {
                        type: 'image',
                        content: { src: rito4, alt: 'Rito 4', size: 'auto' }
                    }
                ]
            },
            {
                noContainer: true,
                backgroundColor: '#2C6961',
                id: 'green',
                content: [
                    {
                        type: 'images-in-diagonal',
                        size: 'auto',
                        content: [
                            { src: rito5, alt: 'Rito 5' },
                            { src: rito6, alt: 'Rito 6' }
                        ]
                    }
                ]
            },
            {
                backgroundColor: '#AA94FB',
                id: 'other',
                content: [
                    {
                        type: 'images-grid',
                        size: 'auto',
                        content: [
                            { src: rito7, alt: 'Rito 7' },
                            { src: rito8, alt: 'Rito 8' },
                            { src: rito9, alt: 'Rito 9' }
                        ]
                    }
                ]
            }
        ]
    },
    es: {
        subtitle: 'Proyecto editorial (web/app)',
        overview: [
            'Proyecto creado desde cero, en 4 días, en colaboración con Tadeau Carabias.',
            'El reto consistía en crear una plataforma online responsiva para una revista con el fin de satisfacer las necesidades y objetivos de los usuarios. El objetivo era ofrecer una experiencia consistente, de marca y atractiva y nuestro enfoque principal fue el diseño de la interfaz de usuario.'
        ],
        scope: 'Investigación de usuarios, análisis, flujo de usuarios, arquitectura de la información, wireframing, mock-up, sistema de diseño, prototipado y pruebas de usabilidad.',
        categories: 'Website/Movil',
        brief: [
            {
                type: 'paragraph',
                content:
                    'Rito es una revista de arte emergente para promocionar a los nuevos artistas y seguir el trabajo de los artists ya establecidos. Esta revista tiene la intención de democratizar el arte y brindar un acceso más fácil para todos, tanto para artistas como para espectadores.',
                size: '300',
                weight: '500',
                style: 'normal'
            }
        ],
        research: [
            {
                type: 'paragraph',
                content:
                    'Al principio buscamos diferentes revistas digitales y físicas para entender cómo funciona este tipo de mercado y qué es lo que la gente quiere consumir cuando decide leer una revista de arte.',
                size: '300',
                weight: '500',
                style: 'normal'
            },
            {
                type: 'paragraph',
                content:
                    'Después de visitar y comparar diferentes sitios, la información que ofrecen, cómo se organizan los contenidos, su estética, su accesibilidad e incluso la frecuencia de los contenidos, empezamos a pensar las preguntas para las entrevistas, las que nos permitirían entender más a nuestra audiencia.',
                size: '300',
                weight: '500',
                style: 'normal'
            },
            {
                type: 'paragraph',
                content: 'Entrevistamos a cinco personas; y estas son algunas de las reflexiones.',
                size: '300',
                weight: '500',
                style: 'normal'
            },
            {
                type: 'list',
                listItems: [
                    {
                        content:
                            'El arte en los contextos latinoamericanos suele entenderse más como un hobby o una práctica elitista, pero muy pocas veces se toma como el resultado de un proceso creativo que requiere un compromiso laboral, que no suele ser reconocido ni compensado económicamente.',
                        size: '300',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        content:
                            'TRABAJAR POR AMOR AL ARTE: Una excusa para no ofrecer las condiciones de trabajo y retribución necesarias a los artistas que, haciendo arte, hacen de la cultura una riqueza inestimable de cualquier sociedad.',
                        size: '300',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        content:
                            'La existencia de suscripciones para acceder a determinados contenidos contribuye de alguna manera a dar valor económico a las creaciones de los artistas',
                        size: '300',
                        weight: '500',
                        style: 'normal'
                    },
                    {
                        content:
                            'Un de los entrevistado habló de "un cafecito" en Argentina, una forma de donar dinero simbólicamente por el trabajo del artista. Pero también mencionó que democratizar el arte sería encontrar un espacio intermedio, que permita acceder al arte de forma libre y gratuita a quienes no tienen los medios materiales para acceder a él.',
                        size: '300',
                        weight: '500',
                        style: 'normal'
                    }
                ]
            },
            {
                type: 'paragraph',
                content:
                    'Por otro lado, las encuestas nos permitieron conocer que las revistas son un producto que no se consumen a diario, sino más bien de forma esporádica durante la semana. Además, el 100% de las veces se accede a ellas por recomendación en las redes sociales. Por último, la gente las consume porque busca inspiración y recomendaciones.',
                size: '300',
                weight: '500',
                style: 'normal'
            },
            {
                type: 'paragraph',
                content:
                    'En esta etapa donde buscamos empatizar con nuestros usuarios, es que decidimos abrir la puerta al arte latinoamericano. Decidimos crear RITO para contribuir a la visibilidad y democratización de los artistas emergentes de Argentina y Brasil, países que comparten fronteras territoriales, proximidad y una larga historia de cooperación a pesar de no compartir el mismo idioma.',
                size: '400',
                weight: '700',
                style: 'normal'
            }
        ],
        visualConcept: [
            {
                type: 'paragraph',
                content:
                    'Elegimos una paleta colorida que represents Latinoamerica. Nuestro nombre surgió después de una lluvia de idea, donde hicimos una puesta en común de todo lo aprendido y escuchado durante la etapa de investigación.',
                size: '300',
                weight: '500',
                style: 'normal'
            }
        ],
        prototype: [
            {
                type: 'video',
                content: { src: 'https://www.youtube.com/embed/PsXkEXV3cgA', alt: 'Rito 6' }
            }
        ],
        post: [
            {
                backgroundColor: '#EBEBDF',
                id: 'research',
                content: [
                    {
                        type: 'image',
                        content: { src: rito1, alt: 'Rito 1', size: 'auto' }
                    },
                    {
                        type: 'image',
                        content: { src: rito2, alt: 'Rito 2', size: 'auto' }
                    },
                    {
                        type: 'image',
                        content: { src: rito3, alt: 'Rito 3', size: 'auto' }
                    }
                ]
            },
            {
                backgroundColor: '#D4643F',
                id: 'visualConcept',
                content: [
                    {
                        type: 'image',
                        content: { src: rito4, alt: 'Rito 4', size: 'auto' }
                    }
                ]
            },
            {
                noContainer: true,
                id: 'green',
                content: [
                    {
                        type: 'image',
                        content: { src: rito5, alt: 'Rito 4', size: 'auto' }
                    }
                ]
            },
            {
                backgroundColor: '#EBEBDF',
                id: 'other',
                content: [
                    {
                        type: 'images-grid',
                        size: 'auto',
                        content: [
                            { src: rito6, alt: 'Rito 6' },
                            { src: rito7, alt: 'Rito 7' },
                            { src: rito8, alt: 'Rito 8' }
                        ]
                    },
                    {
                        type: 'image',
                        content: { src: rito9, alt: 'Rito 9', size: 'auto' }
                    }
                ]
            }
        ]
    }
};

export default rito;
