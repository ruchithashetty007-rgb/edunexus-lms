import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Code,
  Database,
  GraduationCap,
  PlayCircle,
  Star,
  Users,
  Zap,
} from "lucide-react";

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} />
            AI-Powered Learning Platform
          </div>

          <h1>
            Learn Without Limits.
            <span> Grow Without Boundaries.</span>
          </h1>

          <p>
            Discover new skills, learn from expert instructors, and
            achieve your goals with personalized AI-powered learning.
          </p>

          <div className="hero-buttons">
            <a href="/courses" className="primary-btn">
              Explore Courses <ArrowRight size={19} />
            </a>

            <a href="#features" className="secondary-btn">
              <PlayCircle size={19} /> Discover Features
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>10K+</h3>
              <p>Active Learners</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Online Courses</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Expert Teachers</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="learning-card">
            <div className="card-top">
              <div className="course-icon">
                <Code size={28} />
              </div>
              <span className="live-badge">Popular</span>
            </div>

            <h3>Full Stack Development</h3>
            <p>Master modern web development</p>

            <div className="course-progress">
              <div className="progress-info">
                <span>Course Progress</span>
                <strong>75%</strong>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="card-bottom">
              <div className="student-avatars">
                <span>R</span>
                <span>A</span>
                <span>S</span>
              </div>
              <span>2,400+ students</span>
            </div>
          </div>

          <div className="floating-card ai-card">
            <Brain size={22} />
            <div>
              <strong>AI Study Assistant</strong>
              <p>Ready to help you learn!</p>
            </div>
          </div>

          <div className="floating-card achievement-card">
            <GraduationCap size={23} />
            <div>
              <strong>Keep Learning!</strong>
              <p>Your future starts here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <p>YOUR JOURNEY TO SUCCESS STARTS HERE</p>
        <div className="trust-items">
          <span><Users size={19} /> Student Focused</span>
          <span><Brain size={19} /> AI Powered</span>
          <span><BookOpen size={19} /> Expert Courses</span>
          <span><CheckCircle size={19} /> Learn at Your Pace</span>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="section-label">WHY EDUNEXUS?</span>
          <h2>Everything You Need to Learn Better</h2>
          <p>
            Powerful learning tools designed to help students,
            teachers and lifelong learners succeed.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue-icon">
              <BookOpen size={27} />
            </div>
            <h3>Expert-Led Courses</h3>
            <p>
              Learn practical skills through structured courses
              created by experienced instructors.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple-icon">
              <Brain size={27} />
            </div>
            <h3>AI Study Assistant</h3>
            <p>
              Get instant explanations, study guidance and
              personalized learning support.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green-icon">
              <Database size={27} />
            </div>
            <h3>Learning Resources</h3>
            <p>
              Access notes, PDFs, video lectures and other
              useful learning materials.
            </p>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses-section" id="courses">
        <div className="section-heading">
          <span className="section-label">POPULAR COURSES</span>
          <h2>Explore What You Can Learn</h2>
          <p>
            Start building your future with in-demand skills.
          </p>
        </div>

        <div className="courses-grid">
          <div className="course-card">
            <div className="course-image course-blue">
              <Code size={55} />
            </div>
            <div className="course-details">
              <span className="course-category">Development</span>
              <h3>Complete Web Development</h3>
              <p>Learn HTML, CSS, JavaScript and React.</p>
              <div className="course-rating">
                <Star size={16} fill="currentColor" />
                4.9 <span>• Beginner Friendly</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-image course-purple">
              <Brain size={55} />
            </div>
            <div className="course-details">
              <span className="course-category">Artificial Intelligence</span>
              <h3>Introduction to AI & ML</h3>
              <p>Explore machine learning and AI concepts.</p>
              <div className="course-rating">
                <Star size={16} fill="currentColor" />
                4.8 <span>• Intermediate</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-image course-green">
              <Database size={55} />
            </div>
            <div className="course-details">
              <span className="course-category">Data Science</span>
              <h3>Python for Data Science</h3>
              <p>Analyze data and build practical projects.</p>
              <div className="course-rating">
                <Star size={16} fill="currentColor" />
                4.9 <span>• Beginner Friendly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="courses-action">
          <a href="/courses" className="primary-btn">
            View All Courses <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="ai-section" id="about">
        <div className="ai-content">
          <span className="section-label">LEARNING, REIMAGINED</span>
          <h2>
            Meet Your Personal
            <span> AI Study Assistant</span>
          </h2>
          <p>
            Learning becomes easier when you have the right support.
            Our AI assistant will help explain difficult topics,
            summarize study materials and generate practice quizzes.
          </p>

          <div className="ai-benefits">
            <div><CheckCircle size={19} /> Instant concept explanations</div>
            <div><CheckCircle size={19} /> Smart quiz generation</div>
            <div><CheckCircle size={19} /> Personalized study guidance</div>
          </div>

          <a href="/register" className="primary-btn">
            Start Learning <ArrowRight size={18} />
          </a>
        </div>

        <div className="ai-visual">
          <div className="chat-window">
            <div className="chat-header">
              <div className="chat-avatar"><Brain size={22} /></div>
              <div>
                <strong>EduNexus AI</strong>
                <p>● Online Assistant</p>
              </div>
            </div>

            <div className="chat-message">
              Hello! 👋 What would you like to learn today?
            </div>

            <div className="chat-user">
              Explain Artificial Intelligence in simple words.
            </div>

            <div className="chat-message">
              Artificial Intelligence is the ability of computers
              to perform tasks that usually require human intelligence.
              Let's explore it together!
            </div>

            <div className="chat-input">
              <span>Ask me anything...</span>
              <div><ArrowRight size={18} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div>
          <h2>Ready to Transform Your Learning Journey?</h2>
          <p>Take the next step towards your goals with EduNexus.</p>
          <a href="/register" className="cta-btn">
            Join EduNexus Today <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;