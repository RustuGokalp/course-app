const Courses = ({ courses }) => {
  return (
    <div>
      <div>
        {courses.map((course) => (
          <div key={course.id}>{course.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
