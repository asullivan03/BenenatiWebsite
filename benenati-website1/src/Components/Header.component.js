import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import mainLogo from '../img/bene-header-logo.png';
import numberLogo from '../img/header-cta.png';

class Header extends Component {
    render() {
        return ( 
        <div className="Header" >
            <Grid container>
                <Grid item xs={12}>
                <Grid
                    className="headerArea"
                    container
                    alignItems="center"
                    direction="row"
                    justify="space-between"
                >
                <Grid item> <img className="mainLogo" src={mainLogo}  /> </Grid>
                <Grid item> <img className="numberLogo" src={numberLogo}  /> </Grid>
                </Grid>
                </Grid>
            </Grid>   
        </div>
        );
    }
}

export default Header;
