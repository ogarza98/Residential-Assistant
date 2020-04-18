import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import s from './styles';
import firebase from 'firebase';
import styles from './styles';
import arrow from './arrowDown.png';

function QuestionsIndex({items}) {
    const [faqs, setfaqs]= useState(items);
    const toggleFAQ = index => {
        setfaqs(faqs.map((items, i) => {
            if (i==index) {
                items.open = !items.open;
                console.log("checking items.answer", typeof(items.answer));
                if(items.answer.indexOf("_n")){
                    var newName = items.answer.replace("_n","\n");
                    items.answer = newName
                    }
                
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
                        onPress={() => toggleFAQ(id)}
                    >
                        <View style = {styles.faqrow}>
                            <Image style={[items.open == true ? styles.faqButtonopen : styles.faqButton]} source={arrow}/>
                            <Text style={[items.open == true ? s.faqquestionopen : s.faqquestion]} >
                                {items.question}
                                
                            </Text>
                           </View>
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