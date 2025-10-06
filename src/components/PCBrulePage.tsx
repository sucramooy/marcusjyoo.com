import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Heart, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Navigation } from "./Navigation";


export default function PCBrulePage() {
  const timelinePhases = [
    {
      id: 1,
      title: "Ideation",
      status: "completed",
      description: "Initial concept sparked by the desire to combine vintage calculation methods with modern manufacturing techniques.",
      tags: ["Concept", "Inspiration"],
      image: null
    },
    {
      id: 2,
      title: "Research and Concept",
      status: "completed",
      description: "Deep dive into slide rule mechanics, scale calculations, and PCB manufacturing constraints. Studied historical slide rule designs and identified key features to implement.",
      tags: ["Research", "Mathematical Analysis", "Design Planning"],
      image: "Sketches.jpg"
    },
    {
      id: 3,
      title: "Mechanical Design",
      status: "completed",
      description: "Designing the mechanical aspects including sliding mechanisms, tolerances, and structural integrity within PCB manufacturing constraints.",
      tags: ["CAD Design", "Mechanical Engineering", "GD&T"],
      image: "MechanicalDesign.jpg"
    },
    {
      id: 4,
      title: "Panel Layout",
      status: "completed",
      description: "Finalizing the physical dimensions and component placement to optimize both functionality and manufacturing efficiency.",
      tags: ["Layout Design", "Optimization"],
      image: "PanelLayout.jpg"
    },
    {
      id: 5,
      title: "Graphic Design",
      status: "completed",
      description: "Creating the visual scale markings, numbering systems, and aesthetic elements that will be silk-screened/etched to reveal the gold beneath the soldermask.",
      tags: ["Graphics", "Typography", "Visual Design"],
      image: "GraphicDesign.jpg"
    },
    {
      id: 6,
      title: "PCB Design",
      status: "completed",
      description: "Translating the mechanical and graphic designs into manufacturable PCB files using KiCad, ensuring all tolerances and manufacturer specifications are met.",
      tags: ["KiCad", "PCB Layout", "Manufacturing Files"],
      image: "PCBDesign.jpg"
    },
    {
      id: 7,
      title: "Prototyping",
      status: "current",
      description: "First prototype PCB manufacturing and assembly. Testing mechanical fit, scale accuracy, and overall usability. Currently working through cursor window challenges.",
      tags: ["Prototype", "Testing", "Iteration"],
      image: "Prototyping.jpg"
    },
    {
      id: 8,
      title: "Development of Mass Manufacture Techniques",
      status: "future",
      description: "Optimizing the design and manufacturing process for larger scale production while maintaining quality and cost effectiveness.",
      tags: ["Manufacturing", "Process Optimization", "Quality Control"],
      image: null
    },
    {
      id: 9,
      title: "Shipping and Logistics",
      status: "future",
      description: "Setting up supply chain, packaging design, and distribution channels for getting PCBrules to customers worldwide.",
      tags: ["Logistics", "Supply Chain", "Distribution"],
      image: null
    },
    {
      id: 10,
      title: "Manufacture and Selling",
      status: "future",
      description: "Full production launch with online sales platform, customer support, and ongoing product improvements based on user feedback.",
      tags: ["Production", "Sales", "Customer Support"],
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-[#f8f8f2] dark">
      {/* Navigation bar */}
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-[#bd93f9] text-[#282a36] hover:bg-[#bd93f9]/80 text-lg px-4 py-2">
            In Development
          </Badge>
          <h1 className="text-4xl md:text-6xl text-[#f8f8f2]">
            PCBrule
          </h1>
          <p className="text-xl text-[#6272a4] max-w-3xl mx-auto leading-relaxed">
            A pocket slide rule made from printed circuit board - combining vintage calculation methods with modern PCB manufacturing
          </p>
          
          {/* Ko-fi Support Button */}
          <div className="pt-4">
            <Button 
              className="bg-[#ff5722] hover:bg-[#ff5722]/80 text-white px-8 py-3 h-auto gap-3"
              onClick={() => window.open('https://ko-fi.com/marcusjyoo', '_blank')}
            >
              <Heart className="h-5 w-5" />
              Support the development here!
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-[#383838] border-[#44475a]">
            <ImageWithFallback
              src="PCBruleHero.jpg"
              alt="PCBrule - Printed Circuit Board Slide Rule"
              className="w-full h-96 object-cover"
            />
          </Card>
        </div>

        {/* Project Overview */}
        <div className="space-y-8 mb-16">
          {/* Story - Full Width */}
          <Card className="bg-[#383838] border-[#44475a]">
            <CardContent className="p-8">
              <h3 className="text-2xl text-[#f8f8f2] mb-4">Story</h3>
              <p className="text-[#6272a4] leading-relaxed">
                I've had this idea for nearly 6 years now. I was a freshman in high school when I first learned what a slide rule was. My FIRST robotics mentor 
                brought a slide rule to a meeting one time and I was blown away by the magic math stick and what it could do. I've always been attracted to purely mechanical 
                things - I love analog photography because I find it really neat that you can produce an image only using gears, curtains, levers, glass, chemistry, etc.
                My favorite school supply throughout high school was this cherry red DigiKey PCB ruler - there was there was a satisfying quality about the gold letering 
                and just how durable it was. Since then, I've had this nagging idea in my head, "Wouldn't it be awesome if you made a slide rule out of Printed 
                Circuit Board?" it said. Now as a sophomore in university I'm finally acting on that idea... and it is pretty awesome I think.
              </p>
            </CardContent>
          </Card>

          {/* Inspiration and what's a slide rule?- Half Width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-6">
                <h3 className="text-xl text-[#f8f8f2] mb-3">Inspiration</h3>
                <p className="text-[#6272a4] leading-relaxed">
                  "You've had this idea for a while... What pushed you to actually make it?" you ask. Well it's simple. I'm a student in a competitive field. I wanted to make a really cool and memorable "buisness card" that I could hand out at my school's career fair. I was hoping that this memorable object would sit on a comapny recruiter's desk with my name on it and they'd see it and want to give me an internship. Selling them and bringing it to market was mostly an afterthought.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-6">
                <h3 className="text-xl text-[#f8f8f2] mb-3">Wait, what's a slide rule?</h3>
                <p className="text-[#6272a4] leading-relaxed">
                A slide rule is a mechanical calculator - engineers used them before the advent of digital computers. It's a tool that operates on the principle of adding together logarithms. The Apollo astronauts carried a Pickett N600-ES to the moon, and the PCBrule is modeled after that very same design - with identical scales and calculation capabilities. It's a layout that's been time tested and literally approved by NASA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Panel Image */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-[#383838] border-[#44475a]">
            <ImageWithFallback
              src="PCBrulePanel.jpg"
              alt="PCB panel"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>

        {/* Development Timeline */}
        <div id="timeline-section" className="mt-16 pt-24 border-t border-[#44475a] space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-[#f8f8f2]">Development Timeline</h2>
            <p className="text-lg text-[#6272a4] max-w-2xl mx-auto">
              Tracking the journey from concept to market reality
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#bd93f9] via-[#bd93f9] to-[#44475a]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelinePhases.map((phase, index) => {
                const isCompleted = phase.status === "completed";
                const isCurrent = phase.status === "current";
                const isFuture = phase.status === "future";
                
                return (
                  <div key={phase.id} className="relative flex items-start gap-8">
                    {/* Timeline Node */}
                    <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 relative z-10 mt-2 ${
                      isCompleted 
                        ? "bg-[#bd93f9] border-[#bd93f9]" 
                        : isCurrent 
                        ? "bg-[#bd93f9] border-[#bd93f9] animate-pulse" 
                        : "bg-[#2d2d2d] border-[#44475a]"
                    }`}>
                      {isCurrent && (
                        <div className="absolute inset-0 w-4 h-4 bg-[#bd93f9] rounded-full animate-ping opacity-75"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Text Content */}
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className={`text-xl ${isFuture ? "text-[#6272a4]" : "text-[#f8f8f2]"}`}>
                              {phase.title}
                            </h3>
                            <Badge 
                              variant="outline" 
                              className={
                                isCompleted 
                                  ? "border-[#50fa7b] text-[#50fa7b]" 
                                  : isCurrent 
                                  ? "border-[#bd93f9] text-[#bd93f9]" 
                                  : "border-[#6272a4] text-[#6272a4]"
                              }
                            >
                              {isCompleted ? "Completed" : isCurrent ? "In Progress" : "Future"}
                            </Badge>
                          </div>
                          
                          <p className={`leading-relaxed ${isFuture ? "text-[#6272a4]" : "text-[#6272a4]"}`}>
                            {phase.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {phase.tags.map((tag) => (
                              <Badge 
                                key={tag}
                                variant="outline" 
                                className={`border-[#44475a] ${isFuture ? "text-[#6272a4]" : "text-[#6272a4]"}`}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Image Content */}
                        {phase.image && (
                          <div className="lg:col-span-1">
                            <Card className="overflow-hidden bg-[#383838] border-[#44475a]">
                              <ImageWithFallback
                                src={phase.image}
                                alt={`${phase.title} development phase`}
                                className="w-full h-40 object-cover"
                              />
                            </Card>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 pt-16 border-t border-[#44475a]">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl text-[#f8f8f2]">Technical Specifications</h2>
            <p className="text-lg text-[#6272a4]">Current design parameters and constraints</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-6">
                <h3 className="text-xl text-[#f8f8f2] mb-4">Construction Details</h3>
                <div className="space-y-2 text-[#6272a4]">
                  <div className="flex justify-between">
                    <span>Length:</span>
                    <span>6.5 inches</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surface Finish:</span>
                    <span>Electroless Nickel Immersion Gold</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Soldermask:</span>
                    <span>Matte Black</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legend Printing:</span>
                    <span>White Silkscreen</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-6">
                <h3 className="text-xl text-[#f8f8f2] mb-4">Cost Breakdown</h3>
                <div className="space-y-2 text-[#6272a4]">
                  <div className="flex justify-between">
                    <span>Fabrication Cost (PCBway, 40 units):</span>
                    <span>$15.57/board</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hardware Cost (est):</span>
                    <span>$2.25/unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping + Packaging Cost (est):</span>
                    <span>$6.75/unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Unit Cost (est):</span>
                    <span>$24.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Prototype Demonstration */}
        <div className="mt-16 pt-16 border-t border-[#44475a]">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl text-[#f8f8f2]">Current Prototype Demonstration</h2>
            <p className="text-lg text-[#6272a4]">See the PCBrule in action</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-[#383838] border-[#44475a]">
              <CardContent className="p-0">
              <div className="relative aspect-video bg-[#282a36]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/w8ouSeyVjwU"
                  title="PCBrule Prototype Demonstration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="mt-16 pt-16 border-t border-[#44475a]">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl text-[#f8f8f2]">Next Steps & Current Challenges</h2>
            <p className="text-lg text-[#6272a4]">Current focus areas for prototype refinement</p>
          </div>

          <div className="space-y-8">
            {/* Current Status */}
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-[#bd93f9] text-[#282a36]">Currently Working On</Badge>
                  <h3 className="text-xl text-[#f8f8f2]">Prototype Stage - First Working Version Complete</h3>
                </div>
                <p className="text-[#6272a4] leading-relaxed mb-6">
                  I have successfully completed the first working prototype of the PCBrule. While the basic functionality is proven, 
                  there are several key mechanical challenges that need to be addressed to improve usability and long-term durability.
                </p>
              </CardContent>
            </Card>

            {/* Challenge 1 - Cursor Window Issues */}
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-8">
                <h3 className="text-xl text-[#f8f8f2] mb-4">Challenge 1: Cursor Window Positioning & Friction</h3>
                <p className="text-[#6272a4] leading-relaxed mb-4">
                  The current design has the cursor windows sitting directly on the faces of the scales, which creates several issues:
                </p>
                <ul className="space-y-2 text-[#6272a4] list-disc ml-6 mb-4">
                  <li>Increased friction when sliding the cursor, making precise positioning difficult</li>
                  <li>The slide mechanism tends to catch and move the cursor unintentionally during calculations</li>
                  <li>Physical contact between the acrylic windows and scale surfaces risks scratching over time</li>
                  <li>The sliding action feels less smooth and precise than ideal for accurate calculations</li>
                </ul>
                <p className="text-[#6272a4] leading-relaxed">
                  <strong className="text-[#f8f8f2]">Solution approach:</strong> I'm working on redesigning the cursor to ride on the top and bottom edges of the stator, 
                  lifting it off the scale faces entirely. This requires careful engineering of the cursor geometry and potentially adding guide rails or tracks.
                </p>
              </CardContent>
            </Card>

            {/* Challenge 2 - Material Durability */}
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-8">
                <h3 className="text-xl text-[#f8f8f2] mb-4">Challenge 2: Acrylic Window Durability</h3>
                <p className="text-[#6272a4] leading-relaxed mb-4">
                  The current acrylic cursor windows, while functional, present durability concerns:
                </p>
                <ul className="space-y-2 text-[#6272a4] list-disc ml-6 mb-4">
                  <li>Acrylic is prone to scratching, especially with repeated use</li>
                  <li>The windows are currently the most fragile component of the entire assembly</li>
                  <li>Scratches on the viewing windows would significantly impact the user experience</li>
                  <li>Long-term wear could make scale readings difficult or inaccurate</li>
                </ul>
                <p className="text-[#6272a4] leading-relaxed">
                  <strong className="text-[#f8f8f2]">Solution approach:</strong> I want to experiment with milled polycarbonate cursor windows. 
                  Polycarbonate offers superior impact resistance and scratch resistance compared to acrylic, potentially making the PCBrule 
                  nearly indestructible while maintaining optical clarity for precise scale reading.
                </p>
              </CardContent>
            </Card>

            {/* Challenge 3 - Shim Manufacturing */}
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-8">
                <h3 className="text-xl text-[#f8f8f2] mb-4">Challenge 3: Shim Manufacturing</h3>
                <p className="text-[#6272a4] leading-relaxed mb-4">
                  There are stainless steel shims that provide clearance for the slide + cursor movement. Here are the issues with how these are made on the prototype:
                </p>
                <ul className="space-y-2 text-[#6272a4] list-disc ml-6 mb-4">
                  <li>Extremely crude, cut from shim strips using scissors</li>
                  <li>Painstaking process working with such small pieces of metal</li>
                  <li>Shims are prone to moving arround and falling out/interfering with movement</li>
                  <li>Not precise and unrepeatable</li>
                </ul>
                <p className="text-[#6272a4] leading-relaxed">
                  <strong className="text-[#f8f8f2]">Solution approach:</strong> I have purchased a 2mm hole punch, I am hoping that I can use this in conjunction 
                  with a 3D-printed jig to quickly, accurately, and repeatably produce the small stainless steel shims that provide movement clearance.
                </p>
              </CardContent>
            </Card>

            {/* Next Iterations */}
            <Card className="bg-[#383838] border-[#44475a]">
              <CardContent className="p-8">
                <h3 className="text-xl text-[#f8f8f2] mb-4">Upcoming Prototype Iterations</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#bd93f9] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#f8f8f2] mb-1">Mechanical redesign of cursor guidance system</p>
                      <p className="text-[#6272a4] text-sm">Engineering cursor rails and guides to eliminate acrylic surface contact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#bd93f9] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#f8f8f2] mb-1">Polycarbonate window prototyping and testing</p>
                      <p className="text-[#6272a4] text-sm">Sourcing and machining polycarbonate alternatives for durability testing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#bd93f9] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#f8f8f2] mb-1">Friction and smoothness optimization</p>
                      <p className="text-[#6272a4] text-sm">Testing different materials and coatings for optimal slide feel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#bd93f9] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#f8f8f2] mb-1">Long-term durability testing</p>
                      <p className="text-[#6272a4] text-sm">Stress testing the updated design for wear patterns and reliability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#bd93f9] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#f8f8f2] mb-1">Shim manufacturing jig</p>
                      <p className="text-[#6272a4] text-sm">Developing a jig to assist in punching and cutting of 0.1mm SS shim pieces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#bd93f9] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#f8f8f2] mb-1">Bow spring bending jig</p>
                      <p className="text-[#6272a4] text-sm">Need to make a device to repeatably and consistently bend the phosphor bronze cursor springs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About Purchasing & Support Section */}
        <div className="mt-16 pt-16 border-t border-[#44475a] text-center">
          <div className="space-y-8">
            <h2 className="text-2xl text-[#f8f8f2]">About Purchasing & Development Support</h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-[#6272a4] leading-relaxed mb-6">
                Lots of people have already contacted me asking how they could purchase one or if there's any way they could preorder one. 
                I really appreciate your enthusiasm for this project. It's really motivating me to continue to refine and improve the product and process.
              </p>
              <p className="text-[#6272a4] leading-relaxed mb-6">
                However, I'm still a student and school is my first priority. I'm not even sure I will have the time to be able to bring this product to market. 
                At this point there are still a bunch of issues that need to be hammered out before I even think about selling them. I am not comfortable selling 
                a product that doesn't exist yet and I'm not confident I am able to make to my standards.
              </p>
              <p className="text-[#6272a4] leading-relaxed mb-8">
                While I'm not comfortable taking money in exchange for a product I'm not sure I can make yet, I would not mind obligation-free donations to this project. 
                It's not cheap to develop a product like this. So I greatly appreciate your support.
              </p>
            </div>
            <Button 
              className="bg-[#ff5722] hover:bg-[#ff5722]/80 text-white px-8 py-3 h-auto gap-3"
              onClick={() => window.open('https://ko-fi.com/marcusjyoo', '_blank')}
            >
              <Heart className="h-5 w-5" />
              Support the development here!
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}