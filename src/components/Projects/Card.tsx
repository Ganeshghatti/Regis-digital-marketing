

const Card = ({ title, tag, image }:any) => {
  return (
    <div className="group relative w-64 h-80 overflow-hidden  transition-all">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-100 to-blue-200" />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Container */}
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        
        {/* Tag with pill design */}
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
          {tag}
        </span>
      </div>

   
    </div>
  );
};

export default Card;