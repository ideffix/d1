import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query LogoQuery {
        file(relativePath: { eq: "images/logo.svg" }) {
            publicURL
        }
    }
`;

const MENU_ITEMS = [
    { text: 'O nas', href: '#onas' },
    { text: 'Wykonane prace', href: '#prace' },
    { text: 'Sprzęt', href: '#sprzet' },
    { text: 'Cennik', href: '#cennik' },
    { text: 'Jak trafić', href: '#mapa' },
    { text: 'Kontakt', href: '#kontakt' },
];

const NavBar = () => {
    const data = useStaticQuery(query);

    return (
        <nav className="absolute w-full top-0 left-0 p-5 pl-8 pr-8 flex justify-between">
            <img src={data.file.publicURL} alt="logo" width={200} />
            <div className="flex">
                {MENU_ITEMS.map((item) => (
                    <MenuItem key={item.href} {...item} />
                ))}
            </div>
        </nav>
    );
};

const MenuItem = ({ text, href }) => (
    <a className="pl-6 text-xl text-white cursor-pointer" href={href}>
        <span className="menu-item relative">{text}</span>
    </a>
);

export default NavBar;
