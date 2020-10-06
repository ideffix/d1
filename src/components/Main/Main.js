import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../Button/Button';

const query = graphql`
    query BQuery {
        file(relativePath: { eq: "images/b.png" }) {
            childImageSharp {
                fluid {
                    src
                }
            }
        }
    }
`;

const ALL_WHEEL_ELEMENTS = [
    {
        text: 'Z pasją do samochodów',
        emoji: '🚗',
        ariaLabel: 'car',
    },
    {
        text: 'Jakiś inny text',
        emoji: '☔',
        ariaLabel: 'car',
    },
    {
        text: 'Coś tam innego',
        emoji: '🧽',
        ariaLabel: 'car',
    },
];

const Main = () => {
    const data = useStaticQuery(query);
    return (
        <main className="h-screen flex justify-center items-start text-white flex-col">
            <div className="pl-64">
                <div className="text-7xl font-bold tracking-wider">D1 Detailing</div>
                <TextWheel elements={ALL_WHEEL_ELEMENTS} timeout={2000} />
                <div className="flex justify-center mt-4">
                    <Button value="Sprawdź naszą oferte!" />
                </div>
            </div>
            <img className="absolute bottom-0 right-0" src={data.file.childImageSharp.fluid.src} alt="car" />
        </main>
    );
};

const TextWheel = ({ elements, timeout }) => {
    const [currentElementIndex, setCurrentElementIndex] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => {
            setCurrentElementIndex((i) => (i + 1 === elements.length ? 0 : i + 1));
        }, timeout);

        return () => clearTimeout(t);
    }, [currentElementIndex]);

    const transitions = useTransition(elements[currentElementIndex], (el) => el.emoji, {
        from: { opacity: 0, transform: 'translateY(40px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(-40px)', position: 'absolute' },
    });
    return transitions.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
            <div className="text-4xl flex items-center">
                <span className="italic">{item.text}</span>
                <span role="img" aria-label={item.ariaLabel}>
                    {item.emoji}
                </span>
            </div>
        </animated.div>
    ));
};

export default Main;
