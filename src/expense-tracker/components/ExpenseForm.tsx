// first we import all the modules neededimport { z } from "zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

// define schema for validation rules and error messages for each input field
// for catergory we will use the z.enum(categories) function.
// This is a selection one of many. In our case it will one of the categories.
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50, { message: "Description should be at less then 50 characters." }),

  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100000),

  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

// here we pass the schema as to create a typescript type to ExpseneFormData
type ExpenseFormData = z.infer<typeof schema>;

// The Props are used to return the values, in this case after onSubmit event/
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

// Here we call the formhook "UseForm" with the type of data (ExpenseFormData)
// Now we need to register the fields at the input lines where the field is registerd)
// Next step is to add validation messages. We do this by adding a <p> tjhat is showed
// when from formState errors has been set, like errors.description
// We will render the errors.description.message that we have defined in the schema
// Now we need to handle the form submission. We add onSubmit to the form element.

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(data => { 
         onSubmit(data);
         reset();
         })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default ExpenseForm;
