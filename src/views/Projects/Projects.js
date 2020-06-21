import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ProjectDialog from "./ProjectDialog/ProjectDialog";
import Typography from "@material-ui/core/Typography";

import classes from "./Project.module.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [content, setContent] = useState({
        title: "",
        category: "",
        text: [],
        links: [],
        technologies: [],
        images: [],
    });
    const { t } = useTranslation("projects");

    const closeHandler = () => {
        setOpenDialog(false);
    };

    const openHandler = ({
        title,
        categories,
        text,
        links,
        technologies,
        imgs,
    }) => {
        setOpenDialog(true);
        setContent({
            title: title,
            categories: categories,
            text: text,
            links: links,
            technologies: technologies,
            images: imgs,
        });
    };

    const projectMapper = (projects) => {
        return (
            <GridList cellHeight={180} className={classes.gridList}>
                {projects.map((project) => (
                    <GridListTile
                        key={project.title}
                        classes={{ tile: classes.tile }}
                        onClick={() => openHandler(project)}
                    >
                        <img src={project.imgs[0]} alt={project.title} />
                        <GridListTileBar
                            titlePosition="bottom"
                            title={project.title}
                        />
                    </GridListTile>
                ))}
            </GridList>
        );
    };

    return (
        <div className={classes.root}>
            <Typography className={classes.text} variant="h5">
                {t("mine")}
            </Typography>
            {projectMapper(
                t("projectData", { returnObjects: true }).filter(
                    (project) => !project.school
                )
            )}
            <Typography className={classes.text} variant="h5">
                {t("school")}
            </Typography>
            {projectMapper(
                t("projectData", { returnObjects: true }).filter(
                    (project) => project.school
                )
            )}
            <ProjectDialog
                open={openDialog}
                closing={closeHandler}
                content={content}
            />
        </div>
    );
};

export default Projects;
