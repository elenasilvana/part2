const ContentPart = ({ contentName, exercises }) => (
  <tr>
    <td>{contentName}</td>
    <td>{exercises}</td>
  </tr>
);

const Content = ({ courseContent }) => {
  const renderContent = () =>
    courseContent.map((course) => (
      <ContentPart
        key={course.id}
        contentName={course.name}
        exercises={course.exercises}
      />
    ));
  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Exercises</th>
        </tr>
      </thead>
      <tbody>{renderContent()}</tbody>
    </table>
  );
};

export default Content;
