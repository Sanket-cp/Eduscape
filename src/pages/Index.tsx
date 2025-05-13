
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import { BookOpen, Award, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCourses />
        
        {/* How it works section */}
        <section id="how-it-works" className="py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Learnify Works</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our platform makes learning accessible to everyone. Follow these simple steps to start your learning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-learnify-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-learnify-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Choose a Course</h3>
                <p className="text-gray-600">
                  Browse our catalog and find the perfect course to match your goals and interests.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-learnify-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-learnify-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn from Experts</h3>
                <p className="text-gray-600">
                  Our courses are taught by industry experts with real-world experience.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-learnify-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-learnify-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
                <p className="text-gray-600">
                  Access course content anytime, anywhere, and progress at your own speed.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-learnify-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-learnify-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Join Community</h3>
                <p className="text-gray-600">
                  Connect with fellow learners and instructors to enhance your learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our students have to say about their experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The React course at Eduscape completely transformed my career. Within two months of completing the course, I secured a position at a leading tech startup in Bangalore."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-learnify-primary/20 flex items-center justify-center mr-4">
                    <span className="text-learnify-primary font-bold text-xl">AP</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Ananya Patel</h4>
                    <p className="text-gray-500 text-sm">Frontend Developer, Bangalore</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "After completing the Data Science course from Eduscape, I was able to transition from a traditional IT role to a data analyst position. The curriculum perfectly aligned with industry requirements."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-learnify-primary/20 flex items-center justify-center mr-4">
                    <span className="text-learnify-primary font-bold text-xl">RS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Rajiv Sharma</h4>
                    <p className="text-gray-500 text-sm">Data Analyst, Mumbai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The UI/UX Design course was comprehensive and practical. The projects helped me build a strong portfolio that impressed my current employer. Now I'm designing interfaces for one of Delhi's fastest-growing startups."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-learnify-primary/20 flex items-center justify-center mr-4">
                    <span className="text-learnify-primary font-bold text-xl">KG</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Kavita Gupta</h4>
                    <p className="text-gray-500 text-sm">UI/UX Designer, Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-learnify-primary">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join thousands of students already learning on Learnify. Start your journey today!
              </p>
              <button className="bg-white text-learnify-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-colors">
                Get Started for Free
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
