
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master's in Business Administration",
      institution: "University of Dhaka",
      year: "2018-2020",
      description: "Specialized in Organizational Behavior and Digital Strategy"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "BRAC University",
      year: "2014-2018",
      description: "Focus on Software Engineering and Technology Management"
    }
  ];

  const experience = [
    {
      title: "Senior Organization Development Specialist",
      company: "TechCorp Bangladesh",
      duration: "2021 - Present",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Led digital transformation initiatives across 5 departments",
        "Implemented performance management systems improving productivity by 30%",
        "Designed and executed leadership development programs",
        "Conducted organizational culture assessments and improvement strategies"
      ]
    },
    {
      title: "Digital Marketing Manager",
      company: "Digital Solutions Ltd",
      duration: "2019 - 2021",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Developed comprehensive digital marketing strategies for 20+ clients",
        "Managed social media campaigns with 150% engagement increase",
        "Led SEO/SEM initiatives resulting in 200% traffic growth",
        "Mentored junior marketing professionals and interns"
      ]
    },
    {
      title: "Business Analyst",
      company: "Innovation Hub",
      duration: "2018 - 2019",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Analyzed business processes and recommended optimization strategies",
        "Collaborated with cross-functional teams on process improvement",
        "Created detailed documentation and training materials",
        "Supported technology adoption and change management initiatives"
      ]
    }
  ];

  const skills = {
    "Organization Development": ["Change Management", "Performance Management", "Leadership Development", "Culture Transformation"],
    "Digital Marketing": ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    "Technology": ["Project Management", "Process Optimization", "Digital Tools", "Data Analysis"],
    "Consulting": ["Career Coaching", "CV Writing", "Interview Preparation", "LinkedIn Optimization"]
  };

  const activities = [
    {
      title: "TEDx Speaker",
      description: "Delivered talk on 'Digital Transformation in Organizations'",
      year: "2023"
    },
    {
      title: "Career Mentoring Program",
      description: "Volunteer mentor for young professionals at Dhaka University",
      year: "2022 - Present"
    },
    {
      title: "Digital Marketing Workshop",
      description: "Conducted workshops for SMEs on digital marketing strategies",
      year: "2021 - 2022"
    },
    {
      title: "Professional Development Club",
      description: "Co-founder and president of PD Club at BRAC University",
      year: "2017 - 2018"
    }
  ];

  const hobbies = [
    "Technology Trends Research",
    "Professional Photography",
    "Reading Business & Psychology Books",
    "Travel & Cultural Exploration",
    "Fitness & Wellness",
    "Community Volunteering"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about empowering individuals and organizations through strategic development,
              digital innovation, and transformational leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              My journey began with a fascination for technology and its potential to transform how we work and live.
              During my computer science studies at BRAC University, I discovered the power of combining technical
              expertise with human-centered approaches to create meaningful change in organizations.
            </p>
            <p>
              This revelation led me to pursue an MBA with a focus on organizational behavior and digital strategy.
              I realized that the most successful digital transformations aren't just about technology—they're about
              people, culture, and the strategic alignment of human potential with technological capabilities.
            </p>
            <p>
              Today, I bridge the gap between technology and human development, helping organizations and individuals
              navigate the complexities of our digital age. Whether it's designing career development programs,
              optimizing digital marketing strategies, or coaching professionals to achieve their goals, my approach
              is always centered on creating sustainable, meaningful growth.
            </p>
            <p>
              When I'm not working, you'll find me exploring the latest technology trends, capturing moments through
              photography, or volunteering in community development programs. I believe that continuous learning
              and giving back to the community are essential for personal and professional fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.year}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-900 mb-2">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                    <span className="font-medium text-gray-900">{exp.company}</span>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Activities & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                    <Badge variant="outline">{activity.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Personal Interests</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
