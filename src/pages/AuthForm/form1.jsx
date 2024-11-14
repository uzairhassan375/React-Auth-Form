import React from "react";
import { useForm } from "react-hook-form";

function Task1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateFirstName = (value) => /^[A-Za-z]+$/.test(value) || "Only letters are allowed";
  const validateSecondName = (value) => /^[A-Za-z]+$/.test(value) || "Only letters are allowed";
  const validateUserName = (value) => /^[A-Za-z0-9!@#$%^&*]+$/.test(value) || "Only letters, numbers, and special characters are allowed";
  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value) || "Invalid email address";
  const validatePassword = (value) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value) ||
    "Password must be at least 8 characters long and contain letters, numbers, and a special character";
  const validatePhoneNo = (value) => /^\+92\d{3}\d{7}$/.test(value) || "Phone number must be in the format +92XXX XXXXXXX";

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/wallpaper1.jpg')`,  // The image is now in the 'public' folder
      }}
    >
      <div className="w-full max-w-md p-8 bg-white opacity-90 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Registration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          {/* First Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required", validate: validateFirstName })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#e731b1] transition duration-300"
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          {/* Second Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">Second Name</label>
            <input
              type="text"
              {...register("secondName", { required: "Second name is required", validate: validateSecondName })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#e731b1] transition duration-300"
            />
            {errors.secondName && <p className="text-red-600 text-sm mt-1">{errors.secondName.message}</p>}
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">User Name</label>
            <input
              type="text"
              {...register("userName", { required: "Username is required", validate: validateUserName })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#e731b1] transition duration-300"
            />
            {errors.userName && <p className="text-red-600 text-sm mt-1">{errors.userName.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", validate: validateEmail })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#e731b1] transition duration-300"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", validate: validatePassword })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#e731b1] transition duration-300"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="text"
              {...register("phoneNo", { required: "Phone number is required", validate: validatePhoneNo })}
              placeholder="+92XXX XXXXXXX"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#e731b1] transition duration-300"
            />
            {errors.phoneNo && <p className="text-red-600 text-sm mt-1">{errors.phoneNo.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#3182ce] text-white rounded-md hover:bg-[#dd6b20] transition-all duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Task1;
