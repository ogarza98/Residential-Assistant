import React, { useState } from 'react';
import FAQ from './FAQ';
import { View, Image, Text } from 'react-native';
import s from './styles';
import firebase from 'firebase';

function QuestionsIndex() {
    const [faqs, setfaqs]= useState([
        {
            id: 0,
            question: "What is the RA-oncall phone number?",
            answer: "210-889-0026",
            open: false
        },
        {
            id: 1,
            question: "What is the number for the Police Department (PD)?",
            answer: "Non-Emergency: 210-458-4242 \nEmergency: 210-458-4911 \nI really want to make a super long answer and see how it fills up the page I hope it wraps around",
            open: false
        },
        {
            id: 2,
            question: "What is the housing front desk number?",
            answer: "210-458-6200",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i==index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }
    return(
           
            <View style={s.faqs}>
                
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index= {i} toggleFAQ={toggleFAQ}/>  
                        
                ))}
                
            </View>
            
        );
}

export default QuestionsIndex;