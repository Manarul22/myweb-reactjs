import { Component } from "react";


class ListMakanan extends Component {
   constructor(props) {
      super(props)
      this.state = {datalist: this.props.linkgambar}
   }
   render() {
      return (
         <div>
            <img src={this.state.datalist} alt="Produk Makanan" width="200" />
         </div>
      )
   }
}

export default ListMakanan;