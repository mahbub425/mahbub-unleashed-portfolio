
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Users, TrendingUp, Brain, Code } from "lucide-react";

const Index = () => {
  const skills = [
    "Organization Development",
    "Digital Marketing",
    "Technology Strategy",
    "Career Consulting",
    "LinkedIn Optimization",
    "Project Management"
  ];

  const services = [
    {
      title: "Career Consultancy",
      description: "Strategic career guidance and professional development planning",
      icon: Users
    },
    {
      title: "CV Review Service",
      description: "Professional CV optimization and enhancement services",
      icon: TrendingUp
    },
    {
      title: "LinkedIn Profile Optimization",
      description: "Complete LinkedIn profile makeover for maximum visibility",
      icon: Brain
    },
    {
      title: "Interview Preparation Coaching",
      description: "Comprehensive interview coaching and preparation sessions",
      icon: Code
    }
  ];

  const projects = [
    {
      title: "Digital Transformation Strategy",
      description: "Led organization-wide digital transformation initiative",
      category: "Organization Development"
    },
    {
      title: "Marketing Automation Platform",
      description: "Implemented comprehensive marketing automation solution",
      category: "Digital Marketing"
    },
    {
      title: "Career Development Program",
      description: "Designed and executed career development framework",
      category: "HR & Development"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Md Mahbub Ul Islam
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Organization Development (OD) Specialist, Digital Marketer & Tech Enthusiast
                  passionate about driving growth and innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Md Mahbub Ul Islam"
                  className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With extensive experience in Organization Development, Digital Marketing, and Technology,
                I help professionals and organizations achieve their goals through strategic planning
                and innovative solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My passion lies in empowering individuals to advance their careers and helping
                businesses transform through digital innovation and organizational excellence.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Experience Summary</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Organization Development</h4>
                    <p className="text-gray-600">5+ years in organizational transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Digital Marketing</h4>
                    <p className="text-gray-600">Expert in digital strategy and campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Consulting</h4>
                    <p className="text-gray-600">Helped 100+ professionals advance careers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">
              Core competencies that drive results and innovation
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-lg text-gray-600">
              Professional services to accelerate your career and business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Showcasing impactful work and successful implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {project.category}
                  </Badge>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help you achieve your professional goals
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
