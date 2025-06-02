
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Users, TrendingUp, Brain, FileText, Linkedin, MessageSquare, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "career-consultancy",
      title: "Career Consultancy",
      description: "Strategic career guidance and professional development planning to accelerate your career growth.",
      longDescription: "Comprehensive career consultation service that includes career assessment, goal setting, strategic planning, and ongoing support. I help professionals identify their strengths, overcome challenges, and create actionable plans for career advancement.",
      icon: Users,
      duration: "4-8 weeks",
      pricing: "Contact for pricing",
      features: [
        "Comprehensive career assessment",
        "Personalized career roadmap",
        "Industry insights and trends analysis",
        "Networking strategy development",
        "Ongoing support and follow-up",
        "Goal tracking and accountability"
      ],
      benefits: [
        "Clear career direction and purpose",
        "Increased confidence in career decisions",
        "Strategic approach to career growth",
        "Enhanced professional network",
        "Better salary negotiation skills"
      ],
      testimonial: {
        text: "Mahbub's career guidance helped me transition from a technical role to management. His strategic approach and industry insights were invaluable.",
        author: "Sarah Ahmed, Senior Manager"
      }
    },
    {
      id: "cv-review",
      title: "CV Review Service",
      description: "Professional CV optimization and enhancement to make you stand out in competitive job markets.",
      longDescription: "Expert CV review and optimization service that transforms your resume into a powerful marketing tool. I analyze your current CV, identify improvement areas, and create a compelling document that highlights your unique value proposition.",
      icon: FileText,
      duration: "1-2 weeks",
      pricing: "Starting from $50",
      features: [
        "Comprehensive CV analysis",
        "Content optimization and restructuring",
        "ATS-friendly formatting",
        "Industry-specific customization",
        "Keywords optimization",
        "Multiple format versions"
      ],
      benefits: [
        "Higher interview callback rates",
        "Professional presentation",
        "ATS compatibility",
        "Tailored for your industry",
        "Competitive advantage"
      ],
      testimonial: {
        text: "My CV transformation resulted in 5x more interview calls. Mahbub knows exactly what recruiters are looking for.",
        author: "Mohammad Rahman, Software Engineer"
      }
    },
    {
      id: "linkedin-optimization",
      title: "LinkedIn Profile Optimization",
      description: "Complete LinkedIn profile makeover for maximum visibility and professional networking success.",
      longDescription: "Comprehensive LinkedIn optimization service that enhances your professional online presence. I optimize every section of your profile to increase visibility, attract opportunities, and build meaningful professional connections.",
      icon: Linkedin,
      duration: "1-2 weeks",
      pricing: "Starting from $75",
      features: [
        "Profile headline optimization",
        "Compelling summary writing",
        "Experience section enhancement",
        "Skills and endorsements strategy",
        "Content strategy development",
        "Connection building guidance"
      ],
      benefits: [
        "Increased profile visibility",
        "More connection requests",
        "Enhanced professional credibility",
        "Better networking opportunities",
        "Improved search rankings"
      ],
      testimonial: {
        text: "After the LinkedIn optimization, I received 3 job offers within a month. The transformation was incredible!",
        author: "Fatima Khan, Marketing Specialist"
      }
    },
    {
      id: "interview-coaching",
      title: "Interview Preparation Coaching",
      description: "Comprehensive interview coaching and preparation sessions to boost your confidence and success rate.",
      longDescription: "Intensive interview coaching program that prepares you for all types of interviews. I provide personalized coaching, mock interview sessions, and feedback to help you present your best self to potential employers.",
      icon: MessageSquare,
      duration: "2-4 weeks",
      pricing: "Starting from $100",
      features: [
        "Mock interview sessions",
        "Behavioral question preparation",
        "Technical interview coaching",
        "Body language and presentation",
        "Salary negotiation training",
        "Follow-up strategies"
      ],
      benefits: [
        "Increased interview success rate",
        "Enhanced confidence",
        "Better communication skills",
        "Improved salary negotiation",
        "Reduced interview anxiety"
      ],
      testimonial: {
        text: "The interview coaching was a game-changer. I went from being nervous to confidently landing my dream job.",
        author: "Ahmed Hassan, Data Analyst"
      }
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your goals, challenges, and current situation to understand your needs."
    },
    {
      step: "2",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of your current status and identification of improvement areas."
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "Creation of a personalized action plan tailored to your specific goals and timeline."
    },
    {
      step: "4",
      title: "Implementation",
      description: "Execution of the strategy with ongoing support, guidance, and regular check-ins."
    },
    {
      step: "5",
      title: "Follow-up & Support",
      description: "Continued support and adjustments to ensure long-term success and goal achievement."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate your career growth with personalized consulting services designed to help you
              achieve your professional goals and unlock your full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>{service.pricing}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
            <p className="text-lg text-gray-600">
              Comprehensive information about each service to help you make the best choice
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.duration}
                          </Badge>
                          <Badge variant="outline">
                            <DollarSign className="h-3 w-3 mr-1" />
                            {service.pricing}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg">{service.longDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-2 border-blue-100">
                      <CardHeader>
                        <CardTitle className="text-lg">Client Testimonial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="text-gray-600 italic mb-4">
                          "{service.testimonial.text}"
                        </blockquote>
                        <p className="text-sm font-medium text-gray-900">
                          - {service.testimonial.author}
                        </p>
                      </CardContent>
                    </Card>

                    <Button asChild className="w-full" size="lg">
                      <Link to="/contact">
                        Book This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              My structured approach ensures maximum value and successful outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose the service that best fits your needs and let's start your journey to success
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
