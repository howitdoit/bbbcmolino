import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    month: "DEC",
    day: "7",
    title: "Lord's Supper & Fellowship",
    location: "BBBC Molino Sanctuary",
    desc: "Communion service honoring Christ's sacrifice, followed by church family fellowship.",
  },
  {
    month: "DEC",
    day: "8",
    title: "Couples Conference",
    location: "BBBC Molino",
    desc: "A spiritually enriching day for married couples seeking biblical wisdom for marital unity.",
  },
  {
    month: "DEC",
    day: "14",
    title: "Thanksgiving Sunday",
    location: "BBBM Extension / BBBC Sanctuary",
    desc: "A special Sunday praising the Lord for a whole year of providential grace and guidance.",
  },
];

const timelineEvents = [
  {
    date: "Recent Outreach",
    title: "YPS Gospel Saturation",
    desc: "Young People and Singles saturation outreach distributing Gospel tracts and witnessing across Molino.",
    tag: "Evangelism",
    image: "/images/events/thanksgiving-2025.jpg",
  },
  {
    date: "Missions Focus",
    title: "Missions Emphasis Days",
    desc: "Encouraging believers to pray and partner with local and foreign missionaries through Faith Promise Giving.",
    tag: "Missions",
    image: "/images/events/christmas-2024.jpg",
  },
  {
    date: "Church Leadership",
    title: "Pastoral Ordination & Affirmation",
    desc: "The church council examining and confirming God's call upon pastoral leadership.",
    tag: "Milestone",
    image: "/images/events/youth-revival-2024.jpg",
  },
  {
    date: "Honor & Remembrance",
    title: "Tribute to Late Pastor Medel",
    desc: "Reflecting on decades of selfless gospel ministry, faithful shepherding, and spiritual heritage.",
    tag: "Memorial",
    image: "/images/events/music-camp-2024.jpg",
  },
];

export const Highlights: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0f2042] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4 px-3 py-1">
            Events & News
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Church Highlights & Events
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Celebrating God&apos;s faithful handiwork in our church community and upcoming gatherings.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
        {/* Upcoming Events */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Upcoming Events</h2>
            <p className="text-slate-600 text-sm mt-2">
              Mark your calendar and participate in our upcoming special gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500 overflow-hidden">
                <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex flex-col items-center justify-center font-bold shrink-0 shadow-md">
                    <span className="text-xs uppercase tracking-wider">{evt.month}</span>
                    <span className="text-2xl leading-none">{evt.day}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base text-slate-900">{evt.title}</CardTitle>
                    <CardDescription className="text-xs flex items-center mt-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-amber-600" />
                      {evt.location}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 leading-relaxed pt-0">
                  <p className="mb-4">{evt.desc}</p>
                  <Button asChild size="sm" variant="outline" className="w-full text-xs">
                    <a href="mailto:info@bbbcmolino.org?subject=Event%20Inquiry">
                      Inquire / Attend <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline of Recent Milestones */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="navy" className="mb-2">Ministry Journey</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Recent Highlights</h2>
            <p className="text-slate-600 text-sm mt-2">
              Remembering the Lord&apos;s blessings in our fellowship and outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timelineEvents.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow flex flex-col bg-slate-50/50"
              >
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/images/building/church-building.jpg";
                    }}
                  />
                  <Badge variant="gold" className="absolute top-3 right-3 shadow-md">
                    {item.tag}
                  </Badge>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
