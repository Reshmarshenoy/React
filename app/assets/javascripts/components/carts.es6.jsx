
 class Page extends React.Component {
   constructor(props) {
    super(props);
    this.state = { name: 'Sam ',point:0 };
    this.changeNumber = this.changeNumber.bind(this)
  }
  changeNumber(calla){
    console.log("="+calla);
    this.setState({point: calla})
    console.log("FROM PARENT")
  }

render() {
   return (
  <div className="wrapper">
    <TopBar cart_num={this.state.point}/>
    <div className="container">
    <div className="row">
      <SideBar/>
      <ContentSection changenum={this.changeNumber}/>
      
      </div>
    </div>
  </div>
)
 }
 }

 class MyButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {number : 0}
  }
  increments(){
      this.setState({
        number: (this.state.number+1)
      }, function(){
        this.props.changenum(this.state.number)
      });
      
  }
  render(){
    return (
      <div>
        <button onClick={this.increments.bind(this)} className="btn btn-primary btn-md">Add To Cart</button>
      </div>
    )
  }
}
class App extends React.Component {
 
  constructor(props) {
    super(props)
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.state = { hour: hour, minute: minute, second: second };
  }

  clockTick() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({ hour: hour, minute: minute, second: second });
  }

  componentDidMount() {
    setInterval(this.clockTick.bind(this), 1000);
  }

  render() {
    return (
      <div className="App">        
        <div class="panel panel-default">
        <h1>
          {this.state.hour}:
          {this.state.minute}:
          {this.state.second}
        </h1>
        </div>
      </div>
    );
  }
}

    



class TopBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {cart_num:0}
  }

  componentWillReceiveProps(nextProps){
    console.log("ReCEIVE PROPS")
    console.log(nextProps)
    this.setState({
      cart_num: nextProps.cart_num
    })
  }
  render(){
    return(
      <div className="navigation">
     <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">Flipkart
          </div>
          <ul className="nav navbar-nav">
          <li ><a href="#">Home</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">     
          <li>
          <button className="btn btn-info">
          <span className="glyphicon glyphicon-shopping-cart"></span> MyCart <span className="badge"> 
            {this.state.cart_num}
          </span>
          </button></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}

class SideBar extends React.Component{
   constructor(){
    super()
    this.state = {
      active: false 
    }
  }
  render(){
    return(
      <div className="col-md-3 sidebar">
        <div className="vertical menu">
        <ul>
          <SidebarLinks href="#" name="Motorola"/>
          <SidebarLinks href="#" name="Sony"/>
          <SidebarLinks href="#" name="Lenovo"/>
          <SidebarLinks href="#" name="Asus"/>
          <SidebarLinks href="#" name="Dell"/>
          </ul>
        </div>
      </div>
    )
  }
}


class SidebarLinks extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <li>
        <ATag href={this.props.href} name={this.props.name}/>
      </li>
    )
  }
}

class ATag extends React.Component{
  render(){
    return(
      <a href={this.props.href} aria-label={this.props.ariaLabel}>
      {this.props.name}
      </a>
    )
  }
}

class ATagWithIcon extends React.Component{
  render(){
    return(
      <a href={this.props.href} aria-label={this.props.ariaLabel}>
      <span className={this.props.iconClass}></span>
      {this.props.name}
      </a>
    )
  }
}

class ContentSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {cartNum:0}
    this.changeNumber = this.changeNumber.bind(this)
  }

  changeNumber(){
    this.setState({
      cartNum: this.state.cartNum+1
    }, function(){
      this.props.changenum(this.state.cartNum)
    })
  } 
  render(){
    return(


  <div className="col-md-9">
  <div className="row">
  
   <h1>Deal of the day:</h1>  
   <App />
 
  </div>
  <div className="row content text-center">
  <div className="col-md-4">
   <img src="https://rukminim1.flixcart.com/merch/400/400/images/1482042245328.jpg?q=70" alt="bag" height="300" width="200" />
     <h4>       <ATag href="#" name="Powerbank"/></h4>
      <h3>Min. 50% off</h3>   
     
          <MyButton changenum={this.changeNumber}></MyButton>    
    
  </div>
  <div className="col-md-4">
   <img src="https://rukminim1.flixcart.com/image/400/400/backpack/n/g/u/pivot-black-wildcraft-backpack-pivot-black-original-imaebesrfy3apqfy.jpeg?q=70" alt="bag" height="300" width="200" />
     <h4> <ATag href="/reactor/details" name="Bags"/></h4>
      <h3>Min. 30% off</h3>   
     
          <MyButton changenum={this.changeNumber}></MyButton>    
  </div> 
   <div className="col-md-4">
     <img src="https://rukminim1.flixcart.com/image/400/400/smartwatch/j/d/g/ftw2109-fossil-q-original-imaemrhchggpu8qy.jpeg?q=70" alt='watch' height='300' width='200'/>                                     
      <h4> <ATag href="#" name="Watches"/></h4>
      <h3>Min. 80% off</h3>   
      
          <MyButton changenum={this.changeNumber}></MyButton>      
  </div>
  </div> 
  </div>
    )
  }
}


class Detailss extends React.Component {
}