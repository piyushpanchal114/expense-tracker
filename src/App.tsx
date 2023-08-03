import { FieldValues, FormState, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleForm = (data: FieldValues) => console.log(data);

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit(handleForm)}>
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
            {...register("amount")}
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
    </>
  );
}

export default App;
