import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ProjectDialog from "./ProjectDialog/ProjectDialog";

import classes from "./Project.module.css";
import projectData from "./projectData";

const Projects = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [content, setContent] = useState({
        title: "",
        category: "",
        text: [],
        links: [],
        technologies: [],
        image: "",
    });

    const closeHandler = () => {
        setOpenDialog(false);
    };

    const openHandler = ({
        title,
        categories,
        text,
        links,
        technologies,
        img,
    }) => {
        setOpenDialog(true);
        setContent({
            title: title,
            categories: categories,
            text: text,
            links: links,
            technologies: technologies,
            image: img,
        });
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {projectData
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((project) => (
                        <GridListTile
                            key={project.title}
                            classes={{ tile: classes.tile }}
                            onClick={() => openHandler(project)}
                        >
                            <img src={project.img} alt={project.title} />
                            <GridListTileBar
                                titlePosition="bottom"
                                title={project.title}
                            />
                        </GridListTile>
                    ))}
            </GridList>
            <ProjectDialog
                open={openDialog}
                closing={closeHandler}
                content={content}
            />
        </div>
    );
};

export default Projects;
