import { motion } from "framer-motion"
import { Link } from "react-scroll"

const goals = [
  { name: "Family", icon: "🙏" },
  { name: "Money", icon: "💰" },
  { name: "Body", icon: "💪" },
  { name: "Life", icon: "🌟" },
  { name: "Relationships", icon: "❤️" },
]

export default function GoalsOverview() {
  return (
    <div className="flex justify-center flex-wrap gap-4 py-8">
      {goals.map((goal, index) => (
        <Link key={goal.name} to={goal.name} smooth={true} duration={500} offset={-100}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-20 rounded-lg p-4 text-center w-40 h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all"
          >
            <span className="text-4xl mb-2">{goal.icon}</span>
            <h3 className="text-xl font-semibold">{goal.name}</h3>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

