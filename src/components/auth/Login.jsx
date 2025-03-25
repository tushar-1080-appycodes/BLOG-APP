import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div
      className="loginCard"
      onSubmit={handleSubmit(async (data) => {
        await new Promise((resolve)=>setTimeout(resolve,1000))
        console.log(data);
      })}
    >
      <h1>Login</h1>
      <form action="">
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-600 font-black">Enter a valid mail id</span>
        )}
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            pattern:
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-xs">
            <p>Password must have</p>
            <ul className="list-disc list-inside">
              <li>At least 8 characters long</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one digit (0-9)</li>
              <li>At least one special character (@, $, !, %, , ?, &)</li>
            </ul>
          </div>
        )}
        <input type="submit" value={isSubmitting ? "Submitting" : "Login"} />
      </form>
    </div>
  );
};

export default Login;
