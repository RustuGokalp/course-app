import Course from "./Course";

const Courses = ({ courses, removeCourse }) => {
  return (
    <div>
      <div className="mb-12 mt-5 text-6xl text-white text-center">
        <h2>Kurslarım</h2>
      </div>
      <div className="flex flex-wrap">
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
