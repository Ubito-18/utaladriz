import { RiReactjsLine } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
import { SiExpress } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: {y: -3},
    animate: {
        y: [3, -3],
        transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        }
    }


});

const Technologies = () => {
    return (
        <div className="flex justify-center border-b-2 border-stone-300 pb-10">
            <div className="flex flex-wrap justify-center items-center gap-16">
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <RiReactjsLine className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <RiTailwindCssFill className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaNode className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <SiExpress className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <BiLogoPostgresql className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaPython className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaGithub className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaHtml5 className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaCss3Alt className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <DiJavascript className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <IoLogoFigma className="text-3xl text-stone-500"/>
                </motion.div>
            </div>
        </div>
    )
};

export default Technologies;