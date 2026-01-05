import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Mail, Linkedin, Instagram, FileText, ArrowRight, Megaphone, } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate(); // <-- gives you routing functions
  return (
    <div className="min-h-screen bg-[#2d2d2d] text-[#f8f8f2] dark">
      {/* Hero Section - Profile and Contact */}
      <section className="min-h-screen flex items-center justify-center px-6 border-b border-[#44475a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Info */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-start">
                <Avatar className="w-32 h-32 border-4 border-[#bd93f9]">
                  <AvatarImage 
                    src="profile.jpg" 
                    alt="Marcus Yoo" 
                  />
                  <AvatarFallback className="bg-[#44475a] text-[#f8f8f2] text-xl">MY</AvatarFallback>
                </Avatar>
              </div>

              {/* Name and Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl tracking-tight text-[#f8f8f2]">
                  Marcus Yoo
                </h1>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <Badge variant="outline" className="text-sm px-3 py-1 border-[#bd93f9] text-[#bd93f9]">
                    Mechanical Engineer
                  </Badge>
                  <Badge variant="outline" className="text-sm px-3 py-1 border-[#bd93f9] text-[#bd93f9]">
                    Rose-Hulman Institute of Technology
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-[#6272a4] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I am a mechanical engineer focused on solving complex challenges with real human impact. 
              By treating design as a complementary discipline, I sharpen my ability to think differently, 
              communicate ideas visually, and bring a creative edge to engineering innovation.
              </p>
            </div>

            {/* Right Side - Contact Links */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-[#383838] border-[#44475a]">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {/* Resume */}
                    <Button
                      variant="outline"
                      className="w-full h-12 justify-start gap-3 border-[#44475a] text-[#f8f8f2] hover:bg-[#44475a] hover:border-[#bd93f9] transition"
                      asChild
                    >
                      <a href="/Marcus_Yoo_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-5 w-5" />
                        <span>View Resume</span>
                      </a>
                    </Button>

                    {/* LinkedIn */}
                    <Button 
                      variant="outline" 
                      className="w-full h-12 justify-start gap-3 border-[#44475a] text-[#f8f8f2] hover:bg-[#44475a] hover:border-[#bd93f9] transition-colors"
                      onClick={() => window.open('https://www.linkedin.com/in/marcusjyoo/', '_blank')}
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </Button>

                    {/* Instagram */}
                    <Button 
                      variant="outline" 
                      className="w-full h-12 justify-start gap-3 border-[#44475a] text-[#f8f8f2] hover:bg-[#44475a] hover:border-[#bd93f9] transition-colors"
                      onClick={() => window.open('https://www.instagram.com/marcus_artstuffs/', '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Art & Design Portfolio</span>
                    </Button>

                    {/* Email */}
                    <div className="pt-4 border-t border-[#44475a]">
                      <Button 
                        className="w-full h-12 gap-3 bg-[#bd93f9] hover:bg-[#bd93f9]/80 text-[#282a36]"
                        onClick={() => window.location.href = 'mailto:your.email@example.com'}
                      >
                        <Mail className="h-5 w-5" />
                        <span>yoomj@rose-hulman.edu</span>
                      </Button>
                    </div>
                  
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PCBrule Featured Section */}
      <section className="py-20 px-6 border-b border-[#44475a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-[#bd93f9] text-[#282a36] hover:bg-[#bd93f9]/80">
              Currently Developing
            </Badge>
            <h2 className="text-3xl md:text-4xl text-[#f8f8f2]">Featured Project</h2>
            <p className="text-lg text-[#6272a4] max-w-2xl mx-auto">
              An innovative pocket slide rule made from printed circuit board
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => navigate("/pcbrule")}
            >
              <Card className="overflow-hidden bg-[#383838] border-[#44475a] hover:border-[#bd93f9] transition-colors">
                <ImageWithFallback
                  src="PCBruleLandingPage.jpg"
                  alt="PCBrule - Printed Circuit Board Slide Rule"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
            <div className="space-y-6 ">
              <div className="space-y-2">
                <Badge className="bg-[#bd93f9] text-[#282a36] hover:bg-[#bd93f9]/80">
                  PCB Design
                </Badge>
                <button
                  onClick={() => navigate("/pcbrule")}
                  className="block group"
                >
                  <h3 className="text-2xl text-[#f8f8f2] text-left group-hover:text-[#bd93f9] transition-colors">
                    PCBrule: The Circuit Board Slide Rule
                  </h3>
                </button>
              </div>
              <p className="text-[#6272a4] leading-relaxed">
                Combining the elegance of vintage slide rules with modern PCB manufacturing. 
                This pocket calculator merges retro functionality with contemporary aesthetics, 
                creating a unique tool for engineers and enthusiasts.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">KiCad</Badge>
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">PCB Design</Badge>
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">Mechanical Engineering</Badge>
              </div>

              <div className="pt-4 flex flex-row sm:flex-col items-center justify-center gap-6">
                <Button 
                  onClick={() => navigate("/pcbrule#timeline")}
                  className="bg-[#bd93f9] hover:bg-[#bd93f9]/80 text-[#282a36] px-6 py-3 gap-3"
                >
                  View Development Timeline
                  <ArrowRight className="h-5 w-5" />
                </Button>

                <Button 
                className="bg-[#ff5722] hover:bg-[#ff5722]/80 text-white px-6 py-3 gap-3"
                onClick={() => window.open('https://www.reddit.com/r/sliderules/search?q=PCBrule&restrict_sr=1', '_blank')}
                >
                See the discussion on Reddit
                <Megaphone className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-[#f8f8f2]">Other Projects</h2>
            <p className="text-lg text-[#6272a4] max-w-2xl mx-auto">
              A showcase of my mechanical engineering work and design projects
            </p>
          </div>

          
          {/* Project 1 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden bg-[#383838] border-[#44475a]">
                <ImageWithFallback
                  src="removablefin.png"
                  alt="CAD Design Project"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <Badge className="bg-[#bd93f9] text-[#282a36] hover:bg-[#bd93f9]/80">
                  CAD Design
                </Badge>
                <h3 className="text-2xl text-[#f8f8f2]">Subscale Removable Rocket Fin Assembly</h3>
              </div>
              <p className="text-[#6272a4] leading-relaxed">
              Designed and built a removable rocket fin assembly for NASA University Student Launch Initiative in SolidWorks with a focus on precision 
              tolerances and manufacturability. Conducted stress analysis and optimization to reduce weight 
              while maintaining structural integrity, applying real-world design-for-manufacture principles.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">SolidWorks</Badge>
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">Simulation</Badge>
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">Manufacturing</Badge>
              </div>
            </div>
          </div>

          {/* Project 2 - Image Right (but aligned left as requested) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-[#bd93f9] text-[#282a36] hover:bg-[#bd93f9]/80">
                  Internships
                </Badge>
                <h3 className="text-2xl text-[#f8f8f2]">Boeing Flight Performance Engineering Group</h3>
              </div>
              <p className="text-[#6272a4] leading-relaxed">
              At Boeing, I contributed to flight performance engineering by developing tools to process 
              and analyze large-scale simulation data, cutting iteration time and improving efficiency. 
              I also supported testing of advanced composite and thermal protection systems, applying 
              engineering analysis to real-world aerospace challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">Profesionalism</Badge>
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">FEA Analysis</Badge>
                <Badge variant="outline" className="border-[#44475a] text-[#6272a4]">Communication</Badge>
              </div>
            </div>
            <div>
              <Card className="overflow-hidden bg-[#383838] border-[#44475a]">
                <ImageWithFallback
                  src="poster.jpg"
                  alt="3D Printed Parts"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-6 border-t border-[#44475a]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl text-[#f8f8f2]">More Coming Soon</h2>
          <div className="flex flex-wrap justify-center gap-4 text-[#6272a4]">
            <span>Internship Experience</span>
            <span>•</span>
            <span>Design Portfolio</span>
            <span>•</span>
            <span>Technical Skills</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-[#6272a4] border-t border-[#44475a]">
        <p>© 2026 Marcus Yoo • Mechanical Engineering • {' '}
          <a
            href="https://github.com/sucramooy/marcusjyoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline opacity-100 hover:opacity-80"
          >
            Click to see the internals of this site!
          </a>
        </p>
      </footer>
    </div>
  );
}