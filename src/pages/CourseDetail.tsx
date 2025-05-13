
import React, { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCourseById } from "@/data/courses";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  Check, 
  Play, 
  ShoppingCart, 
  AlertCircle,
  Lock,
  X,
  BookOpenCheck
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || "");
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isEnrolled, setIsEnrolled] = useState(false);
  
  // Convert price to Indian Rupees (1 USD = ~75 INR as an example conversion rate)
  const priceInRupees = course ? course.price * 75 : 0;
  
  React.useEffect(() => {
    if (isAuthenticated && user) {
      const enrolledCourses = localStorage.getItem('enrolledCourses');
      if (enrolledCourses) {
        const courseIds = JSON.parse(enrolledCourses);
        setIsEnrolled(courseIds.includes(id));
      }
    }
  }, [isAuthenticated, user, id]);

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
              <Link to="/courses">Browse All Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleEnroll = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please login or register to enroll in this course.",
        variant: "destructive",
      });
      navigate(`/login?redirect=courses/${course.id}`);
      return;
    }

    if (isEnrolled) {
      navigate(`/course-view/${course.id}`);
      return;
    }

    navigate(`/checkout/${course.id}`);
  };

  const openVideoDialog = () => {
    setVideoDialogOpen(true);
  };

  const closeVideoDialog = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-learnify-primary text-white text-sm font-medium px-3 py-1 rounded-full mr-2">
                    {course.category}
                  </span>
                  <span className="bg-learnify-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-gray-300 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap items-center text-gray-300 text-sm mb-6 gap-x-4 gap-y-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="mr-1">{course.rating}</span>
                    <span>Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.enrolled.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                
                <p className="mb-6">Created by <span className="font-medium">{course.instructor}</span></p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {isEnrolled ? (
                    <Button 
                      onClick={() => navigate(`/course-view/${course.id}`)}
                      size="lg" 
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <BookOpenCheck className="mr-2 h-5 w-5" />
                      Go to Course
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleEnroll}
                      size="lg" 
                      className="bg-learnify-primary hover:bg-learnify-primary/90"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {course.isFree ? "Enroll for Free" : `Enroll for ₹${priceInRupees.toFixed(2)}`}
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                  <button 
                    className="bg-white/90 hover:bg-white text-learnify-primary p-4 rounded-full"
                    onClick={openVideoDialog}
                  >
                    <Play className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview">
                  <TabsList className="mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview">
                    <div className="space-y-8">
                      {course.demoVideo && (
                        <div>
                          <h3 className="text-2xl font-bold mb-4">Course Introduction</h3>
                          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <video 
                              src={course.demoVideo} 
                              controls 
                              poster={course.thumbnail}
                              className="w-full h-full"
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-learnify-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Course Description</h3>
                        <div className={`prose max-w-none ${!showMore && 'max-h-64 overflow-hidden relative'}`}>
                          <p className="mb-4">
                            Welcome to {course.title}, a comprehensive course designed to take you from beginner to expert. 
                            This course is packed with practical examples, exercises, and projects to ensure you not only 
                            understand the concepts but can apply them in real-world scenarios.
                          </p>
                          <p className="mb-4">
                            Whether you're looking to enhance your current skills or embark on a new career path, 
                            this course provides all the tools and knowledge you need to succeed. Our curriculum is 
                            carefully structured to build upon concepts gradually, ensuring a smooth learning experience.
                          </p>
                          <p className="mb-4">
                            By the end of this course, you'll have the confidence and expertise to tackle complex problems 
                            in {course.category}. You'll also have a portfolio of projects that demonstrate your abilities 
                            to potential employers or clients.
                          </p>
                          <p className="mb-4">
                            Our instructor, {course.instructor}, brings years of industry experience to the classroom. 
                            Their practical insights and teaching approach make complex concepts accessible and engaging.
                          </p>
                          <p>
                            Join the {course.enrolled.toLocaleString()} students who have already transformed their skills 
                            and careers through this course. We can't wait to see what you'll achieve!
                          </p>
                          
                          {!showMore && (
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                          )}
                        </div>
                        {!showMore && (
                          <Button 
                            variant="ghost" 
                            onClick={() => setShowMore(true)}
                            className="mt-2"
                          >
                            Show more
                          </Button>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="curriculum">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Course Curriculum</h3>
                        <div className="text-sm text-gray-600">
                          {course.lessons} lessons • {course.duration} total
                        </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="border rounded-md overflow-hidden">
                        {course.curriculum.map((section, index) => (
                          <AccordionItem value={`section-${index}`} key={index}>
                            <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100">
                              <div className="flex justify-between items-center w-full pr-4">
                                <span className="font-semibold text-left">{section.title}</span>
                                <span className="text-sm text-gray-500">
                                  {section.lessons.length} lessons
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-0 pt-0 pb-0">
                              <div className="border-t">
                                {section.lessons.map((lesson, lessonIndex) => (
                                  <div 
                                    key={lessonIndex} 
                                    className="flex items-center justify-between py-3 px-4 border-b last:border-b-0 hover:bg-gray-50"
                                  >
                                    <div className="flex items-center">
                                      {lesson.isPreview || isEnrolled ? (
                                        <Play className="h-4 w-4 text-learnify-primary mr-3" />
                                      ) : (
                                        <Lock className="h-4 w-4 text-gray-400 mr-3" />
                                      )}
                                      <span className={(lesson.isPreview || isEnrolled) ? "text-learnify-primary" : "text-gray-700"}>
                                        {lesson.title}
                                      </span>
                                      {lesson.isPreview && !isEnrolled && (
                                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                          Preview
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                      {lesson.duration}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="instructor">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt={course.instructor}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                        <p className="text-gray-600 mb-4">Expert in {course.category} from Delhi, India</p>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-400 mr-1" />
                            <span className="font-medium">4.8</span>
                            <span className="text-gray-600 ml-1">Instructor Rating</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-gray-600 mr-1" />
                            <span className="font-medium">12,345</span>
                            <span className="text-gray-600 ml-1">Students</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-5 w-5 text-gray-600 mr-1" />
                            <span className="font-medium">15</span>
                            <span className="text-gray-600 ml-1">Courses</span>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          {course.instructor} is a renowned expert in {course.category} with over 10 years of industry experience in India. 
                          They have worked with leading companies across Mumbai, Bangalore, and Delhi, and have a passion for teaching complex concepts in an easy-to-understand manner.
                          Their courses have helped thousands of students across India advance their careers and master new skills.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white border rounded-lg overflow-hidden shadow-md sticky top-8">
                  <div className="p-6">
                    <div className="text-3xl font-bold text-learnify-primary mb-4">
                      {course.isFree ? "Free" : `₹${priceInRupees.toFixed(2)}`}
                    </div>
                    <Button 
                      onClick={handleEnroll}
                      className="w-full mb-4"
                    >
                      {isEnrolled ? (
                        <>
                          <BookOpenCheck className="mr-2 h-4 w-4" />
                          Go to Course
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {course.isFree ? "Enroll Now - Free" : "Enroll Now"}
                        </>
                      )}
                    </Button>
                    {!course.isFree && (
                      <p className="text-sm text-center text-gray-500 mb-6">
                        30-Day Money-Back Guarantee
                      </p>
                    )}
                    <hr className="mb-6" />
                    <h4 className="font-bold text-lg mb-4">This course includes:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                        <span>{course.lessons} lessons</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                        <span>{course.duration} of content</span>
                      </li>
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-learnify-primary mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <DialogTitle className="sr-only">Course Preview Video</DialogTitle>
          <DialogDescription className="sr-only">
            Preview video for {course.title}
          </DialogDescription>
          <div className="absolute top-2 right-2 z-10">
            <DialogClose className="rounded-full h-8 w-8 flex items-center justify-center bg-black/60 text-white hover:bg-black/80">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          <div className="w-full aspect-video">
            <video 
              ref={videoRef}
              src={course.demoVideo || "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"} 
              controls 
              autoPlay
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
