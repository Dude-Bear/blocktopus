import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const CalculateIndexBox = (selectedRows) => {
  let mkt = 0;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => navigate("/personal-index", { state: { data } });

  try {
    mkt = selectedRows.selectedRows[0].personal_index_market_cap;
  } catch (error) {}

  return (
    <div className="w-80 m-auto mb-5">
      <div className=" rounded-div ">
        <h3 className="mt-2 mx-6 ">
          <span className="block">Index Market Cap:</span>
          <span className="font-bold text-2xl">{mkt.toLocaleString()}</span>
        </h3>
        <h3 className="mt-3 mx-6 text-xs">Amount to be invested</h3>

        <div className="flex mx-6">
          {/* <div>
            <input
              type="text"
              className="my-2 p-3 mr-2 w-28 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="1.000"
            />
          </div> */}
          <div>
            {/* <button className="my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold w-28">
                Calculate
              </button> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="my-2 p-3 mr-2 w-28 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="1.000"
                {...register("amount", {
                  required: "This field is required",
                })}
              />

              <input
                value="Calculate"
                type="submit"
                className="my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold w-28"
              />
            </form>
            {selectedRows.selectedRows.length < 1 && <h2>error.</h2>}
            <div>
              <ErrorMessage
                errors={errors}
                name="amount"
                as="p"
                class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateIndexBox;
