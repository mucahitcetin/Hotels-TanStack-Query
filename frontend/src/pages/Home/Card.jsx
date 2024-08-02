import { Link } from "react-router-dom";
import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Card = ({ place }) => {
  //ratin değerini farklı renklerle gösterme
  const color =
    place.rating >= 4
      ? "bg-green-500"
      : place.rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";
  return (
    <Link
      to={"/"}
      className="border rounded-md p-4 grid grid-cols-6 gap-3 min-h-[300px] cursor-pointer"
    >
      <div className="col-span-2">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={place.image_url}
        />
      </div>

      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl">{place.name}</h1>
            {place.availability ? (
              <MdEventAvailable className="text-xl text-green-700" />
            ) : (
              <CgUnavailable className="text-xl text-red-700" />
            )}
          </div>
          <p>{place.location}</p>
          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span className="border p-1 rounded-md" key={key}>
                {i}
              </span>
            ))}
          </div>
          <p className={`${color} p-1 rounded-lg text-white font-bold w-fit`}>
            {place.rating}
          </p>
        </div>

        <div className="flex flex-col items-end self-end">
          <span className="text-2xl font-bold">{place.price_per_night}$</span>
          <span className="text-xs text-gray-400">
            vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
