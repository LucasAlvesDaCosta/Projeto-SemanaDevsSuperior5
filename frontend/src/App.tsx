import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTale from "components/DataTable";
function App() {
  return (
    <>
     <NavBar />
     <div className="container">
       <h1 className="text-primary"> Olá mundo!</h1>
       <DataTale />
     </div>
     <Footer />
   </>
  );
}

export default App;
