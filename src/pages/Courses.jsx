import { Link } from "react-router-dom";
import {
  Code,
  Brain,
  Database,
  Palette,
  BarChart,
  Globe
} from "lucide-react";

const courses = [
  {
    title: "Python Programming",
    category: "Programming",
    description: "Learn Python fundamentals, functions, and object-oriented programming.",
    icon: <Code size={35} />,
    color: "course-blue"
  },
  {
    title: "Artificial Intelligence",
    category: "AI & Technology",
    description: "Explore AI concepts, intelligent systems, and machine learning basics.",
    icon: <Brain size={35} />,
    color: "course-purple"
  },
  {
    title: "Database Management",
    category: "Computer Science",
    description: "Understand databases, SQL queries, and data management.",
    icon: <Database size={35} />,
    color: "course-green"
  },
  {
    title: "UI/UX Design",
    category: "Design",
    description: "Discover design principles and create user-friendly interfaces.",
    icon: <Palette size={35} />,
    color: "course-purple"
  },
  {
    title: "Data Analytics",
    category: "Data Science",
    description: "Learn how to analyze, visualize, and interpret data.",
    icon: <BarChart size={35} />,
    color: "course-blue"
  },
  {
    title: "Web Development",
    category: "Development",
    description: "Build modern websites using HTML, CSS, and JavaScript.",
    icon: <Globe size={35} />,
    color: "course-green"
  }
];

function Courses() {
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
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
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
                <Link to="/login" className="primary-btn">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;