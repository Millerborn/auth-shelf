import React , { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    button: {
        width: 150,
        padding: 10,
        margin: theme.spacing.unit,
    },
    div: {
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderWidth: 1,
        width: 800,
        borderRadius: 10,
        margin: "auto"
    },
    form: {
        backgroundColor: "white",
        textAlign: "center",
        padding: 10,
        width: "auto",
        height: "auto"
    },
    textField: {
        width: 221,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        // backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 5
    },
});

class AddItemForm extends Component {

    state = {
        description: '',
        imageUrl: '',
        personId: null
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit:', this.state);
        this.props.dispatch({ type: 'ADD_ITEM', payload: this.state });
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            personId: this.props.reduxState.user.id
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.div}>
                <h1 style={{textAlign: "center"}}>Add New Item</h1>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <TextField
                        required
                        id="description"
                        label="Description"
                        onChange={this.handleChangeFor('description')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.description}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        required
                        id="imageUrl"
                        label="Image Url"
                        onChange={this.handleChangeFor('imageUrl')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.imageUrl}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><br></br>
                    <Button type="submit" variant="contained" className={classes.button}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
  
};

AddItemForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(AddItemForm);
