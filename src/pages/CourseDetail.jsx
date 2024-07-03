import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  const course = {
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript, the most popular programming language.",
    instructor: "Jane Doe",
    content: [
      "Introduction",
      "Variables and Data Types",
      "Functions and Scope",
      "DOM Manipulation",
      "Events",
      "ES6 Features",
    ],
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="text-lg text-muted-foreground">{course.description}</p>
        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
        <Button>Enroll Now</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Course Content</h2>
        <div className="space-y-2">
          {course.content.map((lesson, index) => (
            <Card key={index}>
              <CardContent>
                <p>{lesson}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;