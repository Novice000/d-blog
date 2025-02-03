import React from "react";
import Header from "@/components/home/header";
import Breadcrumbs from "@/components/home/breadcrumbs";
import Bar from "@/components/home/page-heading";
import ArtistCarousel from "@/components/home/carousel";

export default function HomeClient() {
    return (
        <div className="h-screen w-screen bg-black display flex flex-col font-integral">
            <Header />
            <Breadcrumbs />
            <Bar />
            <ArtistCarousel />
        </div>
    )
}