import React , { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class AddItemForm extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                Add Item Form.
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
