
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrolledCourseContent from "@/components/EnrolledCourseContent";
import { getCourseById } from "@/data/courses";
import { useAuth } from "@/contexts/AuthContext";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const CourseView = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || "");
  const { isAuthenticated } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (isAuthenticated) {
      // Check if user is enrolled in this course
      const enrolledCourses = localStorage.getItem('enrolledCourses');
      if (enrolledCourses) {
        const courseIds = JSON.parse(enrolledCourses);
        setIsEnrolled(courseIds.includes(id));
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, id]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-learnify-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course content...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    toast({
      title: "Authentication Required",
      description: "Please log in to access your enrolled courses.",
      variant: "destructive",
    });
    return <Navigate to={`/login?redirect=course-view/${id}`} replace />;
  }

  // Redirect if course not found
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Redirect if not enrolled
  if (!isEnrolled) {
    toast({
      title: "Not Enrolled",
      description: "You need to enroll in this course to access the content.",
      variant: "destructive",
    });
    return <Navigate to={`/courses/${id}`} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container-custom">
          <EnrolledCourseContent course={course} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseView;
