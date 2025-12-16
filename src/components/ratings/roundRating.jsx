const RoundStarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 mt-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`material-symbols-outlined text-sm ${
            index < Math.round(rating)
              ? "text-yellow-500"
              : "text-gray-300"
          }`}
        >
          star
        </span>
      ))}

      <span className="text-sm text-gray-500 ml-2">
        {rating}
      </span>
    </div>
  );
};

export default RoundStarRating;
