import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return(
        <div className="border-b borde-neutral-900 pb-20">
            <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl"
            >
                Get In Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                whileInView={{ opacity: 1, y: 0}}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-4"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <a href="https://mail.google.com/mail/u/0/#inbox" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    );
};

export default Contact;