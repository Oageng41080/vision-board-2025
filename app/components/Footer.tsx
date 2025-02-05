import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-8 px-4 bg-black bg-opacity-30"
    >
      <h3 className="text-2xl font-bold mb-4">My Commitment to 2025</h3>
      <p className="text-lg max-w-2xl mx-auto">
        I, Oageng Khuduge, commit to living each day with purpose, discipline, and gratitude. I will embrace challenges
        as opportunities for growth, celebrate my progress, and never lose sight of the amazing future I'm building.
        This vision board is my compass, guiding me towards the extraordinary life I deserve.
      </p>
    </motion.footer>
  )
}

