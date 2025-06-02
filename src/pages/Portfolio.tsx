
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Organization Development", "Digital Marketing", "Technology", "Consulting"];

  const projects = [
    {
      title: "Digital Transformation Strategy",
      description: "Led comprehensive digital transformation initiative for a leading manufacturing company, resulting in 40% operational efficiency improvement.",
      longDescription: "This project involved analyzing existing processes, identifying digital opportunities, and implementing a phased transformation plan. Key achievements included automation of 15 manual processes, implementation of data analytics dashboard, and training 200+ employees on new digital tools.",
      category: "Organization Development",
      duration: "12 months",
      team: "15 members",
      impact: "40% efficiency increase",
      technologies: ["Process Automation", "Data Analytics", "Change Management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: [
        "Reduced processing time by 40%",
        "Increased employee satisfaction by 25%",
        "Saved $150K annually in operational costs",
        "Improved data accuracy by 60%"
      ]
    },
    {
      title: "Marketing Automation Platform",
      description: "Implemented comprehensive marketing automation solution for B2B SaaS company, increasing lead generation by 200%.",
      longDescription: "Designed and deployed a complete marketing automation ecosystem including lead scoring, email campaigns, and customer journey mapping. The solution integrated with existing CRM and provided detailed analytics for campaign optimization.",
      category: "Digital Marketing",
      duration: "8 months",
      team: "8 members",
      impact: "200% lead increase",
      technologies: ["Marketing Automation", "CRM Integration", "Analytics", "Email Marketing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: [
        "200% increase in qualified leads",
        "150% improvement in email open rates",
        "300% growth in conversion rates",
        "Reduced customer acquisition cost by 35%"
      ]
    },
    {
      title: "Career Development Program",
      description: "Designed and executed comprehensive career development framework for 500+ employees across multiple departments.",
      longDescription: "Created a structured career development program including skills assessment, personalized learning paths, mentorship matching, and performance tracking. The program addressed individual career goals while aligning with organizational objectives.",
      category: "Organization Development",
      duration: "6 months",
      team: "12 members",
      impact: "85% participation rate",
      technologies: ["Learning Management System", "Skills Assessment", "Mentorship Platform"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      results: [
        "85% employee participation",
        "92% satisfaction rating",
        "45% internal promotion rate",
        "30% reduction in turnover"
      ]
    },
    {
      title: "E-commerce Growth Strategy",
      description: "Developed and implemented digital marketing strategy for e-commerce startup, achieving 300% revenue growth in 18 months.",
      longDescription: "Comprehensive digital strategy including SEO optimization, social media marketing, influencer partnerships, and conversion rate optimization. Focused on building brand awareness and driving sustainable growth.",
      category: "Digital Marketing",
      duration: "18 months",
      team: "6 members",
      impact: "300% revenue growth",
      technologies: ["SEO", "Social Media Marketing", "PPC", "Analytics"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: [
        "300% revenue increase",
        "250% website traffic growth",
        "180% social media engagement",
        "120% customer retention improvement"
      ]
    },
    {
      title: "Agile Transformation",
      description: "Led organization-wide agile transformation for tech company, improving project delivery speed by 50%.",
      longDescription: "Implemented agile methodologies across all development teams, provided comprehensive training, and established new governance structures. The transformation included cultural change management and process optimization.",
      category: "Technology",
      duration: "10 months",
      team: "20 members",
      impact: "50% faster delivery",
      technologies: ["Agile Methodologies", "Scrum", "Project Management Tools"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      results: [
        "50% faster project delivery",
        "40% improvement in quality metrics",
        "60% increase in team satisfaction",
        "30% reduction in project costs"
      ]
    },
    {
      title: "Executive Coaching Program",
      description: "Provided executive coaching services to C-level executives, resulting in enhanced leadership effectiveness and strategic decision-making.",
      longDescription: "Delivered personalized coaching to senior executives focusing on leadership development, strategic thinking, and organizational impact. The program included 360-degree feedback, goal setting, and ongoing support.",
      category: "Consulting",
      duration: "12 months",
      team: "3 members",
      impact: "95% satisfaction rate",
      technologies: ["Executive Assessment", "Leadership Development", "360 Feedback"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      results: [
        "95% client satisfaction",
        "80% achievement of leadership goals",
        "100% client retention",
        "Significant organizational impact"
      ]
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing impactful projects and successful implementations across
              organization development, digital marketing, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-600">{project.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal/Section - Simple implementation */}
      {selectedProject && (
        <section className="py-16 bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                onClick={() => setSelectedProject(null)}
                className="mb-4"
              >
                ← Back to Portfolio
              </Button>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <Badge variant="secondary" className="mb-4">{selectedProject.category}</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                  <p className="text-gray-600">{selectedProject.longDescription}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-medium">{selectedProject.duration}</p>
                    <p className="text-sm text-gray-600">Duration</p>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-medium">{selectedProject.team}</p>
                    <p className="text-sm text-gray-600">Team Size</p>
                  </div>
                  <div>
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <p className="font-medium">{selectedProject.impact}</p>
                    <p className="text-sm text-gray-600">Impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Portfolio;
