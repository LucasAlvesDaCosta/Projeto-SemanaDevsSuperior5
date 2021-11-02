import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTale from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
function App() {
  return (
    <>
     <NavBar />
     <div className="container">
       <h1 className="text-primary py-3"> Dash Board - Vendas</h1>
        <div className = "row px-3">
          <div className = "col-sm-6">
            <h5 className = "text-center text-secondary"> Taxa de Sucesso (%) </h5>
             <BarChart />
          </div>
          <div className = "col-sm-6">
            <h5 className = "text-center text-secondary">Todas as vendas</h5>
             <DonutChart />
          </div>
        </div>
        <div className = "py-3">
          <h5 className = "text-primary">Todas Vendas</h5>

        </div>
       <DataTale />
     </div>
     <Footer />
   </>
  );
}

export default App;
