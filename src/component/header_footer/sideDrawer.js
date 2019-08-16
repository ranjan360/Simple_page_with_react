import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {

    


        return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={() => props.onClose(false)}
                >
                <List component="nav">
                    <ListItem button onClick={() => console.log('Reature')} >
                        Event of star
                    </ListItem>

                    <ListItem button onClick={() => console.log('Reature')} >
                        Event Image
                    </ListItem>

                    <ListItem button onClick={() => console.log('Reature')} >
                        Highlight
                    </ListItem>

                    <ListItem button onClick={() => console.log('Reature')} >
                        Blog
                    </ListItem>

                    <ListItem button onClick={() => console.log('Reature')} >
                        Contact
                    </ListItem>
                </List>        
            </Drawer>
        );
    };

export default SideDrawer;