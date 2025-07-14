import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="hidden px-10 sm:flex">
            <ul className="flex space-x-6 md:space-x-12 font-sansita text-xl">
                <li><Link href="/guildcard">Guild Card</Link></li>
                <li><Link href="/questboard">Quest Board</Link></li>
                <li><Link href="/tavern">Tavern</Link></li>
                <li><Link href="/reception">Reception</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;