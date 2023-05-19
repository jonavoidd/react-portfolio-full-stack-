import React, { useEffect, useState } from "react";
import Axios from 'axios'

const Contact = () => {
    const [senderEmail, setSenderEmail] = useState('')
    const [senderSubject, setSenderSubject] = useState('')
    const [senderMessage, setSenderMessage] = useState('')
    const [senderList, setSenderList] = useState([])

    const submitButton = () => {
        Axios.post('http://localhost:3001/api/insert', {
            senderEmail: senderEmail,
            senderSubject: senderSubject,
            senderMessage: senderMessage
        })

    }

    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Me
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got
                        Any projects you want done? You can contact me.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your email
                            </label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="example@gmail.com"
                                   required 
                                   onChange={(e) => {
                                    setSenderEmail(e.target.value)
                                   }}
                                   />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Subject
                            </label>
                            <input type="text" id="subject"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Let me know how I can help you"
                                   required
                                   onChange={(e) => {
                                    setSenderSubject(e.target.value)
                                   }}
                                   />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                message
                            </label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Leave a comment..."
                                      onChange={(e) => {
                                        setSenderMessage(e.target.value)
                                       }}
                                      >
                            </textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-black dark:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={submitButton}>
                            <a href={"mailto:kurtjonathangozano@gmail.com"}>
                                Send message
                            </a>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;