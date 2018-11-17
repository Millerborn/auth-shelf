import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';


class CardItem extends Component {

     // run getItems when page loads
    componentDidMount() {
         this.getItems();
    }

    // getProject dispatches a call to get projects 
     getItems = (event) => {
        this.props.dispatch({type: 'FETCH_ITEMS'});
    }

 // deletes item
    deleteItem = (id) => { 
    //eslint-disable-next-line
        if (confirm("Are you sure you want to delete this project?")) {
            this.props.dispatch({
                type: 'DELETE_ITEM',
                payload: id
            });
        }
        
    }

  render (){
      console.log('this.props.reduxState:', this.props.reduxState);
  return (
    <div>
        {this.props.reduxState.shelf.map( item =>(
          <section key={item.id} className="display" >
          <Card id="card" key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt= "https://via.placeholder.com/160x80"
                height="200"
                src = "https://via.placeholder.com/160x80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button varient="contained" color="secondary"
                onClick={() =>  {this.deleteItem(item.id)}} 
                >DELETE</Button>
            </CardActions>
          </Card>
          </section>
        ))}
    </div>
  );
}
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CardItem);