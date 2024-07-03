import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { title: "Introduction to JavaScript", description: "Learn the basics of JavaScript.", instructor: "Jane Doe" },
    { title: "Advanced React", description: "Take your React skills to the next level.", instructor: "John Smith" },
    { title: "Python for Data Science", description: "Master Python for data analysis.", instructor: "Alice Johnson" },
    // Add more courses as needed
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Courses</h1>
        <Input
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
              <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Courses;