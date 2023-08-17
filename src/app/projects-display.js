"use client";
import { useState } from "react";

import styles from "./projects-display.module.css";
import shopifyCloneImg from "@public/shopify-clone.png";
import blenderRendersImg from "@public/blender-renders.png";
import kotoStudioImg from "@public/koto-studio.png";
import switchBlackImg from "@public/switch-black.png";
import stackitImg from "@public/stackit.png";
import remarketImg from "@public/remarket.png";
import appMarketingPageImg from "@public/app-marketing-page.jpg";
import audiProductPageImg from "@public/audi-product-page.jpg";
import digitalProductMarketingImg from "@public/digital-product-marketing.jpg";
import flowshapeImg from "@public/flowshape.jpg";
import meditationAppImg from "@public/meditation-app.jpg";
import ourdateImg from "@public/ourdate.jpg";
import slotbloxImg from "@public/slotblox.jpg";
import webDesignTrendsImg from "@public/web-design-trends.jpg";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { CategorySelector } from "./category-selector";
import { ProjectCard } from "./project-card";

export function ProjectsDisplay() {
  const INITIAL_MAX_ITEMS = 6;

  const [category, setCategory] = useState("all");
  const [maxItems, setMaxItems] = useState(INITIAL_MAX_ITEMS);

  const projects = [
    {
      src: stackitImg,
      title: "Stackit",
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
      src: shopifyCloneImg,
      title: "Shopify Clone",
      categories: ["development"],
      year: 2023,
    },
    {
      src: blenderRendersImg,
      title: "Blender Renders",
      categories: ["design", "development"],
      year: 2023,
    },
    {
      src: appMarketingPageImg,
      title: "App Marketing Page",
      categories: ["design"],
      year: 2022,
    },
    {
      src: audiProductPageImg,
      title: "Audi Product Page",
      categories: ["design", "development"],
      year: 2022,
    },
    {
      src: digitalProductMarketingImg,
      title: "Digital Product Marketing",
      categories: ["design", "development"],
      year: 2022,
    },
    {
      src: flowshapeImg,
      title: "FlowShape",
      categories: ["design"],
      year: 2021,
    },
    {
      src: meditationAppImg,
      title: "Meditation App",
      categories: ["development"],
      year: 2021,
    },
    {
      src: ourdateImg,
      title: "Our Date",
      categories: ["development"],
      year: 2020,
    },
    {
      src: slotbloxImg,
      title: "SlotBlox",
      categories: ["design"],
      year: 2019,
    },
    {
      src: webDesignTrendsImg,
      title: "Web Design Trends",
      categories: ["design", "development"],
      year: 2019,
    },
  ];

  function onCategorySelect(newCategory) {
    // Switching category should reset the number of projects shown
    setMaxItems(INITIAL_MAX_ITEMS);
    setCategory(newCategory);
  }

  function increaseNumProjectsDisplayed() {
    const MAX_ITEMS_INCREMENT = 4;

    if (maxItems < projects.length) {
      setMaxItems(maxItems + MAX_ITEMS_INCREMENT);
    }
  }

  var filteredProjects;

  // Filter by selected category
  if (["design", "development"].includes(category)) {
    filteredProjects = projects.filter((projectInfo) => {
      return projectInfo.categories.includes(category);
    });
  } else {
    filteredProjects = projects;
  }

  var canLoadMoreProjects = filteredProjects.length > maxItems;

  // Limit number of items to display
  filteredProjects = filteredProjects.slice(0, maxItems);

  const projectItems = filteredProjects.map((projectInfo, index) => (
    <ProjectCard key={index} {...projectInfo} />
  ));

  return (
    <>
      <CategorySelector
        selected={category}
        onSelect={(newCategory) => onCategorySelect(newCategory)}
      />

      <div className={styles.cardsContainer}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2 }}>
          <Masonry gutter={"3rem"}>{projectItems}</Masonry>
        </ResponsiveMasonry>
      </div>

      {canLoadMoreProjects ? (
        <button
          className={styles.btnAccent}
          onClick={increaseNumProjectsDisplayed}>
          Load more
        </button>
      ) : (
        ""
      )}
    </>
  );
}
