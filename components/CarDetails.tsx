"use client";
import { Carprops } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Carprops;
}
const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={`relative z-10`} onClose={closeModal}>
          {" "}
          {/* dialog is basically the modal */}
          <Transition.Child /* this transition is for the modal that it will display */
            as={Fragment}
            enter="ease-out duration-300"
            enterTo="opacity-80"
            enterFrom="opacity-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"> </div>
          </Transition.Child>
          <div className="fixed overflow-y-auto inset-0 ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child /* this transition is for the modal that it will display */
                as={Fragment}
                enter="ease-out duration-300"
                enterTo="opacity-100 scale-90"
                enterFrom="opacity-0 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel
                  className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-lg bg-primary-blue-100 text-left shadow-lg transition-all flex flex-col gap-5 p-6`}
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-xl border"
                  >
                    <Image
                      src={`/close.svg`}
                      alt="closed"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col  ">
                    <div className="bg-pattern bg-cover relative w-full h-40 bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car-img"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1 relative w-full h-24 bg-slate-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "19")}
                          alt="car-img"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-slate-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car-img"
                          fill
                          priority
                          className="object-contain mt-5"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-slate-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car-img"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(
                        (
                          [
                            key,
                            value,
                          ] /* object.entries helps take kry and values */
                        ) => (
                          <div
                            className="flex justify-between gap-5 w-full text-right"
                            key={key}
                          >
                            <h4 className="text-gray capitalize">
                              {key.replace("mpg", "km/l").split("_").join(" ")}
                            </h4>
                            <p className="text-black-100 font-semibold  ">
                              {value}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
