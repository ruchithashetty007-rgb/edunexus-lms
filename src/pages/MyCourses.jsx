import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { BookOpen, GraduationCap, CalendarDays } from "lucide-react";
import "./MyCourses.css";

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMyCourses();
  }, []);

  async function fetchMyCourses() {
    try {
      const { data: { user }, error: userError } =
        await supabase.auth.getUser();

      if (userError) throw userError;

      if (!user) {
        setError("Please log in to view your courses.");
        return;
      }

      const { data, error: enrollmentError } = await supabase
        .from("enrollments")
        .select(`
          id,
          enrolled_at,
          courses (
            id,
            title,
            category,
            description
          )
        `)
        .eq("student_id", user.id);

      if (enrollmentError) throw enrollmentError;

      setCourses(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="mycourses-loading">
        Loading your courses...
      </div>
    );
  }

  return (
    <div className="mycourses-page">

      {/* Page Heading */}
      <div className="mycourses-header">
        <div>
          <span className="mycourses-label">LEARNING DASHBOARD</span>
          <h1>My Courses</h1>
          <p>Continue your learning journey with EduNexus.</p>
        </div>

        <div className="mycourses-header-icon">
          <GraduationCap size={45} />
        </div>
      </div>

      {/* Enrollment Summary */}
      <div className="mycourses-summary">
        <div className="mycourses-summary-icon">
          <BookOpen size={27} />
        </div>

        <div>
          <h2>{courses.length}</h2>
          <p>Enrolled Courses</p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mycourses-message">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!error && courses.length === 0 && (
        <div className="mycourses-empty">
          <BookOpen size={55} />
          <h2>No Courses Yet</h2>
          <p>
            You haven't enrolled in any courses.
            Explore our courses and start learning today!
          </p>
        </div>
      )}

      {/* Course Cards */}
      {!error && courses.length > 0 && (
        <>
          <div className="mycourses-section-heading">
            <h2>Your Learning</h2>
            <span>{courses.length} courses</span>
          </div>

          <div className="mycourses-grid">
            {courses.map((item) => {
              const course = item.courses;

              return course ? (
                <div className="mycourses-card" key={item.id}>

                  <div className="mycourses-card-icon">
                    <BookOpen size={32} />
                  </div>

                  <span className="mycourses-category">
                    {course.category}
                  </span>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="mycourses-card-footer">
                    <span>
                      <CalendarDays size={16} />
                      {new Date(
                        item.enrolled_at
                      ).toLocaleDateString()}
                    </span>

                    <span className="mycourses-enrolled">
                      ✓ Enrolled
                    </span>
                  </div>

                </div>
              ) : null;
            })}
          </div>
        </>
      )}

    </div>
  );
}

export default MyCourses;