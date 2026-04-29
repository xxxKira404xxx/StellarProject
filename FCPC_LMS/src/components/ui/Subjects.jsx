import "./Subjects.css";

export default function Subjects() {
  const courses = [
    {
      title: "RPH ",
      avatars: ["/avatars/1.jpg", "/avatars/2.jpg"],
      othersCount: 34,
      fileCount: 10,
      teacher: "James Lebron",
    },
    {
      title: "ComProg I",
      avatars: ["/avatars/3.jpg", "/avatars/4.jpg"],
      othersCount: 28,
      fileCount: 8,
      teacher: "Allen Calvou",
    },
    {
      title: "English Literacy",
      avatars: ["/avatars/3.jpg", "/avatars/4.jpg"],
      othersCount: 30,
      fileCount: 4,
      teacher: "Alice Macer",
    },
  ];

  return (
    <div className="Courses_Bar">
      <div className="Courses_Container">
        <div className="Courses_TopBar">
          <h1>Courses</h1>
          <button>View All</button>
        </div>
        <section className="Course_Panel">
          {courses.map((course, i) => (
            <div className="Course_Title" key={i}>
              <h2>{course.title}</h2>

              <div className="Course_Avatars">
                {course.avatars.map((src, j) => (
                  <img key={j} src={src} alt="student" />
                ))}
                {course.othersCount > 0 && (
                  <span className="Avatar_Count">+{course.othersCount}</span>
                )}
              </div>

              <div className="Course_Meta">
                <div className="Course_Meta_Item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>{course.fileCount} Files</span>
                </div>
                <div className="Course_Meta_Item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                  <span>Teacher: {course.teacher}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}