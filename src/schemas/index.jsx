import * as Yup from "yup";

export const contactfrmSchems = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your first name"),
    lastname: Yup.string().min(2).max(25).required("Please enter your second name"),
    email: Yup.string().email().required("Please enter your email"),
    subject: Yup.string().min(6).required("Please enter your subject"),
    message: Yup.string().min(50).required("Please enter your message"),
})