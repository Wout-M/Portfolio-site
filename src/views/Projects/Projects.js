import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ProjectDialog from "./ProjectDialog/ProjectDialog";

import classes from "./Project.module.css";
import projectData from "./projectData";

const sorting = (a,b) => {
    if(a.categories[0] === b.categories[0]) return a.title.localeCompare(b.title)

    return a.categories[0].localeCompare(b.categories[0])
}

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

    const openHandler = (title, text, image, links, categories, technologies) => {
        setOpenDialog(true);
        setContent({
            title: title,
            categories: categories,
            text: text,
            links: links,
            technologies: technologies ,
            image: image,
        });
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {projectData.sort((a,b) => sorting(a,b)).map((tile) => (
                    <GridListTile
                        key={tile.title}
                        classes={{ tile: classes.tile }}
                        onClick={() =>
                            openHandler(
                                tile.title,
                                tile.text,
                                tile.img,
                                tile.links,
                                tile.categories,
                                tile.technologies
                            )
                        }
                    >
                        <img
                            src={tile.img}
                            alt={tile.title}
                        />
                        <GridListTileBar
                            titlePosition="bottom"
                            title={tile.title}
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
