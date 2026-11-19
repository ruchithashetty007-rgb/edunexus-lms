import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Brain,
  Database,
  Palette,
  BarChart,
  Globe
} from "lucide-react";

import { supabase } from "../supabaseClient";

const courses = [
  {
    id: 1,
    title: "Python Programming",
    category: "Programming",
    description: "Learn Python fundamentals, functions, and object-oriented programming.",
    icon: <Code size={35} />,
    color: "course-blue"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    category: "AI & Technology",
    description: "Explore AI concepts, intelligent systems, and machine learning basics.",
    icon: <Brain size={35} />,
    color: "course-purple"
  },
  {
    id: 3,
    title: "Database Management",
    category: "Computer Science",
    description: "Understand databases, SQL queries, and data management.",
    icon: <Database size={35} />,
    color: "course-green"
  },
  {
    id: 4,
    title: "UI/UX Design",
    category: "Design",
    description: "Discover design principles and create user-friendly interfaces.",
    icon: <Palette size={35} />,
    color: "course-purple"
  },
  {
    id: 5,
    title: "Data Analytics",
    category: "Data Science",
    description: "Learn how to analyze, visualize, and interpret data.",
    icon: <BarChart size={35} />,
    color: "course-blue"
  },
  {
    id: 6,
    title: "Web Development",
    category: "Development",
    description: "Build modern websites using HTML, CSS, and JavaScript.",
    icon: <Globe size={35} />,
    color: "course-green"
  }
];

function Courses() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingCourse, setLoadingCourse] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("User check error:", error.message);
        return;
      }

      if (data.user) {
        setUser(data.user);

        const { data: enrollments, error: enrollmentError } =
          await supabase
            .from("enrollments")
            .select("course_id")
            .eq("student_id", data.user.id);

        if (enrollmentError) {
          console.error("Enrollment fetch error:", enrollmentError.message);
          return;
        }

        setEnrolledCourses(
          enrollments.map((item) => Number(item.course_id))
        );
      }
    };

    checkUser();
  }, []);

  const handleEnroll = async (courseId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (enrolledCourses.includes(courseId)) {
      alert("You are already enrolled in this course!");
      return;
    }

    setLoadingCourse(courseId);

    const { error } = await supabase
      .from("enrollments")
      .insert([
        {
          student_id: user.id,
          course_id: courseId
        }
      ]);

    setLoadingCourse(null);

    if (error) {
      if (error.code === "23505") {
        alert("You are already enrolled in this course!");
        setEnrolledCourses((prev) => [...prev, courseId]);
      } else {
        alert("Enrollment failed: " + error.message);
      }

      return;
    }

    setEnrolledCourses((prev) => [...prev, courseId]);

    alert("Successfully enrolled in the course!");
  };

  return (
    <section className="courses-section">
      <div className="section-heading">
        <span className="section-label">OUR COURSES</span>

        <h2>Explore Our Courses</h2>

        <p>
          Discover new skills, explore exciting subjects, and take
          the next step in your learning journey.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className={`course-image ${course.color}`}>
              {course.icon}
            </div>

            <div className="course-details">
              <span className="course-category">
                {course.category}
              </span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="courses-action">
                <button
                  className="primary-btn"
                  onClick={() => handleEnroll(course.id)}
                  disabled={loadingCourse === course.id}
                >
                  {loadingCourse === course.id
                    ? "Enrolling..."
                    : enrolledCourses.includes(course.id)
                    ? "Enrolled ✓"
                    : "Enroll Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;