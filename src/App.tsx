import { FieldValues, FormState, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";
import Button from "./components/Button";
import { useRef, useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";

enum Category {
  none = "",
  groceries = "groceries",
  utilities = "utilities",
  entertainment = "entertainment",
}

// const CategoryEnum = z.nativeEnum(Category);

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  }),
  category: z.nativeEnum(Category),
});

type FormData = z.infer<typeof schema>;

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "entertainment" },
    { id: 2, description: "bb", amount: 20, category: "entertainment" },
    { id: 3, description: "aacca", amount: 30, category: "entertainment" },
    { id: 4, description: "dd", amount: 10, category: "entertainment" },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [items, setItems] = useState([]);
  const descRef = useRef(null);

  const handleForm = (data: FieldValues) => {
    const newObj = { ...data };
    setItems([...items, newObj]);
    reset();
  };

  const handleCategory = (data: HTMLSelectElement) => {
    console.log("Clicked", data);
    console.log(data.target.value);
  };

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
      {/* <form className="needs-validation" onSubmit={handleSubmit(handleForm)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Description
          </label>
          <input className="form-control" id="" {...register("description")} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Amount
          </label>
          <input
            className="form-control"
            type="number"
            id=""
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Category
          </label>
          <select className="form-select" {...register("category")}>
            <option value="none"></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <div className="mt-5">
        <select className="form-select mb-3" onClick={handleCategory}>
          <option value="none">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>

        {items.length !== 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item}>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}
    </>
  );
}

export default App;
