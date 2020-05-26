import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
//import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import tileData from "./projectData";
import ProjectDialog from "./ProjectDialog/ProjectDialog"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        //width: 500,
        //height: 450,
    },
    titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

const Projects = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const closeHandler = () => {
        setOpen(false)
    }

    const openHandler = () => {

    }

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
                {tileData.map((tile) => (
                    <GridListTile key={tile.title}>
                        <img src={Object.values(tile.img)[0]} alt={tile.title} />
                        <GridListTileBar
                            className={classes.titleBar}
                            titlePosition="top"
                            title={tile.title}
                            actionIcon={
                                <IconButton
                                    aria-label={`info about ${tile.title}`}
                                    className={classes.icon}
                                    onClick={openHandler}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <ProjectDialog open={open} closing={closeHandler}/>
        </div>
    );
};

export default Projects;
