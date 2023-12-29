import Course from "./Course";

const Courses = ({ courses, removeCourse }) => {
  return (
    <div>
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div>
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
