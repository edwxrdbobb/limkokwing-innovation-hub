"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProgramStat {
  label: string;
  value: string;
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface Program {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  imageAlt: string;
  galleryImages: GalleryImage[];
  videoUrl: string;
  colorIndex: number;
  stats: ProgramStat[];
  features: string[];
  testimonials: Testimonial[];
  contactEmail: string;
  applicationLink: string;
}

export default function ProgramDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProgramData = async () => {
      try {
        const response = await fetch(`/api/programs/${id}`);
        
        if (response.ok) {
          const programData = await response.json();
          setProgram(programData);
        } else if (response.status === 404) {
          setProgram(null);
        } else {
          console.error('Failed to fetch program data');
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching program data:", error);
        console.error("Program ID:", id);
        setProgram(null);
        setLoading(false);
      }
    };

    if (id) {
      fetchProgramData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading program details...</div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="container mx-auto py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
        <p className="mb-2 text-gray-600">The program with ID <code className="bg-gray-100 px-2 py-1 rounded text-sm">{id}</code> does not exist.</p>
        <p className="mb-8 text-sm text-gray-500">Available programs: leap, techconnect, startupsconnect, pressclub, corporate</p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
          <Link href="/programs">
            <Button variant="outline">
              View All Programs
            </Button>
          </Link>
          <Link href="/">
            <Button className="bg-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const bgColors = [
    "bg-blue-500/50",
    "bg-green-500/50",
    "bg-purple-500/50",
    "bg-gray-700/50",
    "bg-rose-500/50",
    "bg-cyan-500/50",
  ];
  
  const bgColor = bgColors[program.colorIndex % bgColors.length];

  return (
    <div className={`min-h-screen`}>
      {/* Header */}
      <div className="container mx-auto py-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-100 hover:text-gray-600 mb-6 bg-blue-400 rounded-lg p-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{program.title}</h1>
        <p className="text-xl text-gray-400 max-w-3xl">{program.shortDescription}</p>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[600px] relative mb-12">
        <Image 
          src={program.imageSrc}
          alt={program.imageAlt}
          fill
          className="object-cover "
          priority
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white/10 rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Program</h2>
            <div className="prose max-w-none">
              {program.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-200">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/10 rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Program Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          {
            program.videoUrl? 
              <div className="bg-white/10 rounded-xl p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-4">Program Video</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={program.videoUrl} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-[400px] rounded-lg"
                  ></iframe>
                </div>
              </div>
            :
              ''
          }

          {/* Gallery */}
          <div className="bg-white/10 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {program.galleryImages.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          {/* Stats */}
          <div className="bg-white/10 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Program Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              {program.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-500/10 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Testimonials</h2>
            <div className="space-y-6">
              {program.testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 bg-gray-500/20 rounded-lg">
                  <p className="italic mb-3">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium text-green-300">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Apply */}
          <div className="bg-white/10 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Get Involved</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">Contact Us</p>
                <a href={`mailto:${program.contactEmail}`} className="text-blue-600 hover:underline">
                  {program.contactEmail}
                </a>
              </div>
              <div>
                <Link href={program.applicationLink}>
                  <Button className="w-full">Apply Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}