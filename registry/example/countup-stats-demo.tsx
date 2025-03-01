import { MousePointerClick, Share2, Users } from "lucide-react";
import { CountUp } from "../pioneerui/countup-stats";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";



export default function CountUpStatsDemo() {
    return (
        <div className="grid gap-6 md:grid-cols-3 bg-black">
        {/* Users Stats */}
        <Card className="border-indigo-800/20 bg-black/40 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-indigo-400">
              <Users className="h-5 w-5" />
              Active Users
            </CardTitle>
            <CardDescription>Total registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <CountUp
                end={100000}
                duration={5}
                separator=","
                className="text-3xl font-bold text-white md:text-4xl"
              />
              <span className="text-sm text-indigo-400">users</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">Growing strong since launch</p>
          </CardContent>
        </Card>

        {/* Clicks Stats */}
        <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <MousePointerClick className="h-5 w-5" />
              Total Clicks
            </CardTitle>
            <CardDescription>Engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <CountUp
                end={3000000}
                duration={5}
                separator=","
                className="text-3xl font-bold text-white md:text-4xl"
              />
              <span className="text-sm text-purple-400">clicks</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">High user engagement rate</p>
          </CardContent>
        </Card>

        {/* Shares Stats */}
        <Card className="border-pink-800/20 bg-black/40 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-pink-400">
              <Share2 className="h-5 w-5" />
              Content Shares
            </CardTitle>
            <CardDescription>Social reach</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <CountUp end={2000} duration={3} separator="," className="text-3xl font-bold text-white md:text-4xl" />
              <span className="text-sm text-pink-400">shares</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">Viral content distribution</p>
          </CardContent>
        </Card>

        {/* Additional Stats Row */}
        <Card className="border-blue-800/20 bg-black/40 backdrop-blur md:col-span-3">
          <CardHeader>
            <CardTitle className="text-blue-400">Growth Metrics</CardTitle>
            <CardDescription>Year-over-year performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Monthly Active Users</p>
                <div className="flex items-baseline gap-1">
                  <CountUp end={45000} duration={3} separator="," className="text-2xl font-bold text-white" />
                  <span className="text-xs text-blue-400">users/mo</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Average Daily Clicks</p>
                <div className="flex items-baseline gap-1">
                  <CountUp end={250000} duration={3} separator="," className="text-2xl font-bold text-white" />
                  <span className="text-xs text-blue-400">clicks/day</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Conversion Rate</p>
                <div className="flex items-baseline gap-1">
                  <CountUp
                    end={4.85}
                    duration={5}
                    decimals={2}
                    suffix="%"
                    className="text-2xl font-bold text-white"
                  />
                  <span className="text-xs text-blue-400">avg</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
    }
