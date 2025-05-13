
import React, { useState } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseById } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { AlertCircle, LockIcon, CreditCard, ShoppingCart } from "lucide-react";

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || "");
  const { isAuthenticated, user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Convert price to Indian Rupees (1 USD = ~75 INR as an example conversion rate)
  const priceInRupees = course ? course.price * 75 : 0;
  
  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=checkout/${id}`} replace />;
  }
  
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const checkEnrollment = () => {
    const enrolledCourses = localStorage.getItem('enrolledCourses');
    if (enrolledCourses) {
      const courseIds = JSON.parse(enrolledCourses);
      if (courseIds.includes(id)) {
        navigate("/dashboard");
        return true;
      }
    }
    return false;
  };
  
  React.useEffect(() => {
    checkEnrollment();
  }, []);
  
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (checkEnrollment()) {
      return;
    }
    
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const enrolledCourses = localStorage.getItem('enrolledCourses');
      let courseIds = enrolledCourses ? JSON.parse(enrolledCourses) : [];
      
      if (!courseIds.includes(id)) {
        courseIds.push(id);
        localStorage.setItem('enrolledCourses', JSON.stringify(courseIds));
      }
      
      toast({
        title: "Purchase Successful!",
        description: `You have successfully enrolled in ${course.title}.`,
        variant: "default",
      });
      
      navigate(`/course-view/${id}`);
    } catch (error) {
      toast({
        title: "Checkout Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-gray-600">Complete your purchase to gain access to the course</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="flex items-start mb-6">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-24 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">By {course.instructor}</p>
                      <div className="flex items-center">
                        <span className="text-sm bg-learnify-primary/10 text-learnify-primary px-2 py-0.5 rounded">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-b py-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <span>Original Price:</span>
                      <span>₹{priceInRupees.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>₹{priceInRupees.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleCheckout}>
                    <h3 className="font-bold mb-4">Payment Method</h3>
                    
                    <RadioGroup 
                      defaultValue="credit-card" 
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="mb-6"
                    >
                      <div className="flex items-center space-x-2 mb-3 border p-3 rounded-md bg-white">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                          <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md bg-white">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center cursor-pointer">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#14BFFF" strokeWidth="2"/>
                            <path d="M7 12L11 16L17 8" stroke="#14BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          UPI Payment
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card</Label>
                          <Input id="card-name" type="text" placeholder="Rahul Sharma" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" type="text" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" type="text" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVV</Label>
                            <Input id="cvc" type="text" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === "upi" && (
                      <div className="space-y-4 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="upi-id">UPI ID</Label>
                          <Input id="upi-id" type="text" placeholder="yourname@upi" required />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center text-xs text-gray-600 mb-6">
                      <LockIcon className="h-4 w-4 mr-2 text-gray-400" />
                      <span>
                        Your payment information is secure. We use industry-standard encryption to protect your data.
                      </span>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={loading}
                    >
                      {loading ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Pay ₹{priceInRupees.toFixed(2)} Now
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">What You'll Get</h2>
                  
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-learnify-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Satisfaction Guaranteed</h4>
                        <p className="text-sm text-yellow-700">
                          30-day money-back guarantee. No questions asked.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Have questions?</p>
                    <Link to="#" className="text-sm text-learnify-primary font-medium hover:underline">
                      Contact our support team
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
