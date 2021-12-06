import Header from "./Page/Header";
import MenuMakanan from "./Page/MenuMakanan";
import Footer from "./Page/Footer";

function AppBasic() {
  return (
    <div>
      <Header name="Makanan Khas Nusantara"/>
      <MenuMakanan />
      <Footer alamat="Jl. Swadaya VII, Ranggon, Jakarta Timur" kontak="08123456789"/>
    </div>
  );
}

export default AppBasic;
