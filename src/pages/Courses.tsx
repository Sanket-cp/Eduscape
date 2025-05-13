
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCatalog from "@/components/CourseCatalog";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-learnify-primary to-learnify-secondary text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
              <p className="text-xl opacity-90">
                Browse our comprehensive collection of courses designed to help you master new skills, advance your career, and achieve your goals.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <CourseCatalog />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
