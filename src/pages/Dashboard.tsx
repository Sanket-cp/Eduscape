
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Award, 
  Search, 
  BarChart3, 
  Settings, 
  LogOut, 
  PlayCircle 
} from "lucide-react";
import { Course } from "@/types/course";
import { UserProgress } from "@/types/course";
import { courses } from "@/data/courses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user progress data
const mockUserProgress: UserProgress[] = [
  {
    courseId: "1",
    completedLessons: ["1-1", "1-2"],
    progress: 15,
    lastAccessed: "2023-04-15T14:30:00Z",
    location: "India" // Added location field
  },
  {
    courseId: "2",
    completedLessons: ["1-1"],
    progress: 5,
    lastAccessed: "2023-04-16T10:15:00Z",
    location: "India" // Added location field
  }
];

const Dashboard = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  
  // Simulate fetching user's enrolled courses and progress
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchUserCourses = () => {
      // For demo purposes, we'll use the first 2 courses from our mock data
      setEnrolledCourses(courses.slice(0, 2));
      setUserProgress(mockUserProgress);
    };
    
    fetchUserCourses();
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  // Redirect if not authenticated - FIXED: Moving this after all hooks are called
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-white border-b">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-learnify-primary/10 flex items-center justify-center mr-4 overflow-hidden">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user?.name} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-learnify-primary">
                      {user?.name?.charAt(0) || 'R'}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {user?.name}</h1>
                  <p className="text-gray-600">Continue your learning journey</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/profile-settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Profile Settings
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={logout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Enrolled Courses</p>
                    <h3 className="text-3xl font-bold">{enrolledCourses.length}</h3>
                  </div>
                  <div className="bg-learnify-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-learnify-primary" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Hours Learned</p>
                    <h3 className="text-3xl font-bold">12.5</h3>
                  </div>
                  <div className="bg-learnify-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-learnify-primary" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Certificates</p>
                    <h3 className="text-3xl font-bold">0</h3>
                  </div>
                  <div className="bg-learnify-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-learnify-primary" />
                  </div>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="my-courses">
              <TabsList className="mb-8">
                <TabsTrigger value="my-courses">My Courses</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-courses">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search courses..."
                        className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-learnify-primary focus:border-transparent"
                      />
                    </div>
                    <select className="border rounded-md text-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-learnify-primary focus:border-transparent">
                      <option value="all">All Courses</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                
                {enrolledCourses.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {enrolledCourses.map((course) => {
                      const progress = userProgress.find(p => p.courseId === course.id);
                      return (
                        <div key={course.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                          <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="md:col-span-1">
                              <img 
                                src={course.thumbnail} 
                                alt={course.title} 
                                className="w-full h-full object-cover"
                                style={{ maxHeight: '200px' }}
                              />
                            </div>
                            <div className="md:col-span-3 p-6">
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-xl font-bold mb-2 md:mb-0">{course.title}</h3>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-gray-500 mr-1" />
                                  <span className="text-sm text-gray-500 mr-4">
                                    Last accessed: {progress ? formatDate(progress.lastAccessed) : "Never"}
                                  </span>
                                  <Button asChild variant="outline" size="sm">
                                    <Link to={`/courses/${course.id}`}>
                                      View Course
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Progress</span>
                                  <span>{progress ? progress.progress : 0}%</span>
                                </div>
                                <div className="progress-bar">
                                  <div 
                                    className="progress-value" 
                                    style={{ width: `${progress ? progress.progress : 0}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center">
                                  <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                                  <span className="text-sm">{course.lessons} lessons</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                                  <span className="text-sm">{course.duration}</span>
                                </div>
                              </div>
                              
                              <Button asChild>
                                <Link to={`/courses/${course.id}`} className="flex items-center">
                                  <PlayCircle className="mr-2 h-4 w-4" />
                                  Continue Learning
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white border rounded-lg">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No courses yet</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't enrolled in any courses yet. Start learning today!
                    </p>
                    <Button asChild>
                      <Link to="/courses">Browse Courses</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="certificates">
                <div className="text-center py-16 bg-white border rounded-lg">
                  <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No certificates yet</h3>
                  <p className="text-gray-600 mb-6">
                    Complete a course to earn your first certificate!
                  </p>
                  <Button asChild>
                    <Link to="/courses">Browse Courses</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
