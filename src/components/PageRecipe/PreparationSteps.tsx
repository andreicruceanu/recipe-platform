type Steps = {
  _id: string;
  stepNumber: number;
  description: string;
};

type RecipeDetailsProps = {
  steps: Steps[];
};

const PreparationSteps: React.FC<RecipeDetailsProps> = ({ steps }) => {
  return (
    <div className="mt-4 w-full md:w-11/12">
      <p className="text-xl font-bold mb-3">Preparare</p>
      {steps.map((step) => (
        <div className="mb-6" key={step._id}>
          <span className="text-2xl font-bold text-blue-400">
            {step.stepNumber}
          </span>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export { PreparationSteps };
