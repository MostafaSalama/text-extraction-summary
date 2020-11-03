import React from "react";
import PropTypes from 'prop-types' ;
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styles from './EntityList.module.css'
const EntityList = ({entities})=>{

    return (
        <List className={styles.mainList}>
            {
                entities.map(e=>{
                    return (
                        <ListItem className={styles.mainListItem} key={e.value}>
                            <ListItemText primary={JSON.stringify(e)}>
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
EntityList.propTypes = {
    entities: PropTypes.array
}
export default EntityList ;
