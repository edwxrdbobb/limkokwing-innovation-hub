import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Define interfaces for our data structure
interface ProgramStat {
  label: string;
  value: string;
}

interface Program {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  colorIndex: number;
  stats: ProgramStat[];
  learnMoreLink: string;
  isWide?: boolean;
}

interface SuccessMetric {
  value: string;
  label: string;
  colorIndex: number;
}

// Program data
const programsData: Program[] = [
  {
    id: "leap",
    title: "Start-ups Incubation (LEAP)",
    description: "A 3-level hands-on and contextualized Lean Startup training model to help students build profitable products/services through our comprehensive nine-phase development process.",
    imageSrc: "/startup-incubation.jpg",
    imageAlt: "Start-ups Incubation",
    colorIndex: 1,
    stats: [
      { label: "Success Rate", value: "85%" },
      { label: "Startups Launched", value: "10+" }
    ],
    learnMoreLink: "/programs/leap"
  },
  {
    id: "techconnect",
    title: "TechConnect",
    description: "A platform designed to connect students from different ICT-related degree programs. Creates a community for students to collaborate, learn, and share knowledge in technology through discussion forums, mentorship programs, job opportunities, and skill-building workshops.",
    imageSrc: "/tech-connect.jpg",
    imageAlt: "TechConnect",
    colorIndex: 2,
    stats: [
      { label: "Active Members", value: "50+" },
      { label: "Monthly Events", value: "2-4" }
    ],
    learnMoreLink: "/programs/techconnect"
  },
  {
    id: "startupsconnect",
    title: "Startups Connect",
    description: "A platform designed to connect students from different entrepreneurship-related programs within Limkokwing University and its community. Creates a community for students to collaborate, learn, and share knowledge in entrepreneurship, with focus on startup ventures through discussion forums, mentorship programs, and startup-focused workshops.",
    imageSrc: "/startup-connect.jpeg",
    imageAlt: "Startups Connect",
    colorIndex: 3,
    stats: [
      { label: "Network Size", value: "10+" },
      { label: "Collaborations", value: "30+" }
    ],
    learnMoreLink: "/programs/startupsconnect"
  },
  {
    id: "pressclub",
    title: "LimPress Club",
    description: "Provides intellectual and professional support to communication students, with the goal of creating a platform for broadcasting and journalism students to gain practical knowledge of the field of journalism outside of the classroom.",
    imageSrc: "/LimPress.jpg",
    imageAlt: "LimPress Club",
    colorIndex: 4,
    stats: [
      { label: "Student Members", value: "150+" },
      { label: "Publications", value: "25+" } 
    ],
    learnMoreLink: "/programs/pressclub"
  },
  {
    id: "corporate",
    title: "Corporate Innovation & Industry Partnership",
    description: "Connecting public and private sectors with entrepreneurs, creating a collaborative platform between government, industry, innovators, academia and start-ups/entrepreneurs to energize an active entrepreneurial ecosystem. Provides training, production and generation of new ideas, products and content powered by technology.",
    imageSrc: "/digital-freelancer.jpg",
    imageAlt: "Corporate Innovation & Industry Partnership",
    colorIndex: 5,
    stats: [
      { label: "Partner Companies", value: "50+" },
      { label: "Projects Completed", value: "80+" }
    ],
    learnMoreLink: "/programs/corporate",
    isWide: true
  }
];

// Success metrics data
const successMetrics: SuccessMetric[] = [
  { value: "500+", label: "Startups Launched", colorIndex: 1 },
  { value: "$2.5M", label: "Funding Raised", colorIndex: 2 },
  { value: "1200+", label: "Jobs Created", colorIndex: 3 }
];

export function ProgramsSection({ isPrograms }: { isPrograms: boolean }) {
  return (
    <section className="relative py-20 max-w-7xl mx-auto">
      <BackgroundBeams />
      <div className="container relative z-10">
        {
          !isPrograms? 
          <div className="mb-16 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-chart-2/20 text-chart-2 hover:bg-chart-2/30">Our Programs</Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Comprehensive Support for Entrepreneurs
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            From ideation to scaling, we provide the tools, mentorship, and resources you need to succeed.
          </p>
        </div>
        :
        ""
        }
        <BentoGrid>
          {programsData.map((program) => (
            <BentoCard 
              key={program.id}
              className={`border-chart-${program.colorIndex}/20 bg-gradient-to-br from-chart-${program.colorIndex}/5 to-transparent ${program.isWide ? 'lg:col-span-2' : ''}`}
              img={<img src={program.imageSrc} alt={program.imageAlt} className="h-full w-full object-cover rounded-lg" />}
              title={program.title}
              description={program.description}
            >
              <div className="mt-6 space-y-4">
                {program.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className={`font-semibold text-chart-${program.colorIndex}`}>{stat.value}</span>
                  </div>
                ))}
                <Button 
                  variant="ghost" 
                  className={`group/btn w-full justify-between p-0 text-chart-${program.colorIndex} hover:bg-chart-${program.colorIndex}/10`} 
                  asChild
                >
                  <Link href={program.learnMoreLink}>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>
          ))}
{/* 
          <BentoCard 
            className="border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-transparent lg:col-span-2"
            img={<img src="/innovation-hub-event-presentation.jpg" alt="Success Stories" className="h-32 w-full object-cover" />}
            title="Success Stories"
          >
            <div className="space-y-6">
              <p className="leading-relaxed text-muted-foreground">
                Our programs have helped launch over 500 startups, with many going on to secure funding and create
                jobs in Sierra Leone. Join our community of successful entrepreneurs and innovators.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold text-chart-${metric.colorIndex}`}>{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-1 hover:bg-chart-1/10" asChild>
                <Link href="/about#success-stories">
                  View all stories
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </BentoCard> */}
        </BentoGrid>
      </div>
    </section>
  );
}