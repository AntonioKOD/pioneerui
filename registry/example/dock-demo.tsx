'use client'
import { useState } from "react";
import { Dock, DockItem, DockIcon, DockLabel } from "../pioneerui/dock";
import { HeartIcon, WalletIcon, StoreIcon, PodcastIcon, TvIcon, MusicIcon } from "lucide-react"; // Adjust the import path as necessary
import {cn} from "@/lib/utils";

const dockItems = {
    media: [
        {
        label: "Music",
        icon: MusicIcon,
        href: "https://www.apple.com/music/",
        target: "_blank",
        },
        {
        label: "TV",
        icon: TvIcon,
        href: "https://www.apple.com/apple-tv-plus/",
        target: "_blank",
        },
        {
        label: "Podcasts",
        icon: PodcastIcon,
        href: "https://www.apple.com/podcasts/",
        target: "_blank",
        },
    ],
}
export default function DockDemo() {
    const [activeTab] = useState<string>("media")
    return (
        <div>
        <Dock>
              {dockItems[activeTab as keyof typeof dockItems].map((item, index) => (
                <DockItem
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  className={cn("transition-colors", activeTab === "media" && "text-purple-400 hover:text-purple-300")}
                >
                  <DockIcon>
                    <item.icon className="h-8 w-8" />
                  </DockIcon>
                  <DockLabel>{item.label}</DockLabel>
                </DockItem>
              ))}
            </Dock>
        </div>
    );
    }
