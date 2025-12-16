import { motion } from "framer-motion";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import { RiFileExcel2Fill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTableau } from "react-icons/si";

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
                {/* Frontend */}
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <RiReactjsFill className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <BiLogoTypescript className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <RiTailwindCssFill className="text-3xl text-stone-500"/>
                </motion.div>

                {/* Backend */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaNode className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <SiExpress className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <BiLogoPostgresql className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <IoLogoFirebase className="text-3xl text-stone-500"/>
                </motion.div>

                {/* Data Analytics */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaPython className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <RiFileExcel2Fill className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <SiTableau className="text-3xl text-stone-500"/>
                </motion.div>

                {/* Design & Tools */}
                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <IoLogoFigma className="text-3xl text-stone-500"/>
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-3 border-stone-400 p-4">
                    <FaGithub className="text-3xl text-stone-500"/>
                </motion.div>
            </div>
        </div>
    )
};

export default Technologies;