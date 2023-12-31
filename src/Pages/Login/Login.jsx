import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>login</title>
      </Helmet>
      <div>
        <div></div>
        <div>
          <h2>Login Here</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>First Name</label>
              <input className="w-full input border p-2 rounded-xl" placeholder="Enter your name" {...register("name")} />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input className="w-full input border p-2 rounded-xl" placeholder="Enter your email" {...register("email")} />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input className="w-full input border p-2 rounded-xl" placeholder="Enter password" {...register("password")} />
            </div>
            <div className="form-control">
              <label>Photo</label>
              <input className="w-full input border p-2 rounded-xl" placeholder="Enter photo URL" {...register("photo")} />
            </div>
            <div className="form-control mt-4">
                <input type="submit" className="bg-green-200 w-full py-2 rounded-xl" value="Login" />
            </div>
          </form>
          <p className="text-center">New here? Please <Link to="/register">Register</Link> here</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
