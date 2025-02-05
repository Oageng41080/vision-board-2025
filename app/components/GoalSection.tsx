import { motion } from "framer-motion"

const goalDetails = {
  Family: [
    {
      goal: "Deepen relationship with God",
      details:
        "Pray daily for 15 minutes, read 4 Bible chapters, and meditate on their meaning. Join a local Bible study group for community support.",
      affirmation: "My faith grows stronger each day, guiding my actions and decisions.",
    },
    {
      goal: "Learn the Creed",
      details: "Memorize one section of the Creed each week. Reflect on its meaning and how it applies to daily life.",
      affirmation: "I am grounded in my beliefs, which provide me strength and purpose.",
    },
    {
      goal: "Quality time with loved ones",
      details:
        "Schedule weekly family lunches or calls. Express gratitude daily to a family member. Plan quarterly family outings or reunions.",
      affirmation: "My bonds with family grow stronger through intentional, quality time together.",
    },
  ],
  Money: [
    {
      goal: "Start thriving chisanyama business",
      details:
        "Develop a detailed business plan. Secure a prime location. Collaborate with friends to define roles. Implement effective marketing strategies. Aim for consistent growth in daily sales.",
      affirmation: "My business thrives through my dedication and smart strategies.",
    },
    {
      goal: "Save R65,000 for Lasik and clear aligners",
      details:
        "Set aside R6,000 monthly in a dedicated savings account. Cut unnecessary expenses. Explore additional income streams like tech support or freelance typing projects.",
      affirmation: "I am committed to investing in my health and appearance, creating the best version of myself.",
    },
    {
      goal: "Build emergency fund and start investing",
      details:
        "Save R1,000 monthly for emergencies. Research and start investing in low-risk ETFs. Attend financial literacy workshops to improve money management skills.",
      affirmation: "I am financially savvy, building a secure future for myself.",
    },
  ],
  Body: [
    {
      goal: "Bench press 60kg for 12 reps",
      details:
        "Follow a progressive overload program. Increase weight by 2.5kg every 2-3 weeks. Focus on proper form and technique. Incorporate complementary exercises for overall chest strength.",
      affirmation: "My body grows stronger every day through consistent, focused effort.",
    },
    {
      goal: "Complete a full marathon",
      details:
        "Follow a 6-month marathon training plan. Gradually increase weekly mileage. Incorporate strength training and proper nutrition. Join a local running group for motivation.",
      affirmation: "I have the endurance and mental strength to achieve my running goals.",
    },
    {
      goal: "Develop a consistent skincare routine",
      details:
        "Establish a morning and evening skincare routine. Use quality products suited for your skin type. Stay hydrated and maintain a balanced diet for skin health.",
      affirmation: "I radiate confidence through my healthy, glowing skin.",
    },
  ],
  Life: [
    {
      goal: "Overcome laziness with written goals and routines",
      details:
        "Write down daily, weekly, and monthly goals. Create a structured daily routine. Use productivity apps to track progress. Reward yourself for consistency.",
      affirmation: "I am disciplined and productive, making the most of each day.",
    },
    {
      goal: "Gain confidence in communication",
      details:
        "Practice public speaking weekly. Join a local Toastmasters club. Read books on effective communication. Engage in conversations with new people regularly.",
      affirmation: "I communicate with clarity, confidence, and charisma.",
    },
    {
      goal: "Get driver's license and improve typing skills",
      details:
        "Study for learner's exam 30 minutes daily. Schedule regular driving lessons. Practice touch typing for 15 minutes daily, aiming to reach 60 WPM.",
      affirmation: "I am constantly improving my skills, becoming more capable each day.",
    },
  ],
  Relationships: [
    {
      goal: "Build charisma and confidence to approach women",
      details:
        "Practice maintaining eye contact daily. Engage in small talk with strangers weekly. Read books on body language and social dynamics. Attend social events regularly.",
      affirmation: "I am charismatic and confident in social situations, attracting positive relationships.",
    },
    {
      goal: "Date more while being genuine and respectful",
      details:
        "Set up at least one date per month. Focus on active listening and genuine interest. Reflect on each date for personal growth. Be open and honest about intentions.",
      affirmation: "I attract meaningful connections by being my authentic self.",
    },
    {
      goal: "Cultivate self-love and practice gratitude",
      details:
        "Write three things you're grateful for daily. Celebrate small wins. Practice positive self-talk. Engage in regular self-care activities.",
      affirmation: "I love and accept myself fully, attracting positivity into my life.",
    },
  ],
}

export default function GoalSection({ category }: { category: keyof typeof goalDetails }) {
  return (
    <motion.section
      id={category}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12 px-4"
    >
      <h2 className="text-4xl font-bold mb-6 text-yellow-300">{category} Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goalDetails[category].map((goal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{goal.goal}</h3>
            <p className="text-sm mb-4">{goal.details}</p>
            <p className="text-md italic text-yellow-200">"{goal.affirmation}"</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

