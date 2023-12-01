import { useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";

function App() {
  const [selectedCategory, setselectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div
        className="grid grid-cols-[auto,1fr]
      flex-grow-1 overflow-auto"
      >
        <div>SIDEBAR</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setselectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
