import React from "react";
function CourseDetails(){
return(
<div className="course-section">
<h2>Available Courses</h2>
<div className="course-container">
<div className="course-card">
<h3>B.Tech</h3>
<p>Duration: 4 Years</p>
<p>Subjects: AI, Programming, Data Science</p>
<p>Career: Software Engineer</p>
</div>
<div className="course-card">
<h3>BCA</h3>
<p>Duration: 3 Years</p>
<p>Subjects: Web Dev, DBMS</p>
<p>Career: Developer</p>
</div>
<div className="course-card">
<h3>BBA</h3>
<p>Duration: 3 Years</p>
<p>Subjects: Marketing, Finance</p>
<p>Career: Business Manager</p>
</div>
</div>
</div>
)
}
export default CourseDetails;