
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bookmark, BookOpen, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-learnify-primary to-learnify-secondary text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">About Eduscape</h1>
              <p className="text-xl opacity-90">
                Transforming education through innovative online learning experiences.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Eduscape, we believe that quality education should be accessible to everyone. 
                  Our mission is to create a global learning platform that empowers individuals to 
                  acquire new skills, advance their careers, and transform their lives through education.
                </p>
                <p className="text-lg text-gray-700">
                  Founded in 2023, Eduscape has grown from a small startup to a leading online 
                  education provider, serving students from over 50 countries around the world.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Students learning together"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Choose Eduscape</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-learnify-primary/10 text-learnify-primary mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Content</h3>
                <p className="text-gray-700">
                  Our courses are created by industry experts and designed to provide practical, up-to-date knowledge.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-learnify-primary/10 text-learnify-primary mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Community Learning</h3>
                <p className="text-gray-700">
                  Join a community of learners who share your interests and goals, enhancing your educational experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-learnify-primary/10 text-learnify-primary mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Recognized Certificates</h3>
                <p className="text-gray-700">
                  Earn certificates that are recognized by employers and educational institutions worldwide.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-learnify-primary/10 text-learnify-primary mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Flexible Learning</h3>
                <p className="text-gray-700">
                  Learn at your own pace with 24/7 access to courses, allowing you to balance education with other commitments.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-learnify-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-learnify-primary font-bold text-3xl">SD</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sanket Debnath</h3>
                <p className="text-learnify-primary mb-4">CEO & Founder</p>
                <p className="text-gray-700">
                  IIT Kharagpur graduate with a vision to revolutionize education technology in India and beyond.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-learnify-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-learnify-primary font-bold text-3xl">PS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Priya Sharma</h3>
                <p className="text-learnify-primary mb-4">Chief Academic Officer</p>
                <p className="text-gray-700">
                  Ph.D. from Delhi University with 12 years of experience in educational psychology and curriculum design.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-learnify-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-learnify-primary font-bold text-3xl">AM</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Arjun Mehta</h3>
                <p className="text-learnify-primary mb-4">Head of Technology</p>
                <p className="text-gray-700">
                  Computer Science graduate from IIT Bombay with expertise in AI-driven educational platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
