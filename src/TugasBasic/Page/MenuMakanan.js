import { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <center>
          <table>
            <tr>
              <td>
                <ListMakanan linkgambar="https://upload.wikimedia.org/wikipedia/commons/c/c3/Nasi_Tumpeng.jpg" />
                <center><p>Nasi Tumpeng</p></center>
              </td>
              <td>
                <ListMakanan linkgambar="https://upload.wikimedia.org/wikipedia/commons/3/3f/Nasi_Padang_Rendang.jpg" />
                <center><p>Nasi Rendang</p></center>
              </td>
            </tr>
            <tr>
              <td>
                <ListMakanan linkgambar="https://upload.wikimedia.org/wikipedia/commons/9/9a/Nasi_Liwet_Jolem.jpg" />
                <center><p>Nasi Liwet</p></center>
              </td>
              <td>
                <ListMakanan linkgambar="https://upload.wikimedia.org/wikipedia/commons/3/3e/Nasi_goreng_indonesia.jpg" />
                <center><p>Nasi Goreng</p></center>
              </td>
            </tr>
          </table>
        </center>
      </div>
    );
  }
}

export default MenuMakanan;