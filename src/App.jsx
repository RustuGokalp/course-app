import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./Courses";

function App() {
  const [allCourses, setAllCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setAllCourses(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div>
      <Courses courses={allCourses} />
    </div>
  );
}

export default App;
