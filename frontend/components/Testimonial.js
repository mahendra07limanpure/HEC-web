const Testimonial = ({ name, title, description, stars }) => {
  return (
    <div className="bg-white p-6">
      <div className="flex flex-col mb-4">
        <h3 className="font-bold text-black">{name}</h3>
        <p className="text-sm text-red-600 font-bold">{title}</p>
      </div>
      <p className="text-gray-600 mb-4">&ldquo;{description}&rdquo;</p>
      <div className="flex text-yellow-500">
        {[...Array(stars)].map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;