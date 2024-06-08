
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionHistory } from "./components/TransactionHistory";
import { TransactionForm } from "./components/TransactionForm";
import { GlobalProvider } from "./contexts/GlobalState";

function App() {
  return (
    <div className="App">
      <div className="bg-gray">
        <div className="grid place-items-center gap-0 ">
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <GlobalProvider>
              <Header />
              <Balance />
              <IncomeExpense />
              <TransactionHistory />
              <TransactionForm />
            </GlobalProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
