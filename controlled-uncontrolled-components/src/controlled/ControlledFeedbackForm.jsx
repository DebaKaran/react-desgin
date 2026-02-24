import { useRef, useState } from 'react'

const ControlledFeedbackForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const nameRef = useRef(null);// only for focus
    const emailRef = useRef(null);// only for focus
    const messageRef = useRef(null); // using ref for message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name) {
            nameRef.current.focus();
            //alert("Name required");
            return;
        }
        if (!form.email.includes("@")) {
            emailRef.current.focus();
            //alert("Valid email required");
            return;
        }
        if (!messageRef.current.value) {
            messageRef.current.focus();
            return;
        }
        console.log("Form submitted:", form);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={nameRef}
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                ref={emailRef}
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name='message'
                ref={messageRef}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
            />
            <button
                type="submit"
            >
                Send Feedback
            </button>
        </form>
    )
}

export default ControlledFeedbackForm