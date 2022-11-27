import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:phong.thanh971997@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ConTact
      </h3>

      <div className="flex flex-col space-y-10 pt-10">
        <h4 className="text-2xl font-semibold text-center xl:py-6">
          Contact with me.{" "}
          <span className="underline decoration-[#2cf9fa]/50">Let's Talk</span>
        </h4>
        <div className="xl:grid xl:grid-cols-2 w-[80%] mx-auto ">
          <div className="space-y-10 pb-4">
            <div className="flex items-center space-x-5 justify-center xl:justify-start">
              <PhoneIcon className="text-[#2cf9fa] h-7 w-7 animate-pulse" />
              <p className="text-xl">0979399509</p>
            </div>
            <div className="flex items-center space-x-5 justify-center xl:justify-start">
              <MapIcon className="text-[#2cf9fa] h-7 w-7 animate-pulse" />
              <p className="text-xl">Đoan Van Bo P14 Q4 TPHCM</p>
            </div>
            <div className="flex items-center space-x-5 justify-center xl:justify-start">
              <EnvelopeIcon className="text-[#2cf9fa] h-7 w-7 animate-pulse" />
              <p className="text-xl">phong.thanh971997@gmail.com</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-1/2"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-1/2"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
              name=""
              id=""
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#2cf9fa] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
