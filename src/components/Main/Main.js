import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

const Main = () => {
    const data = useStaticQuery(query);
    return (
        <main className="h-screen flex justify-center items-start text-white flex-col">
            <div className="pl-64">
                <div className="text-7xl font-bold tracking-wider">D1 Detailing</div>
                <div className="text-4xl italic">Z pasją do samochodów</div>
            </div>
            <img className="absolute bottom-0 right-0" src={data.file.childImageSharp.fluid.src} alt="car" />
        </main>
    );
};

export default Main;
