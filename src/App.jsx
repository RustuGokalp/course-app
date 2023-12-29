import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = async (id) => {
    await axios.delete(`http://localhost:3000/courses/${id}`);
    const afterDeletedCourses = allCourses.filter((course) => course.id !== id);
    setAllCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setAllCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Courses courses={allCourses} removeCourse={deleteCourse} />
      )}
    </div>
  );
}

export default App;
