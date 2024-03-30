import { useFormik } from 'formik'
import React from 'react'
import { contactfrmSchems } from '../schemas'

const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
};

const ContactForm = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =  
    useFormik({
        initialValues: initialValues,
        validationSchema: contactfrmSchems,
        onSubmit: (values) => {
            console.log(
                "~ file: ContactForm.jsx ~ line l1 ~ ContactForm ~ values",
                values
            );
        },
    });

    

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="mt-[80px] grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input
                            placeholder='First name'
                            type="text"
                            name="firstname"
                            id="first-name"
                            autoComplete="given-name"
                            className="text-white block w-full rounded-md border-b border-solid border-[#C1A358] bg-transparent py-1.5 uppercase font-normal shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#C1A358] sm:text-sm sm:leading-6"
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                        />
                        {errors.firstname && touched.firstname ? ( <p className='text-[#ff0404e0] mt-2 mb-0'>{errors.firstname}</p> ) : null}
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input
                            placeholder='Last name'
                            type="text"
                            name="lastname"
                            id="last-name"
                            autoComplete="given-name"
                            className="text-white block w-full rounded-md border-b border-solid border-[#C1A358] bg-transparent py-1.5 uppercase font-normal shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#C1A358] sm:text-sm sm:leading-6"
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                        {errors.lastname && touched.lastname ? ( <p className='text-[#ff0404e0] mt-2 mb-0'>{errors.lastname}</p> ) : null}
                        </div>
                    </div>
                    <div className="col-span-full">
                        <div className="mt-2">
                            <input
                            placeholder='email'
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="text-white block w-full rounded-md border-b border-solid border-[#C1A358] bg-transparent py-1.5 uppercase font-normal shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#C1A358] sm:text-sm sm:leading-6"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                        {errors.email && touched.email ? ( <p className='text-[#ff0404e0] mt-2 mb-0'>{errors.email}</p> ) : null}
                        </div>
                    </div>
                    <div className="col-span-full">
                        <div className="mt-2">
                            <input
                            placeholder='Subject'
                            type="text"
                            name="subject"
                            id="subject"
                            autoComplete="given-name"
                            className="text-white block w-full rounded-md border-b border-solid border-[#C1A358] bg-transparent py-1.5 uppercase font-normal shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#C1A358] sm:text-sm sm:leading-6"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                        {errors.subject && touched.subject ? ( <p className='text-[#ff0404e0] mt-2 mb-0'>{errors.subject}</p> ) : null}
                        </div>
                    </div>
                    <div className="col-span-full">
                        <div className="mt-2">
                            <textarea
                            placeholder='Message'
                            id='Message'
                            name='message'
                            rows={3}
                            className="text-white block w-full rounded-md border-b border-solid border-[#C1A358] bg-transparent py-1.5 uppercase font-normal shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#C1A358] sm:text-sm sm:leading-6"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                        {errors.message && touched.message ? ( <p className='text-[#ff0404e0] mt-2 mb-0'>{errors.message}</p> ) : null}
                        </div>
                    </div>
            </div>
            <div className="w-full mt-10 block justify-end">
                <button type="submit" className="btn-us"><span>SUBMIT</span></button>
            </div>
        </form>

    </>
  )
}

export default ContactForm