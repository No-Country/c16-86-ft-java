import Rating from "./Rating"

function Review() {
    return (
        <div className="w-full bg-gray-100 flex flex-col px-8 py-10 gap-5 sm:flex-row">
            <Rating/>
            <Rating/>
        </div>
    )
}

export default Review
