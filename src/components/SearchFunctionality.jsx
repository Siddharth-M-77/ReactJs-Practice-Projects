import React, { useState } from 'react'

const SearchFunctionality = () => {
    const [categery, setCategory] = useState("")

    const products = [
        { id: 1, name: "Apple iPhone 14", category: "Mobile", price: "$999", image: "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" },
        { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: "$849", image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-plus-lavender-render-1.jpg" },
        { id: 3, name: "Sony WH-1000XM5 Headphones", category: "Accessories", price: "$399", image: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg" },
        { id: 4, name: "Apple MacBook Pro", category: "Laptop", price: "$1999", image: "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg" },
        { id: 5, name: "Dell XPS 13", category: "Laptop", price: "$1399", image: "https://microless.com/cdn/products/ed1893149ad867b15577c751758393d9-hi.jpg" },
        { id: 6, name: "Samsung 4K UHD TV", category: "TV", price: "$599", image: "https://www.bhphotovideo.com/images/images2500x2500/samsung_qn55q70aafxza_q70a_55_class_hdr_1620612.jpg" },
        { id: 7, name: "Sony WH-1000XM5 Headphones", category: "Accessories", price: "$399", image: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg" },
        { id: 8, name: "Apple MacBook Pro", category: "Laptop", price: "$1999", image: "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg" },
        { id: 9, name: "Dell XPS 13", category: "Laptop", price: "$1399", image: "https://microless.com/cdn/products/ed1893149ad867b15577c751758393d9-hi.jpg" },
    ];
    const [query, setQuery] = useState(null)

    const handleChange = (e) => {
        setQuery(e.target.value)

    }
    const category = products.map((p) => p.category)
    const uniqueCategory = [...new Set(category)]

    const filterProducts = products.filter((p) => {
        const matchSearches = p.name.toLowerCase().includes(query || "")
        const matchCategory = categery ? p.category.toLowerCase() === categery.toLowerCase() : true
        return matchSearches && matchCategory

    })

    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h1 className='text-6xl text-center pt-6 mb-5'>Products</h1>
            <div className='flex items-center hustify-center gap-20 mb-5'>
                <input onChange={handleChange} type="text" className='p-3 focus:ring-2 focus:ring-indigo-500 bg-white max-w-xl ' placeholder='serach' />
                <select onChange={(e) => setCategory(e.target.value)} className='p-3'>
                    <option value="">All Categories</option>
                    {
                        uniqueCategory.map((c) => {
                            return <option value={c}>{c}</option>

                        })
                    }
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4'>
                {filterProducts.map((p) => {
                    return (
                        <div key={p.id} className='w-72  bg-white shadow-xl rounded-3xl p-3'>
                            <img src={p.image} className='w-full h-42 object-cover rounded-xl' alt={p.name} />
                            <h1 className="text-xl font-semibold mt-2">{p.name}</h1>
                            <h2 className="text-lg text-gray-600">{p.price}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchFunctionality;
