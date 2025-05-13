import React, { useState } from "react";
import { Course } from "@/types/course";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play, Check, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface EnrolledCourseContentProps {
  course: Course;
}

const EnrolledCourseContent = ({ course }: EnrolledCourseContentProps) => {
  const [activeLesson, setActiveLesson] = useState<{
    sectionIndex: number;
    lessonIndex: number;
    title: string;
    videoUrl: string;
  } | null>(null);
  
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

  // Sample video URLs for fallback
  const fallbackVideos = [
    "https://www.youtube.com/embed/jNQXAC9IVRw", // First YouTube video
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Popular YouTube video
    "https://www.youtube.com/embed/C0DPdy98e4c", // Another sample video
    "https://www.youtube.com/embed/9ZfN87gSjvI"  // Additional video
  ];

  const handleLessonClick = (sectionIndex: number, lessonIndex: number) => {
    const lesson = course.curriculum[sectionIndex].lessons[lessonIndex];
    
    // Get video URL with fallbacks
    let videoUrl = lesson.videoUrl || course.demoVideo;
    
    if (!videoUrl) {
      // Use fallback video from the array based on lesson index to provide variety
      const fallbackIndex = (sectionIndex + lessonIndex) % fallbackVideos.length;
      videoUrl = fallbackVideos[fallbackIndex];
      toast({
        title: "Using sample video",
        description: "This lesson's actual video content is not available. Showing a sample video instead.",
        duration: 3000,
      });
    }
    
    // Convert regular YouTube URLs to embed URLs if needed
    if (videoUrl.includes('youtube.com/watch?v=')) {
      // Extract video ID from regular YouTube URL
      const videoId = new URL(videoUrl).searchParams.get('v');
      if (videoId) {
        videoUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    } else if (videoUrl.includes('youtu.be/')) {
      // Handle youtu.be short links
      const videoId = videoUrl.split('/').pop();
      if (videoId) {
        videoUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }
    
    setActiveLesson({
      sectionIndex,
      lessonIndex,
      title: lesson.title,
      videoUrl
    });
    setVideoDialogOpen(true);
  };

  const renderVideo = (url: string) => {
    // Handle YouTube embed URLs
    if (url.includes('youtube.com/embed/')) {
      return (
        <iframe 
          src={url}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        ></iframe>
      );
    } 
    // Handle direct video files
    else {
      return (
        <video 
          src={url} 
          controls 
          autoPlay
          className="w-full h-full"
          playsInline
        >
          Your browser does not support the video tag.
          <a href={url} target="_blank" rel="noopener noreferrer">Open video in new tab</a>
        </video>
      );
    }
  };

  // Track lesson completion (simplified version - in a real app this would use an API)
  const markLessonCompleted = (lessonId: string) => {
    // Get existing completed lessons
    const storedProgress = localStorage.getItem(`course-${course.id}-progress`);
    let completedLessons: string[] = [];
    if (storedProgress) {
      completedLessons = JSON.parse(storedProgress);
    }
    
    // Add this lesson if not already completed
    if (!completedLessons.includes(lessonId)) {
      completedLessons.push(lessonId);
      localStorage.setItem(`course-${course.id}-progress`, JSON.stringify(completedLessons));
      
      // Calculate and update progress percentage
      const totalLessons = course.curriculum.reduce((total, section) => 
        total + section.lessons.length, 0);
      const progressPercent = Math.round((completedLessons.length / totalLessons) * 100);
      
      toast({
        title: "Progress saved",
        description: `You've completed ${progressPercent}% of this course.`,
        duration: 3000,
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Course Header */}
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-4 gap-y-2">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Content */}
      <Tabs defaultValue="curriculum">
        <TabsList className="mb-6">
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="curriculum">
          <Accordion type="single" collapsible className="border rounded-md overflow-hidden">
            {course.curriculum.map((section, sectionIndex) => (
              <AccordionItem value={`section-${sectionIndex}`} key={sectionIndex}>
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
                        className="flex items-center justify-between py-3 px-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleLessonClick(sectionIndex, lessonIndex)}
                      >
                        <div className="flex items-center">
                          <Play className="h-4 w-4 text-learnify-primary mr-3" />
                          <span className="text-learnify-primary">
                            {lesson.title}
                          </span>
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
        </TabsContent>
        
        <TabsContent value="overview">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Course Overview</h3>
              <p className="mb-4">{course.description}</p>
              
              <h4 className="font-bold mb-3 mt-6">What You'll Learn</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-learnify-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => {
                  if (course.curriculum.length > 0 && course.curriculum[0].lessons.length > 0) {
                    handleLessonClick(0, 0);
                  }
                }}
                className="mt-4"
              >
                <Play className="mr-2 h-4 w-4" />
                Start First Lesson
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Course Resources</h3>
              <p className="text-gray-600 mb-6">Download supplementary materials to enhance your learning experience.</p>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-md flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-learnify-light p-2 rounded mr-3">
                      <BookOpen className="h-5 w-5 text-learnify-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Course Workbook</h4>
                      <p className="text-sm text-gray-500">PDF • 2.4 MB</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
                
                <div className="p-4 border rounded-md flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-learnify-light p-2 rounded mr-3">
                      <BookOpen className="h-5 w-5 text-learnify-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Exercise Files</h4>
                      <p className="text-sm text-gray-500">ZIP • 5.7 MB</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <DialogTitle className="sr-only">Lesson Video</DialogTitle>
          <DialogDescription className="sr-only">
            Video content for the selected lesson
          </DialogDescription>
          <div className="absolute top-2 right-2 z-10">
            <DialogClose 
              className="rounded-full h-8 w-8 flex items-center justify-center bg-black/60 text-white hover:bg-black/80"
              onClick={() => {
                if (activeLesson) {
                  markLessonCompleted(
                    course.curriculum[activeLesson.sectionIndex].lessons[activeLesson.lessonIndex].id
                  );
                }
              }}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          <div className="w-full aspect-video">
            {activeLesson && (
              <>
                <div className="px-4 py-2 bg-black/80 text-white">
                  <h3 className="text-lg font-medium">{activeLesson.title}</h3>
                </div>
                {renderVideo(activeLesson.videoUrl)}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnrolledCourseContent;
