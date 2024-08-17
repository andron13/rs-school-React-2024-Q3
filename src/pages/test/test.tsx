import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { validateFormData } from "@/pages/test/validationSchemaTest.ts";
import { RootState, selectCountries } from "@/shared/store";
import { setUncontrolledFormData } from "@/shared/store/formSlice.ts";
import { CustomFormData, Gender } from "@/shared/types";

export const Test = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state: RootState) => selectCountries(state));

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CustomFormData>();

  const onSubmit = async (data: CustomFormData) => {
    const imageBase64: string | undefined = undefined;

    // if (data.image && data.image.length > 0) {
    //   try {
    //     imageBase64 = await fileToBase64(data.image[0]);
    //   } catch (error) {
    //     console.error("Error reading image file", error);
    //   }
    // }

    const validationResult = await validateFormData({
      ...data,
      image: data.image ? data.image[0] : undefined,
    });

    if (validationResult.valid) {
      console.group();
      console.log("Form submitted successfully!");
      console.log({ ...data, image: imageBase64 });
      console.groupEnd();

      clearErrors();
      dispatch(
        setUncontrolledFormData({
          ...data,
          gender: data.gender || "",
          image: imageBase64 || "",
          timestamp: Date.now(),
        }),
      );

      setTimeout(() => {
        navigate("/");
      }, 700);
    } else {
      validationResult.errors.forEach((error: string) => {
        if (error.includes("Name")) setError("name", { message: error });
        if (error.includes("Age")) setError("age", { message: error });
        if (error.includes("Email")) setError("email", { message: error });
        if (error.includes("Gender")) setError("gender", { message: error });
        if (error.includes("Password must include"))
          setError("password", { message: error });
        if (error.includes("Confirm Password"))
          setError("confirmPassword", { message: error });
        if (error.includes("must match"))
          setError("confirmPassword", { message: error });
        if (error.includes("terms")) setError("terms", { message: error });
        if (error.includes("Image")) setError("image", { message: error });
        // Country doesn't need to be validated
        if (error.includes("Country")) setError("country", { message: error });
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg"
    >
      <div className="text-center text-2xl font-bold text-blue-600">
        Join Us
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Name
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              id="name"
              {...field}
              className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
          )}
        />
        {errors.name && (
          <div className="form-error text-red-600">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="age" className="mb-2 text-lg font-medium text-gray-800">
          Age
        </label>
        <Controller
          name="age"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <input
              id="age"
              type="number"
              {...field}
              className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your age"
            />
          )}
        />
        {errors.age && <div className="form-error">{errors.age.message}</div>}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Email
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              id="email"
              type="email"
              {...field}
              className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          )}
        />
        {errors.email && (
          <div className="form-error">{errors.email.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Password
        </label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              id="password"
              type="password"
              {...field}
              className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
          )}
        />
        {errors.password && (
          <div className="form-error text-red-600">
            {errors.password.message}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="confirmPassword"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Confirm Password
        </label>
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              id="confirmPassword"
              type="password"
              {...field}
              className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm your password"
            />
          )}
        />
        {errors.confirmPassword && (
          <div className="form-error text-red-600">
            {errors.confirmPassword.message}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="gender"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Gender
        </label>
        <Controller
          name="gender"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <select
              id="gender"
              {...field}
              className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option value={Gender.Male}>{Gender.Male}</option>
              <option value={Gender.Female}>{Gender.Female}</option>
              <option value={Gender.Diverses}>{Gender.Diverses}</option>
            </select>
          )}
        />
        {errors.gender && (
          <div className="form-error">{errors.gender.message}</div>
        )}
      </div>

      <div>
        <button type="submit" className="btn-submit btn-submit--enabled">
          Submit
        </button>
      </div>
    </form>
  );
};
