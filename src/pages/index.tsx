import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl font-bold">
        The Motion Journal — Coming Soon
      </motion.h1>
    </div>
  );
}
