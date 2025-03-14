import React from "react";
import { useForm } from "react-hook-form";

const ActivityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Activity Logging Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Activity Name</label>
          <input
            type="text"
            {...register("activity", { required: "Activity name is required" })}
            className="w-full mt-1 p-2 border rounded-md"
          />
          {errors.activity && (
            <p className="text-red-500 text-sm">{errors.activity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Duration (minutes)</label>
          <input
            type="number"
            {...register("duration", {
              required: "Duration is required",
              min: { value: 1, message: "Must be at least 1 minute" },
            })}
            className="w-full mt-1 p-2 border rounded-md"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ActivityForm;
