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
        image: "",
    });

    const closeHandler = () => {
        setOpenDialog(false);
    };

    const openHandler = (title, text, image, links, category) => {
        setOpenDialog(true);
        setContent({
            title: title,
            category: category,
            text: text,
            links: links,
            image: image,
        });
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {projectData.map((tile) => (
                    <GridListTile
                        key={tile.title}
                        classes={{ tile: classes.tile }}
                        onClick={() =>
                            openHandler(
                                tile.title,
                                tile.text,
                                Object.values(tile.img)[0],
                                tile.links,
                                tile.category
                            )
                        }
                    >
                        <img
                            src={Object.values(tile.img)[0]}
                            alt={tile.title}
                        />
                        <GridListTileBar
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                            }}
                            titlePosition="top"
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
