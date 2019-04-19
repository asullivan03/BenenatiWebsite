import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Terms from './Terms.component';
import Questions from './Questions.component';
import '../App.css';

class IntakeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {language: "English"};
        this.handleLanguage = this.handleLanguage.bind(this);
    }

    handleLanguage(e, language) {
        console.log(language);
        this.setState(state => ({
            language: language
        }));
      }

    render() {
        return ( 
        <div className="intakeForm" >
            <Grid className="intakeGrid"
                    container
                    alignItems="center"
                    direction="row"
                    justify="flex-start">
                <Grid item xs={12}>
                <ToggleButtonGroup className={"toggleGroup " + (this.language == 'English' ? 'selected' : '')} value={this.language} exclusive onChange={this.handleLanguage}>
                    <ToggleButton className="toggle" value="English">
                        <div>English</div>
                    </ToggleButton>
                    <ToggleButton value="Spanish">
                        <div>Spanish</div>
                    </ToggleButton>
                </ToggleButtonGroup>
                </Grid>
                <Terms language={this.state.language} />
                <Questions language={this.state.language} />
            </Grid>   
        </div>
        );
    }
}

export default IntakeForm;