import React from "react";
import { Link } from "react-router-dom";
import { 
  Church, 
  MapPin, 
  User, 
  Calendar, 
  ExternalLink, 
  Globe2, 
  HeartHandshake, 
  ArrowRight,
  Sprout,
  ShieldCheck,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChurchPlant {
  name: string;
  location: string;
  pastor: string;
  established: string;
  description: string;
  image?: string;
  website?: string;
  facebook?: string;
}

const daughterChurches: ChurchPlant[] = [
  {
    name: "BBBC - San Ildefonso",
    location: "Malipampang, San Ildefonso, Bulacan",
    pastor: "Ptr. Bernard Magat",
    established: "1993",
    description: "Started mission in 1993, organized in 1999. Acquired 2,600 sq. m. property in Malipampang, Bulacan.",
    facebook: "https://www.facebook.com/BEREAN.SIB",
  },
  {
    name: "BBBC - San Diego, California",
    location: "Chula Vista, San Diego, CA, USA",
    pastor: "Pastoral Staff",
    established: "1997",
    description: "Mission started in 1997, church formally organized in 1999 ministering to the Filipino-American community.",
    website: "https://www.bereanbible7.org",
  },
  {
    name: "BBBC - Mendez, Cavite",
    location: "Mendez, Cavite",
    pastor: "Ptr. Rolly Gargarita",
    established: "2004",
    description: "Mission planted in 2004, organized in 2007. Acquired a 900 sq. m. church site in 2011.",
    facebook: "https://www.facebook.com/profile.php?id=61555801749313",
  },
  {
    name: "BBBC - Lipa",
    location: "Lipa & Talisay, Batangas",
    pastor: "Ptr. Johndy De Galicia",
    established: "2007",
    description: "Mission begun in 2007, organized in 2014. Acquired 2,250 sq. m. campus property in Batangas.",
  },
  {
    name: "BBBC - San Pedro, Laguna",
    location: "Cuyab, San Pedro, Laguna",
    pastor: "Ptr. Bernie Arandia",
    established: "2009",
    description: "Adopted as a sister extension work in 2009, actively reaching families in Laguna and Tunasan.",
    facebook: "https://www.facebook.com/bereantunasan/",
  },
  {
    name: "BBBC - Leeds, United Kingdom",
    location: "Leeds, West Yorkshire, UK",
    pastor: "Pastoral Leadership",
    established: "2011",
    description: "International mission work planted in Leeds in 2011, organized in 2019 for believers in Great Britain.",
    facebook: "https://www.facebook.com/profile.php?id=100067987925526",
  },
  {
    name: "BBBC - Tondo, Manila",
    location: "1974 Old Torres St., Tondo, Manila",
    pastor: "Ptr. Manuel Romero",
    established: "2020",
    description: "Converted and established into a Berean Bible Baptist congregation in 2020, preaching the Gospel in the heart of Tondo.",
    facebook: "https://www.facebook.com/bbbcintondo",
  },
];

export const DaughterChurches: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0f2042] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4 px-3 py-1">
            Church Planting Network
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Daughter Churches
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Multiplying disciples, training laborers, and establishing autonomous New Testament Baptist churches across the Philippines and overseas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
        {/* Intro */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042] mb-4">
            Autonomous in Ministry, United in Doctrine
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            BBBC Molino has been blessed by God to sponsor, plant, and co-labor with 7 autonomous daughter churches. Each church is self-governing while remaining closely bonded in doctrine, fellowship, and love for souls.
          </p>
        </section>

        {/* Church Plants Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daughterChurches.map((church, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all flex flex-col justify-between border-t-4 border-t-amber-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="gold">Est. {church.established}</Badge>
                    <Church className="w-4 h-4 text-slate-400" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{church.name}</CardTitle>
                  <CardDescription className="text-xs flex items-center text-slate-600">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-amber-600 shrink-0" />
                    <span>{church.location}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-xs text-slate-600 pt-0">
                  <div className="flex items-center space-x-2 text-slate-800 font-semibold bg-slate-50 p-2 rounded-lg">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>{church.pastor}</span>
                  </div>
                  <p className="leading-relaxed">{church.description}</p>

                  <div className="flex items-center gap-2 pt-2">
                    {church.facebook && (
                      <Button asChild size="sm" variant="outline" className="text-xs h-8 flex-1">
                        <a href={church.facebook} target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </Button>
                    )}
                    {church.website && (
                      <Button asChild size="sm" variant="navy" className="text-xs h-8 flex-1">
                        <a href={church.website} target="_blank" rel="noopener noreferrer">
                          Website <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Church Planting 4-Step Vision */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="navy" className="mb-2">Biblical Pattern</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Our Church Planting Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">1. Plant</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Conducting soulwinning, Bible studies, and planting missions where Christ is not yet preached.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">2. Equip</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Training pastors and teachers through Bible College and hands-on pastoral mentorship.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">3. Support</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Providing financial backing, prayer, and encouragement until the church is self-sustaining.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">4. Multiply</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Commissioning organized daughter churches to plant their own daughter churches in turn.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
