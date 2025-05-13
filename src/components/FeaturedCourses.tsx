
import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { getFeaturedCourses } from "@/data/courses";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedCourses = () => {
  const featuredCourses = getFeaturedCourses();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl">
              Expand your skills with our most popular courses. Handpicked by our team for their quality and relevance.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link to="/courses" className="flex items-center">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asChild>
            <Link to="/courses" className="flex items-center justify-center">
              Browse All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
