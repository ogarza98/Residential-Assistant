import * as React from 'react';
import s from './styles';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import QuestionsIndex from './QuestionsIndex';
function FAQ({faq, index, toggleFAQ}) {
    return (
        <View>
            <TouchableOpacity
                style={s.faq}
                key={index}
                
                onPress={() => toggleFAQ(index)}
            >
               
                    <Text style={[faq.open == true ? s.faqquestionopen : s.faqquestion]}>
                        {faq.question}
                        
                    </Text>
                    <Text style = {[faq.open == true ? s.faqansweropen : s.faqanswer]}>
                        {faq.answer}
                    </Text>
                     
            </TouchableOpacity>
        </View>
    );
}

export default FAQ
