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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#4b0000] to-[#000261]">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-md font-semibold text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required", validate: validateFirstName })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e731b1] focus:ring-2 focus:ring-[#e731b1] transition duration-300"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          {/* Second Name */}
          <div>
            <label className="block text-md font-semibold text-gray-700 mb-1">Second Name</label>
            <input
              type="text"
              {...register("secondName", { required: "Second name is required", validate: validateSecondName })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e731b1] focus:ring-2 focus:ring-[#e731b1] transition duration-300"
            />
            {errors.secondName && <p className="text-red-500 text-sm mt-1">{errors.secondName.message}</p>}
          </div>

          {/* User Name */}
          <div>
            <label className="block text-md font-semibold text-gray-700 mb-1">User Name</label>
            <input
              type="text"
              {...register("userName", { required: "Username is required", validate: validateUserName })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e731b1] focus:ring-2 focus:ring-[#e731b1] transition duration-300"
            />
            {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-md font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", validate: validateEmail })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e731b1] focus:ring-2 focus:ring-[#e731b1] transition duration-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-md font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", validate: validatePassword })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e731b1] focus:ring-2 focus:ring-[#e731b1] transition duration-300"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-md font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              {...register("phoneNo", { required: "Phone number is required", validate: validatePhoneNo })}
              placeholder="+92XXX XXXXXXX"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e731b1] focus:ring-2 focus:ring-[#e731b1] transition duration-300"
            />
            {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-gradient-to-r from-[#3182ce] to-[#e731b1] text-white font-bold rounded-lg hover:from-[#dd6b20] hover:to-[#e731b1] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Task1;
