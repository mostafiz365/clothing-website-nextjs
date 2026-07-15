import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from '@gravity-ui/icons';
import ProductActions from '@/components/ProductActions';

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://clothing-website-nextjs.vercel.app/data.json');
  const products = await res.json();
  const product = products.find(item => item.id == id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white !text-neutral-900">
        <p className="text-sm font-bold tracking-widest uppercase">Product Not Found</p>
      </div>
    );
  }

  const {
    name,
    category,
    price,
    image,
    rating,
    colors,
    sizes,
    inStock,
    description
  } = product;

  return (
    <main className="min-h-screen !bg-white py-16 text-neutral-900 sm:py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <Link
            href="/products" 
            className="inline-flex items-center gap-2 font-bold tracking-[0.2em] uppercase text-neutral-500 transition-colors hover:text-neutral-950"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>
        
        {/* Two-Column Premium Layout */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6">
            <div className="border border-neutral-100 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/10">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                <Image
                  src={image}
                  alt={name}
                  width={600}
                  height={800}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:pl-6">
            
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400">
                {category}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl uppercase">
              {name}
            </h1>

            <div className="mt-4 flex items-center gap-6">
              <p className="text-2xl font-black text-neutral-950">
                ৳{price}
              </p>
              <div className="flex items-center gap-1.5 border-l border-neutral-200 pl-6">
                <span className="text-amber-500">★</span>
                <span className="text-xs font-bold tracking-wider text-neutral-700">{rating} / 5.0</span>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-neutral-500">
              {description}
            </p>

            {/* Color Selection UI */}
            {colors && colors.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Available Colors</h4>
                <div className="mt-3 flex gap-3">
                  {colors.map((color, index) => (
                    <span 
                      key={index} 
                      className="border border-neutral-900 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-neutral-900 bg-white"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection UI */}
            {sizes && sizes.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Select Size</h4>
                <div className="mt-3 flex gap-3">
                  {sizes.map((size, index) => (
                    <button 
                      key={index} 
                      className="p-4 border border-neutral-200 text-xs font-bold transition-all hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <ProductActions product={product} />

          </div>

        </div>

      </div>
    </main>
  );
};

export default ProductDetailsPage;