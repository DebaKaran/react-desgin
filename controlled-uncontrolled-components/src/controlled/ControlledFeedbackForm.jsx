import React, { useState } from 'react'

const ControlledFeedbackForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!form.name) {
        //     alert("Name required");
        //     return;
        // }
        // if (!form.email.includes("@")) {
        //     alert("Valid email required");
        //     return;
        // }
        // if (!messageRef.current.value) {
        //     messageRef.current.focus();
        //     return;
        // }
        console.log("Form submitted:", form);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name='message'
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