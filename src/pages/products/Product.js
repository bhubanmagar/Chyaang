const products = [
  {
    id: 1,
    name: "Gurkhas and Guns ",
    href: "#",
    imageSrc:
      "https://onlineliquornepal.com/wp-content/uploads/2021/10/Buy-Gurkhas-and-Guns-Online-in-Nepal.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Rum",
  },
  {
    id: 2,
    name: " Old Durbar Black Chimney",
    href: "#",
    imageSrc:
      "https://onlineliquornepal.com/wp-content/uploads/2021/01/Buy-Old-Durbar-Black-Chimney-Online-in-Nepal.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Rum",
  },
  {
    id: 3,
    name: " Akira Red Wine",
    href: "#",
    imageSrc:
      "https://onlineliquornepal.com/wp-content/uploads/2022/12/Akira-Sweet-Red-Wine-750ML.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$45",
    color: "Wine",
  },
  {
    id: 4,
    name: "Budweiser ",
    href: "#",
    imageSrc:
      "https://onlineliquornepal.com/wp-content/uploads/2021/07/budweiser-bottle.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$5",
    color: "Beer",
  },
  {
    id: 5,
    name: "Coca-Cola ",
    href: "#",
    imageSrc:
      "https://onlineliquornepal.com/wp-content/uploads/2021/01/Coca-Cola.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$1",
    color: "Soft drinks",
  },
];

export default function Products() {
  return (
    <div className="bg-white" id="products">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Popular Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
