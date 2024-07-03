import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to CodeLearn</h1>
        <p className="text-lg text-muted-foreground">
          Learn coding from the best instructors online.
        </p>
        <Button onClick={() => navigate("/courses")}>Get Started</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Example course cards */}
          <Card>
            <CardHeader>
              <CardTitle>Introduction to JavaScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn the basics of JavaScript, the most popular programming language.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Advanced React</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Take your React skills to the next level with advanced concepts and techniques.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Python for Data Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Master Python and its libraries to analyze and visualize data.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <p>"CodeLearn has transformed my career. The courses are top-notch!" - Jane Doe</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>"The instructors are very knowledgeable and the content is easy to follow." - John Smith</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center space-y-2">
        <p>&copy; 2023 CodeLearn. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-primary">About</a>
          <a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a>
          <a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
          <a href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;