import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import '../App.css';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language
        };
      }

    render() {
        return ( 
            <Grid container>
                <Grid item xs={12}>
                
               
                        {this.state.language == "English" ? 
                        (
                            <Grid className=""
                spacing={16}
                    container
                    alignItems="center"
                    direction="row"
                    justify="space-between">
                                <Grid item>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="First Name: "
                                    defaultValue=""
                                    margin="normal"
                                    />
                                </Grid>
                                  
<Grid item><TextField
                                    required
                                    id="standard-required"
                                    label="Middle Name: "
                                    defaultValue=""
                                    margin="normal"
                                    />
</Grid>


<TextField
                                    required
                                    id="standard-required"
                                    label="Last Name: "
                                    defaultValue=""
                                    margin="normal"
                                    />
                            </Grid>
                        ) : 
                        (
                            <div>
                                
                            </div>
                        )}
                </Grid>
                </Grid>
            
        );
    }
}

export default Questions;