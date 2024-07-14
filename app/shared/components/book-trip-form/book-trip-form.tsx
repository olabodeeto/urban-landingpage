import React from "react";
import Image from "next/image";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { nigeriaStates } from "../../utils/data";

export default function BookTripForm() {
  // const screenWidth = window.screen.width;
  return (
    <div className="px-2 md:px-3 lg:px-2 w-full mt-8">
      <div className="flex items-start gap-2 w-full">
        <Image
          src="./assets/timline.svg"
          width={10}
          height={40}
          alt=""
          className="w-6 lg:w-[1.45rem] xl:w-6 2xl:w-[1.44rem]"
        />
        <div className="w-full">
          <div className="flex justify-between w-full gap-4 -mt-1">
            <div className="w-1/2">
              <label className="text-base font-light">Departure State</label>
              <div className="mt-3">
                <Select
                  defaultValue="abia"
                  indicator={<KeyboardArrowDown />}
                  sx={{ height: "46px", fontSize: "0.8rem" }}
                  slotProps={{
                    listbox: {
                      sx: {
                        maxHeight: "200px",
                      },
                    },
                  }}
                >
                  {nigeriaStates.map((state, index: number) => (
                    <Option
                      value={state.value}
                      sx={{ fontSize: "0.8rem" }}
                      key={index}
                    >
                      {state.title}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-base font-light">Travel Date</label>
              <div className="mt-3">
                <Input
                  type="date"
                  placeholder="Type in here…"
                  sx={{
                    height: "46px",
                    fontSize: "0.8rem",
                    "--Input-focusedInset": "var(--any, )",
                    "--Input-focusedThickness": "0.25px",
                    "--Input-focusedHighlight": "#15560c",
                    "&:focus-outside": {
                      borderColor: "#000000",
                    },
                    ":focus": "#000",
                  }}
                />
              </div>
            </div>
          </div>

          <div className=" w-full mt-[3.4rem] lg:mt-12">
            <label className="text-base font-light">Destination State</label>
            <div className="mt-3">
              <Select
                defaultValue="abia"
                indicator={<KeyboardArrowDown />}
                sx={{ height: "46px", fontSize: "0.8rem" }}
                slotProps={{
                  listbox: {
                    sx: {
                      maxHeight: "200px",
                    },
                  },
                }}
              >
                {nigeriaStates.map((state, index: number) => (
                  <Option
                    value={state.value}
                    sx={{ fontSize: "0.8rem" }}
                    key={index}
                  >
                    {state.title}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mt-6">
        <label className="text-base font-light">Number of seats</label>
        <div className="mt-3">
          <Select
            defaultValue={18}
            indicator={<KeyboardArrowDown />}
            sx={{ height: "46px", fontSize: "0.8rem" }}
            slotProps={{
              listbox: {
                sx: {
                  maxHeight: "200px",
                },
              },
            }}
          >
            {[6, 10, 18, 20, 24].map((seat, index: number) => (
              <Option value={seat} sx={{ fontSize: "0.8rem" }} key={index}>
                {seat}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-8 flex items-center w-full gap-4">
        <button className="w-1/2 rounded-md py-3 px-4 border-none bg-urban-green text-sm text-white lg:text-sm xl:text-base">
          Contine
        </button>

        <button className="w-1/2 rounded-md py-3 px-2 border border-urban-green text-urban-black text-sm lg:text-sm xl:text-base">
          Check My Bookings
        </button>
      </div>

      <p className="mt-6 underline text-urban-green cursor-pointer text-center">
        Complete Your booking here
      </p>
    </div>
  );
}
