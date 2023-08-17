"use client";
import { useState } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

  var filteredProjects;

  if (["design", "development"].includes(category)) {
    filteredProjects = projects.filter((projectInfo) => {
      return projectInfo.categories.includes(category);
    });
  } else {
    filteredProjects = projects;
  }

  const projectItems = filteredProjects.map((projectInfo) => (
    <ProjectCard key={projectInfo.title} {...projectInfo} />
  ));

  return (
    <>
      <CategorySelector
        selected={category}
        onSelect={(newCategory) => setCategory(newCategory)}
      />

      <div className={styles.cardsContainer}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2 }}>
          <Masonry gutter={"3rem"}>{projectItems}</Masonry>
        </ResponsiveMasonry>
      </div>
      <button className={styles.btnAccent}>Load more</button>
    </>
  );
}
