import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import s from './styles';
import firebase from 'firebase';

function QuestionsIndex({items}) {
    const [faqs, setfaqs]= useState([items[0],items[1],items[2]]);
    const toggleFAQ = index => {
        setfaqs(faqs.map((items, i) => {
            if (i==index) {
                items.open = !items.open;
            } else {
                items.open = false;
            }
            return items;
        }))
    }
    return(
           
            <View style={s.faqs}>
                
                {faqs.map((items, id) => (
                    <View>
            
                    <TouchableOpacity
                        style={s.faq}
                        keyExtractor={id}
                        
                        onPress={() => toggleFAQ(id)}
                    >
                            <Text style={[items.open == true ? s.faqquestionopen : s.faqquestion]} >
                                {items.question}
                            </Text>
                           
                            <Text style = {[items.open == true ? s.faqansweropen : s.faqanswer]} >
                                {items.answer}
                            </Text>
                           
                    </TouchableOpacity>
                </View>  
                        
                ))}
                
            </View>
            
        );
}

export default QuestionsIndex;