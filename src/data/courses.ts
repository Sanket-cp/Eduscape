
import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "JavaScript Fundamentals for Beginners",
    description: "Learn the core concepts of JavaScript programming from the ground up. This course is perfect for absolute beginners who want to start their journey in web development.",
    price: 0,
    instructor: "Sarah Johnson",
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1170&auto=format&fit=crop",
    category: "Web Development",
    level: "Beginner",
    duration: "12 hours",
    lessons: 24,
    rating: 4.7,
    enrolled: 1254,
    isFree: true,
    certificateTemplate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    demoVideo: "https://www.youtube.com/embed/W6NZfCO5SIk",
    features: [
      "24 On-demand video lessons",
      "12 Coding exercises",
      "Certificate of completion",
      "Lifetime access",
      "Beginner friendly content"
    ],
    curriculum: [
      {
        title: "Introduction to JavaScript",
        lessons: [
          { id: "1", title: "What is JavaScript?", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk" },
          { id: "2", title: "Setting up your environment", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg" },
        ],
      },
      {
        title: "Variables and Data Types",
        lessons: [
          { id: "3", title: "Understanding variables", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c" },
          { id: "4", title: "Working with data types", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/9M4XKi25I2M" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "React.js - Build Modern Web Applications",
    description: "Master the popular JavaScript library React and build interactive, dynamic user interfaces with ease. Learn component-based architecture, state management, and more.",
    price: 89.99,
    instructor: "Michael Rodriguez",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170&auto=format&fit=crop",
    category: "Web Development",
    level: "Intermediate",
    duration: "15 hours",
    lessons: 32,
    rating: 4.9,
    enrolled: 2874,
    demoVideo: "https://www.youtube.com/embed/Tn6-PIqc4UM",
    features: [
      "32 On-demand video lessons",
      "15 Practical coding exercises",
      "5 Real-world projects",
      "Certificate of completion",
      "Downloadable resources",
      "Forum access"
    ],
    curriculum: [
      {
        title: "Introduction to React",
        lessons: [
          { id: "5", title: "What is React?", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM" },
          { id: "6", title: "Setting up your React environment", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8" },
        ],
      },
      {
        title: "Components and Props",
        lessons: [
          { id: "7", title: "Understanding React components", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/FJDVKeh7RJI" },
          { id: "8", title: "Working with props", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/KnuLH_xdmg4" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Python for Data Science and Machine Learning",
    description: "Dive into the world of data science with Python. Learn how to analyze data, build machine learning models, and create insightful visualizations.",
    price: 79.99,
    instructor: "Emily Chen",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14f9da39a3b8?q=80&w=1170&auto=format&fit=crop",
    category: "Data Science",
    level: "Intermediate",
    duration: "18 hours",
    lessons: 40,
    rating: 4.8,
    enrolled: 2145,
    demoVideo: "https://www.youtube.com/embed/JL_grPUnXzY",
    features: [
      "40 On-demand video lessons",
      "20 Coding exercises",
      "10 Data analysis projects",
      "Certificate of completion",
      "Access to datasets",
      "Community support"
    ],
    curriculum: [
      {
        title: "Introduction to Python for Data Science",
        lessons: [
          { id: "9", title: "Python basics", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/JL_grPUnXzY" },
          { id: "10", title: "Setting up your data science environment", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/9mAmZIRfJBs" },
        ],
      },
      {
        title: "Data Analysis with Pandas",
        lessons: [
          { id: "11", title: "Introduction to Pandas", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/vmEHCJofslg" },
          { id: "12", title: "Data cleaning and preprocessing", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/bDhvCp3_lYw" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing Masterclass",
    description: "Become a digital marketing expert and learn how to create effective online marketing campaigns, analyze data, and drive business growth.",
    price: 99.99,
    instructor: "David Lee",
    thumbnail: "https://images.unsplash.com/photo-1587828245449-782c4ac14699?q=80&w=1074&auto=format&fit=crop",
    category: "Marketing",
    level: "Advanced",
    duration: "20 hours",
    lessons: 35,
    rating: 4.6,
    enrolled: 1876,
    demoVideo: "https://www.youtube.com/embed/pqSB3MoPpWM",
    features: [
      "35 On-demand video lessons",
      "15 Case studies",
      "10 Marketing projects",
      "Certificate of completion",
      "Marketing templates",
      "Expert interviews"
    ],
    curriculum: [
      {
        title: "Introduction to Digital Marketing",
        lessons: [
          { id: "13", title: "What is digital marketing?", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/pqSB3MoPpWM" },
          { id: "14", title: "Setting up your marketing tools", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/LK8KeT4lQQM" },
        ],
      },
      {
        title: "Search Engine Optimization (SEO)",
        lessons: [
          { id: "15", title: "SEO basics", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/wWiSzH0AGC8" },
          { id: "16", title: "Keyword research", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/CiIK4-JVLu4" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "iOS App Development with Swift",
    description: "Learn how to build native iOS applications using Swift. This course covers everything from the basics of Swift to advanced topics like Core Data and networking.",
    price: 129.99,
    instructor: "Alice Brown",
    thumbnail: "https://images.unsplash.com/photo-1585082924427-0a9424ca9f83?q=80&w=1170&auto=format&fit=crop",
    category: "Mobile Development",
    level: "Intermediate",
    duration: "22 hours",
    lessons: 42,
    rating: 4.9,
    enrolled: 1532,
    demoVideo: "https://www.youtube.com/embed/F2ojC6TNwws",
    features: [
      "42 On-demand video lessons",
      "20 Coding exercises",
      "10 App development projects",
      "Certificate of completion",
      "Access to Swift documentation",
      "App store submission guide"
    ],
    curriculum: [
      {
        title: "Introduction to Swift",
        lessons: [
          { id: "17", title: "Swift basics", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/F2ojC6TNwws" },
          { id: "18", title: "Setting up your iOS development environment", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/comQ1-x2a1Q" },
        ],
      },
      {
        title: "Building User Interfaces with SwiftUI",
        lessons: [
          { id: "19", title: "Introduction to SwiftUI", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/VJ8RPF8wgRU" },
          { id: "20", title: "Working with UI elements", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/K7HVEAr9fDg" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Machine Learning A-Z: Complete Guide",
    description: "Get a comprehensive understanding of machine learning algorithms and techniques. Learn how to build and deploy machine learning models using Python.",
    price: 119.99,
    instructor: "Bob Wilson",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-464c4c52ef1c?q=80&w=1170&auto=format&fit=crop",
    category: "Data Science",
    level: "Advanced",
    duration: "25 hours",
    lessons: 50,
    rating: 4.7,
    enrolled: 1987,
    demoVideo: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    features: [
      "50 On-demand video lessons",
      "25 Coding exercises",
      "15 Machine learning projects",
      "Certificate of completion",
      "Access to machine learning libraries",
      "Model deployment guide"
    ],
    curriculum: [
      {
        title: "Introduction to Machine Learning",
        lessons: [
          { id: "21", title: "What is machine learning?", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ" },
          { id: "22", title: "Setting up your machine learning environment", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/s3V_3-zOOB4" },
        ],
      },
      {
        title: "Supervised Learning",
        lessons: [
          { id: "23", title: "Linear regression", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/zPG4NjIkCjc" },
          { id: "24", title: "Logistic regression", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/yIYKR4sgzI8" },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Web Development Basics: HTML & CSS",
    description: "Start your journey into web development with HTML and CSS. Learn how to structure web pages and style them to create beautiful and responsive websites.",
    price: 49.99,
    instructor: "Carol Davis",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47a04ca018e0?q=80&w=1170&auto=format&fit=crop",
    category: "Web Development",
    level: "Beginner",
    duration: "10 hours",
    lessons: 20,
    rating: 4.5,
    enrolled: 2456,
    demoVideo: "https://www.youtube.com/embed/qz0aGYrrlhU",
    features: [
      "20 On-demand video lessons",
      "10 Coding exercises",
      "5 Web development projects",
      "Certificate of completion",
      "HTML and CSS templates",
      "Responsive design guide"
    ],
    curriculum: [
      {
        title: "Introduction to HTML",
        lessons: [
          { id: "25", title: "What is HTML?", duration: "30 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU" },
          { id: "26", title: "Setting up your HTML environment", duration: "45 min", isPreview: true, videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE" },
        ],
      },
      {
        title: "Introduction to CSS",
        lessons: [
          { id: "27", title: "What is CSS?", duration: "60 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI" },
          { id: "28", title: "CSS selectors", duration: "30 min", isPreview: false, videoUrl: "https://www.youtube.com/embed/g0Aq2kP5-CY" },
        ],
      },
    ],
  }
];

export const getCourseById = (id: string) => {
  return courses.find((course) => course.id === id);
};

// Add the new functions below:

export const getFeaturedCourses = () => {
  // Return a subset of courses to be featured (top 3 by enrollment)
  return [...courses]
    .sort((a, b) => b.enrolled - a.enrolled)
    .slice(0, 3);
};

export const getCoursesByCategory = (category: string) => {
  if (category === "All") {
    return courses;
  }
  return courses.filter((course) => course.category === category);
};
