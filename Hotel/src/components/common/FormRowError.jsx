const FormRowError = ({ error }) => {
  if (error) {
    return (
      <>
        <span className="text-sm text-red-600 mt-2 ml-4">
          <div className="flex gap-2 items-center">{error.message}</div>
        </span>
      </>
    );
  } else return null;
};

export default FormRowError;
