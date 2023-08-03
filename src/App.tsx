import { useForm } from "react-hook-form";
import "./App.css";

enum CategoryEnum {
  groceries = "Groceries",
  utilities = "Utilities",
  entertainment = "Entertainment",
}

interface FormInput {
  description: String;
  amount: Number;
  category: CategoryEnum;
}

function App() {
  const { register, handleSubmit } = useForm<FormInput>();
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Description
          </label>
          <input className="form-control" id="" {...register("description")} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Amount
          </label>
          <input
            className="form-control"
            type="number"
            id=""
            {...register("amount")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Category
          </label>
          <select className="form-select" {...register("category")}>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default App;
