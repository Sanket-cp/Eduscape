
import React from "react";
import { Link } from "react-router-dom";
import { Course } from "@/types/course";
import { Star, Clock, BookOpen, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Convert price to Indian Rupees (1 USD = ~75 INR as an example conversion rate)
  const priceInRupees = course.price * 75;

  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="h-full overflow-hidden card-hover">
        <div className="relative">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-48 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop";
            }}
          />
          <Badge className="absolute bottom-2 right-2 bg-learnify-primary text-white">
            {course.level}
          </Badge>
          {course.isFree && (
            <Badge className="absolute top-2 left-2 bg-learnify-secondary text-white">
              <Gift className="h-3 w-3 mr-1" />
              Free
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-learnify-light text-learnify-primary border-none">
              {course.category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold line-clamp-2 mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{course.description}</p>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span className="mr-3">{course.duration}</span>
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-learnify-primary font-bold">
              {course.isFree ? "Free" : `₹${priceInRupees.toFixed(2)}`}
            </div>
            <div className="text-sm text-gray-600">{course.enrolled.toLocaleString()} students</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
