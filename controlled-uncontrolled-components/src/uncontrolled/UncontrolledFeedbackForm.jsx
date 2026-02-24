import { useRef } from "react";

export default function UncontrolledFeedbackForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        if (!name) { nameRef.current.focus(); return; }
        if (!email.includes("@")) { emailRef.current.focus(); return; }
        if (!message) { messageRef.current.focus(); return; }

        console.log("Form submitted:", { name, email, message });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder="Name" />
            <input type="email" ref={emailRef} placeholder="Email" />
            <textarea ref={messageRef} placeholder="Your message" />
            <button type="submit">Send Feedback</button>
        </form>
    );
}