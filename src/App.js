// В этом файле объединяем все наши компоненты

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
	    currentItems: [],
      showFullItem: false,
      fullItem: [],
      items: [
        {
          id: 1,
          title: 'T-shirt',
          img:'t-shirt.jpg',
          desc: 'Designer t-shirt from our brand',
          category: 'T-shirt',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Hoody',
          img:'hoody.jpg',
          desc: 'Designer hoody from our brand',
          category: 'Hoody',
          price: '150.00'
        },
        {
          id: 3,
          title: 'Shorts',
          img:'shorts.jpg',
          desc: 'Designer shorts from our brand',
          category: 'Shorts',
          price: '80.00'
        },
        {
          id: 4,
          title: 'Bag',
          img:'bag.jpg',
          desc: 'Designer bag from our brand',
          category: 'Bag',
          price: '9.99'
        },
        {
          id: 5,
          title: 'Svitshot',
          img:'sveetshot.jpg',
          desc: 'Designer svitshot from our brand',
          category: 'Svitshot',
          price: '100.00'
        },
        {
          id: 6,
          title: 'Jewerly',
          img:'jewerly.jpg',
          desc: 'Designer jewerly from our brand',
          category: 'Jewerly',
          price: '59.99'
        }
      ]
    }
	this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this);
	this.deleteOrder = this.deleteOrder.bind(this);
	this.chooseCategory = this.chooseCategory.bind(this);
  this.onShowItem = this.onShowItem.bind(this);
  }

  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
		    <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory (category) {
	if(category === 'all') {
		this.setState({currentItems: this.state.items})
		return
	}

	this.setState({
		currentItems: this.state.items.filter (el => el.category === category)
	})
  }

  deleteOrder(id){
	this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false

    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
