import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
//import ListSubheader from "@material-ui/core/ListSubheader";
import projectData from "./projectData";
import ProjectDialog from "./ProjectDialog/ProjectDialog";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    tile: {
        borderRadius: "10px",
        "&:hover": {
            cursor: "pointer",
        },
    },
    titleBar: {
        background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

const Projects = () => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const [content, setContent] = useState({
        title: "",
        text: [],
        links: [],
        image: "",
    });

    const closeHandler = () => {
        setOpenDialog(false);
    };

    const openHandler = (title, text, image, links) => {
        setOpenDialog(true);

        setContent({
            title: title,
            text: text,
            image: image,
            links: links,
        });
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {/* <GridListTile
                    key="Subheader"
                    cols={2}
                    style={{ height: "auto" }}
                >
                    <ListSubheader component="div">December</ListSubheader>
               </GridListTile>*/}
                {projectData.map((tile) => (

                    <GridListTile
                        key={tile.title}
                        classes={{ tile: classes.tile }}
                        onClick={() =>
                            openHandler(
                                tile.title,
                                tile.text,
                                Object.values(tile.img)[0],
                                tile.links
                            )
                        }
                    >
                        <img
                            src={Object.values(tile.img)[0]}
                            alt={tile.title}
                            
                        />
                            <GridListTileBar
                                className={classes.titleBar}
                                titlePosition="top"
                                title={tile.title}
                                /*onClick={() =>
                                    openHandler(
                                        tile.title,
                                        tile.text,
                                        Object.values(tile.img)[0],
                                        tile.links
                                    )
                                }*/
                            />
                    </GridListTile>
                ))}
            </GridList>
            <ProjectDialog
                open={openDialog}
                closing={closeHandler}
                title={content.title}
                content={content.text}
                image={content.image}
                links={content.links}
            />
        </div>
    );
};

export default Projects;
