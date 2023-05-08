"use client";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

const ProjectCard: FC<Project> = (project: Project) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 13 }}
      className="flex"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="rounded-xl p-1 bg-orange-400/[17%]
        border-[3px] border-double border-violet-400
        hover:border-cyan-400 hover:bg-gradient-to-tr
        from-pink-500/40 to-cyan-400/25 transition"
        key={project._id}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={750} // 250
            height={300} // 100
            className="object-cover rounded-xl border
            border-violet-300 transition-shadow" // border-gray-500 // hover:drop-shadow-4xl
          />
        )}
        <div
          className="mt-2 font-extrabold
        bg-gradient-to-r from-orange-400 to via-red-500
        bg-purple-600 bg-clip-text text-transparent"
        >
          {project.name}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
