'use client'
import HeadMeta from "./head";
import Dashboard from "@/components/templates/Dashboard"

export default function Home() {
  const meta = {
    type: "website",
    description: "fitness king offers an innovative online platform that allows users to simulate and diagnose various health conditions. Take advantage of our advanced technology and comprehensive database to gain insights into your health status and potential conditions.",
    title: "Dashboard layout Fitness King"
  }

  return (
    <>
      <HeadMeta meta={meta} />
      <Dashboard />
    </>
  )
}
