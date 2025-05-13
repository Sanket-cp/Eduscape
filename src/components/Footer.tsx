
import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-learnify-primary" />
              <span className="text-2xl font-bold text-white">Eduscape</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your life through education. Eduscape provides the tools and courses to help you reach your full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-learnify-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnify-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnify-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnify-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-learnify-primary">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-learnify-primary">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-learnify-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-learnify-primary">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-learnify-primary">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-learnify-primary mr-2 mt-1" />
                <span className="text-gray-400">
                  Kolkata, Barasat<br />
                  West Bengal, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-learnify-primary mr-2" />
                <a href="tel:+918101862947" className="text-gray-400 hover:text-learnify-primary">
                  +91 8101862947
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-learnify-primary mr-2" />
                <a href="mailto:sanket200310@gmail.com" className="text-gray-400 hover:text-learnify-primary">
                  sanket200310@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on new courses and offers.
            </p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Eduscape. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-learnify-primary text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-learnify-primary text-sm">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-learnify-primary text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
