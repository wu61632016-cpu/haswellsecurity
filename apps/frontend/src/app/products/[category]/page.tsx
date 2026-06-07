import { productCategories, products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return productCategories.map((item) => ({ category: item.slug }));
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = productCategories.find((item) => item.slug === resolvedParams.category);
  
  if (!category) notFound();

  // 筛选出属于当前分类的所有产品
  const categoryProducts = products.filter((item) => item.category === resolvedParams.category);

  return (
    <main className="bg-slate-50 py-16 lg:py-24">
      <div className="container">
        {/* 分类页头面包屑及描述 */}
        <div className="border-b border-slate-200 pb-8">
          <Link href="/products" className="text-sm font-semibold tracking-wider uppercase text-primary hover:underline">
            ← Back to All Products
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">{category.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{category.description}</p>
        </div>

        {/* 产品卡片展示网格 */}
        <div className="mt-12">
          {categoryProducts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {categoryProducts.map((product) => (
                <div key={product.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                  {/* 产品图片展示区 */}
                  <div className="relative flex aspect-square items-center justify-center bg-slate-50 p-8 border-b border-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* 产品基础信息 */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-primary uppercase">
                        Model: {product.model}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-slate-900 line-clamp-2 leading-snug">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500 line-clamp-3">
                      {product.summary}
                    </p>

                    {/* 技术参数表格规格区 */}
                    <div className="mt-6 flex-1 border-t border-slate-100 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Specifications:</h4>
                      <dl className="mt-3 space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-xs leading-5">
                            <dt className="font-medium text-slate-500">{key}:</dt>
                            <dd className="text-right font-semibold text-slate-700 pl-4">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* 询盘动作按钮 */}
                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <Link
                        href={`/contact?model=${encodeURIComponent(product.model)}`}
                        className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-opacity-95"
                      >
                        Inquire Now &amp; Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 暂无产品时的友好提示和后端配置建议 */
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center max-w-2xl mx-auto">
              <span className="text-4xl">📦</span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">No products uploaded yet</h3>
              <p className="mt-2 text-sm text-slate-500">
                We are currently uploading our latest portfolio for {category.title}. 
                You can easily add products directly in the CMS backend or append static items inside the local config.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Link href="/contact" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">
                  Send OEM Inquiry
                </Link>
                <a 
                  href="https://github.com/wu61632016-cpu/haswell-security-v6.1-source" 
                  target="_blank" 
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  View Source Code
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
