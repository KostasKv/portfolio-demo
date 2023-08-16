"use client";
import { useState } from "react";
import Image from "next/image";

import Masonry from "react-responsive-masonry";
import styles from "./projects-display.module.css";
import anotherOneImg from "@public/another-one.png";
import blenderRendersImg from "@public/blender-renders.png";
import kotoStudioImg from "@public/koto-studio.png";
import switchBlackImg from "@public/switch-black.png";
import uideliImg from "@public/uideli.png";
import remarketImg from "@public/remarket.png";
import { CategorySelector } from "./category-selector";
import { ProjectCard } from "./project-card";

export function ProjectsDisplay() {
  const [category, setCategory] = useState("all");

  const projects = [
    {
      src: uideliImg,
      title: "UIDeli.com",
      categories: ["design", "development"],
      year: 2023,
    },
    {
      src: kotoStudioImg,
      title: "Koto Studio",
      categories: ["development"],
      year: 2023,
    },
    {
      src: switchBlackImg,
      title: "Switch Black",
      categories: ["design"],
      year: 2023,
    },
    {
      src: remarketImg,
      title: "ReMarket",
      categories: ["development"],
      year: 2023,
    },
    {
      src: anotherOneImg,
      title: "Another One",
      categories: ["development"],
      year: 2023,
    },
    {
      src: blenderRendersImg,
      title: "Blender Renders",
      categories: ["design", "development"],
      year: 2023,
    },
  ];

  return (
    <>
      <CategorySelector
        selected={category}
        onSelect={(newCategory) => setCategory(newCategory)}
      />
      <div className={styles.work__cardsContainer}>
        {projects.map((projectInfo) => (
          <ProjectCard key={projectInfo.title} {...projectInfo} />
        ))}
      </div>
      <button className={styles.btnAccent}>Load more</button>
    </>
  );
}
