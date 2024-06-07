import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
// import { useState } from "react";

const MaterialsModal = ({ isOpen, close, item }) => {
  console.log(item);

  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium ">
                    {item.title}
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 ">{item.description}</p>
                  <div className="mt-4">
                    <Button
                      className=" cursor-pointer  gap-2 rounded-md "
                      onClick={close}
                    >
                      X
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MaterialsModal;
