"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Center } from "@react-three/drei"
import { Suspense } from "react"
import Header from "./components/Header"
import GoalsOverview from "./components/GoalsOverview"
import GoalSection from "./components/GoalSection"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"
import { goalDetails } from "./data" // Import goalDetails

const affirmations = [
  "I am capable of achieving greatness",
  "Every day, I'm getting better and better",
  "I attract success and abundance",
  "I am confident in my abilities",
  "I am worthy of love and respect",
  "I embrace challenges as opportunities for growth",
  "My potential is limitless",
  "I am in control of my destiny",
  "I radiate positivity and attract positivity",
  "I am resilient and can overcome any obstacle",
]

export default function VisionBoard2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-teal-800 to-yellow-600 text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <GoalsOverview />
      {Object.keys(goalDetails).map((category) => (
        <GoalSection key={category} category={category as keyof typeof goalDetails} />
      ))}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">Daily Affirmations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {affirmations.map((affirmation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg p-4 text-center"
            >
              <p className="text-lg italic">"{affirmation}"</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Canvas className="h-[50vh] w-full">
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Center>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1.5}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              2025 Vision
              <meshStandardMaterial color="gold" />
            </Text3D>
          </Center>
        </Suspense>
      </Canvas>
      <Footer />
    </div>
  )
}

