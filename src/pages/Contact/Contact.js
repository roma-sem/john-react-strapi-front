import React,
{
    // useEffect,
    useState,
    // useRef,
    // lazy,
    // Suspense
} from 'react';
import "./Contact.scss";
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import { qs } from 'qs';
const qs = require('qs');

export default function Contact() {
    // const url = "http://neffdeveloper.info/john/wp-json/contact-form-7/v1/contact-forms/59/feedback";
    const url = "http://localhost:1337/contacts/";

    // const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = formData => {
        console.log(formData);

        axios({
                method: 'post',
                url: url,
                data: qs.stringify(formData)
                // data: formData,
                // headers: {'Content-Type': 'multipart/form-data' }
                // data :JSON.stringify(formData),
            })
            .then(response => {
                console.log("[ Contact ]: response = ", response);
                // setResponseMsg(response.data.message);
                setLoading(false);
            })
            .catch(error => {
                console.warn(error);
                setErrorMsg("Oops, smth went wrong... Please try again.")
                setLoading(false);
            });
    }

    return(
        <section className="Contact container">
            <HeaderOne content="Get in touch!" />

            <form name="Contact Form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="user_name" size="40" placeholder="Name*"
                    ref={ register({
                        required: true,
                        minLength: 2
                    })} />
                {errors.user_name && errors.user_name.type ==="required" && <span><i>Name is required</i></span>}
                {errors.user_name && errors.user_name.type === "minLength" && <span><i>Name requires 2+ characters</i></span>}

                <input type="email" name="user_email" size="40" placeholder="Email*"
                    ref={register({
                        required: "required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Enter a valid e-mail address",
                        }
                    })} />
                {errors.user_email && errors.user_email.type === "required" && <span><i>Email is required</i></span>}
                {errors.user_email && errors.user_email.type === "pattern" && <span><i>{errors.user_email.message}</i></span>}

                <input type="text" name="user_subject" size="40" placeholder="Subject*"
                    ref={ register({
                        required: true,
                        minLength: 2
                    })} />
                {errors.user_subject && <span><i>Subject is required</i></span>}

                <textarea name="user_message" cols="40" rows="10" placeholder="Message*"
                    ref={register({
                        required: true,
                        minLength: 5
                    })} />
                {errors.user_message && errors.user_message.type ==="required" && <span><i>Message is required</i></span>}
                {errors.user_message && errors.user_message.type === "minLength" && <span><i>Message requires 5+ characters</i></span>}

                <input type="submit" value="Send" />
            </form>

            {loading ? <h3>S E N D I N G...</h3> : null}
            {responseMsg ? <h3>{responseMsg}</h3> : null}
            {errorMsg ? <h3>{errorMsg}</h3> : null}
        </section>
    );
}


// function handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     setLoading(true);
//
//     // axios({
//     //         method: 'post',
//     //         url: url,
//     //         data: formData,
//     //         headers: {'Content-Type': 'multipart/form-data' }
//     //     })
//     //     .then(response => {
//     //         console.log("[ Contact ]: response = ", response);
//     //         // setResponseMsg(response.data.message);
//     //         setLoading(false);
//     //     })
//     //     .catch(error => {
//     //         console.warn(error);
//     //         setErrorMsg("Oops, smth went wrong... Please try again.")
//     //         setLoading(false);
//     //     });
// }


// axios({
//     method: 'post',
//     url: postUrl,
//     data: formData,
//     headers: {'Content-Type': 'multipart/form-data' }
// })
// .then(res => {
//     console.log("[ Contact ]: response = ", res);
// })
// .catch(error => {
//     console.warn(error);
// });
