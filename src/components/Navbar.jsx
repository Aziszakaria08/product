export const Navbar = ({ products }) => {
    const navItems = [
        { label: "Shop", link: "#" },
        { label: "Newstand", link: "#" },
        { label: "Who we are", link: "#" },
        { label: "My profile", link: "#" },
    ];
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center lg:mx-24 md:mx-0 md:my-8">
                <h1 className="font-serif font-medium lg:text-3xl text-button md:text-2xl">
                    World Peas
                </h1>
                <nav className="flex">
                    <NavList items={navItems} />
                    <Button products={products} />
                </nav>
            </div>
        </div>
    );
};

const NavList = ({ items }) => {
    // console.log(items);
    return (
        <ul className="flex items-center justify-center">
            {items.map((item, index) => {
                return (
                    <li
                        key={index}
                        className="lg:text-base lg:px-8 lg:mx-0  md:mx-2 md:text-sm  md:px-3"
                    >
                        <a href={item.link} className="p-4 ">
                            {item.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

const Button = ({ products }) => {
    return (
        <a
            href=""
            className=" bg-button rounded-lg lg:text-base text-primary font-semibold lg:py-4 lg:px-8 md:text-sm md:py-2 md:px-3"
        >
            Basket({products.length})
        </a>
    );
};
