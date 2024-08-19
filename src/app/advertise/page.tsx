'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

type FormInputs = {
  bannerAdSize: string;
  termOfContract: string;
  additionalNotes: string;
  companyName: string;
  fullName: string;
  idNumber: string;
  emailAddress: string;
};

const AdRequestForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dun to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-auburn mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SIGN UP <span className="text-redwood">NOW</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-rawUmber mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          and request for a contract
        </motion.p>
        <motion.div 
          className="h-1 w-32 bg-auburn mx-auto mb-12"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.div>

        <motion.div
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 p-6 sm:p-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-auburn">DETAILS</h2>
              <div className="mb-4">
                <label htmlFor="bannerAdSize" className="block mb-2 text-rawUmber">Banner Ad Size*</label>
                <input
                  {...register('bannerAdSize', { required: 'This field is required' })}
                  id="bannerAdSize"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                />
                {errors.bannerAdSize && <p className="text-redwood text-sm mt-1">{errors.bannerAdSize.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="termOfContract" className="block mb-2 text-rawUmber">Term of Contract*</label>
                <input
                  {...register('termOfContract', { required: 'This field is required' })}
                  id="termOfContract"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                />
                {errors.termOfContract && <p className="text-redwood text-sm mt-1">{errors.termOfContract.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="additionalNotes" className="block mb-2 text-rawUmber">Additional Notes</label>
                <textarea
                  {...register('additionalNotes')}
                  id="additionalNotes"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                  rows={4}
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-auburn">COMPANY DETAILS</h2>
              <div className="mb-4">
                <label htmlFor="companyName" className="block mb-2 text-rawUmber">Name of Company*</label>
                <input
                  {...register('companyName', { required: 'This field is required' })}
                  id="companyName"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                />
                {errors.companyName && <p className="text-redwood text-sm mt-1">{errors.companyName.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="fullName" className="block mb-2 text-rawUmber">Full Name*</label>
                <input
                  {...register('fullName', { required: 'This field is required' })}
                  id="fullName"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                />
                {errors.fullName && <p className="text-redwood text-sm mt-1">{errors.fullName.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="idNumber" className="block mb-2 text-rawUmber">ID Number*</label>
                <input
                  {...register('idNumber', { required: 'This field is required' })}
                  id="idNumber"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                />
                {errors.idNumber && <p className="text-redwood text-sm mt-1">{errors.idNumber.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="emailAddress" className="block mb-2 text-rawUmber">Email Address*</label>
                <input
                  {...register('emailAddress', { 
                    required: 'This field is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  id="emailAddress"
                  className="w-full p-2 border border-brownSugar rounded-md focus:border-auburn focus:ring focus:ring-auburn focus:ring-opacity-50"
                />
                {errors.emailAddress && <p className="text-redwood text-sm mt-1">{errors.emailAddress.message}</p>}
              </div>
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-auburn text-white py-3 px-4 rounded-md hover:bg-redwood transition-colors duration-300 flex items-center justify-center"
              >
                SUBMIT
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdRequestForm;