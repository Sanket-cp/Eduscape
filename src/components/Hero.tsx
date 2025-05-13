
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Unlock Your Potential With <span className="text-learnify-primary">Expert-led</span> Courses
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn from industry experts and advance your career with our comprehensive courses. Flexible learning at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base py-6">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base py-6">
                <Link to="#how-it-works">How It Works</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mt-12">
              <div className="flex items-center">
                <div className="bg-learnify-primary/10 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-learnify-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl">200+</div>
                  <div className="text-gray-600">Courses</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-learnify-primary/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-learnify-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl">15K+</div>
                  <div className="text-gray-600">Students</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-learnify-primary/10 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-learnify-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-learnify-primary/10 rounded-full -z-10 animate-float"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-learnify-secondary/10 rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop" 
              alt="Students learning online" 
              className="rounded-xl shadow-xl max-w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-learnify-primary text-white flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Learning Made Easy</div>
                  <div className="text-xs text-gray-500">Progress at your own pace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
