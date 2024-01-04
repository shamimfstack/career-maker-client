import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photo).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          });
        });
      })
      .catch(() => {
        console.log("User creation failed");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>register</title>
      </Helmet>
      {/* <div className="flex justify-center items-center"> */}
      {/* <div>
          <img
            src="https://i.ibb.co/c82yZTM/Tablet-login-bro-removebg-preview-1.png"
            alt=""
          />
        </div> */}
      <div className="border py-8 px-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-5 text-center">Register Here</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-2">
            <label>First Name</label>
            <input
              className="w-full input border p-2 rounded-xl"
              placeholder="Enter your name"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="form-control mb-2">
            <label>Email</label>
            <input
              className="w-full input border p-2 rounded-xl"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="form-control mb-2">
            <label>Password</label>
            <div className="relative">
              <input
                className="w-full input border p-2 rounded-xl"
                placeholder="Enter password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-5">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </div>
          </div>
          <div className="form-control mb-2">
            <label>Photo</label>
            <input
              className="w-full input border p-2 rounded-xl"
              placeholder="Enter photo URL"
              {...register("photo")}
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="submit"
              className="bg-green-200 w-full py-2 rounded-xl"
              value="Register"
            />
          </div>
        </form>
        <p className="text-center">
          New here? Please{" "}
          <Link className="text-purple-600 font-bold underline" to="/login">
            Login
          </Link>{" "}
          here
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Register;
