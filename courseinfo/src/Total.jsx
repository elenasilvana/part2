const Total = ({ courseContent }) => {
  const getTotal = (courseContent) => {
    return courseContent.reduce((total, part) => total + part.exercises, 0);
  };

  return (
    <p>
      <strong>Number of exercises {getTotal(courseContent)}</strong>
    </p>
  );
};

export default Total;
