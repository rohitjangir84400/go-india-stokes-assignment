
export default function MarketCard({Data}) {
    return (
        <div className="h-90 sm:max-w-xl col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2 mt-3">
            <div className="block h-full w-full">
                <img className="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1660241588741-d653d53348fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                <div className="w-full bg-white p-4">
                    <p className="mb-2 text-xl font-medium text-gray-800">{Data.title}</p>
                    <p className="text-md font-light text-gray-400">{Data.content}</p>
                </div>
            </div>
        </div>
    );
}