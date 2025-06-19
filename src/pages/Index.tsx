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
      category: "Organization Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Marketing Automation Platform",
      description: "Implemented comprehensive marketing automation solution",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Career Development Program",
      description: "Designed and executed career development framework",
      category: "HR & Development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Md Mahbub Ul Islam
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Organization Development (OD) Specialist, Digital Marketer & Tech Enthusiast
                passionate about driving growth and innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25">
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With extensive experience in Organization Development, Digital Marketing, and Technology,
                I help professionals and organizations achieve their goals through strategic planning
                and innovative solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My passion lies in empowering individuals to advance their careers and helping
                businesses transform through digital innovation and organizational excellence.
              </p>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                <Link to="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Experience Summary</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Organization Development</h4>
                    <p className="text-gray-600">5+ years in organizational transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Digital Marketing</h4>
                    <p className="text-gray-600">Expert in digital strategy and campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-400">
              Core competencies that drive results and innovation
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-600">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
            <p className="text-lg text-gray-400">
              Professional services to accelerate your career and business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 bg-gray-900 border-gray-700 group hover:border-cyan-500/50">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-400">
              Showcasing impactful work and successful implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-gray-800 border-gray-700 group overflow-hidden hover:border-cyan-500/50">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-gray-900/90 backdrop-blur-sm shadow-lg text-gray-300 border-gray-600">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-cyan-500">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help you achieve your professional goals
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
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
