import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [enrolledCourses, setEnrolledCourses] = useState([
    { title: "Introduction to JavaScript" },
    { title: "Advanced React" },
  ]);

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    setEditMode(false);
    // Save user information logic here
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Profile</h1>
        <div className="flex items-center space-x-4">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            {editMode ? (
              <>
                <Input
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <Input
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </>
            ) : (
              <>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </>
            )}
          </div>
        </div>
        <Button onClick={editMode ? handleSave : handleEdit}>
          {editMode ? "Save" : "Edit Profile"}
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Enrolled Courses</h2>
        <div className="space-y-2">
          {enrolledCourses.map((course, index) => (
            <Card key={index}>
              <CardContent>
                <p>{course.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;