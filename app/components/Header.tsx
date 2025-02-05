import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-10 px-4"
    >
      <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg">
        Oageng Khuduge
      </h1>
      <p className="text-2xl italic text-white">
        "I am disciplined, confident, and unstoppable. I create opportunities, attract abundance, and build the life of
        my dreams."
      </p>
    </motion.header>
  )
}

