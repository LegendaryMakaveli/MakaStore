const StarRating = ({ rating, size = "text-sm" }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const full = index + 1 <= rating;
        const half = index + 0.5 <= rating && index + 1 > rating;

        return (
          <span
            key={index}
            className={`material-symbols-outlined ${size} text-yellow-500 `}
          >
            {full ? "star" : half ? "star_half" : "star_outline"}
          </span>
        );
      })}

      <span className="ml-2 text-sm text-gray-500">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
