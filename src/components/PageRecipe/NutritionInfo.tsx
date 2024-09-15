type NutritionDetail = {
  _id: string;
  name: string;
  value: string;
};

type NutritionInfoProps = {
  details: NutritionDetail[];
};

const NutritionInfo: React.FC<NutritionInfoProps> = ({ details }) => {
  return (
    <div className="bg-customBlue p-6 rounded-2xl w-full h-full">
      <p className="text-xl font-bold">Nutrition information</p>
      <div className="flex flex-col justify-between">
        <div className="mt-5">
          {details.map((items) => (
            <div
              key={items._id}
              className="flex justify-between items-center border-b py-2"
            >
              <p className="text-sm">{items.name}</p>
              <p className="text-sm font-semibold">{items.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { NutritionInfo };
