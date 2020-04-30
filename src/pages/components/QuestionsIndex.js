import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import s from './styles';
import firebase from 'firebase';
import styles from './styles';
import arrow from './arrowDown.png';

function QuestionsIndex({items}) {
    const [faqs, setfaqs]= useState(items);

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isToggled1, setToggled1] = useState(false);
    const toggleTrueFalse1 = () => setToggled1(!isToggled1);

    const [isToggled2, setToggled2] = useState(false);
    const toggleTrueFalse2 = () => setToggled2(!isToggled2);

    const [isToggled3, setToggled3] = useState(false);
    const toggleTrueFalse3 = () => setToggled3(!isToggled3);

    const [isToggled4, setToggled4] = useState(false);
    const toggleTrueFalse4 = () => setToggled4(!isToggled4);

    const toggleFAQ = id => {
        setfaqs(faqs.map((item,i) => {
            if (i==id) {
                    item.open1 = !item.open1;
                if(item.answer1.indexOf("_n")){
                    var newName = item.answer1.replace("_n","\n");
                    item.answer1 = newName
                    }
            } else {
                item.open1 = false;
            }
            return item;
        }))
    }
    const toggleFAQ1 = id => {
        setfaqs(faqs.map((item,i) => {
            if (i==id) {
                    item.open = !item.open;
                if(item.answer.indexOf("_n")){
                    var newName = item.answer.replace("_n","\n");
                    item.answer = newName
                    }
            } else {
                item.open = false;
            }
            return item;
        }))
    }
    const toggleFAQ2 = id => {
        setfaqs(faqs.map((item,i) => {
            if (i==id) {
                    item.open2 = !item.open2;
                if(item.answer2.indexOf("_n")){
                    var newName = item.answer2.replace("_n","\n");
                    item.answer2 = newName
                    }
            } else {
                item.open2 = false;
            }
            return item;
        }))
    }
    const toggleFAQ3 = id => {
        setfaqs(faqs.map((item,i) => {
            if (i==id) {
                    item.open3 = !item.open3;
                if(item.answer3.indexOf("_n")){
                    var newName = item.answer3.replace("_n","\n");
                    item.answer3 = newName
                    }
            } else {
                item.open3 = false;
            }
            return item;
        }))
    }
    const toggleFAQ4 = id => {
        setfaqs(faqs.map((item,i) => {
            if (i==id) {
                    item.open4 = !item.open4;
                if(item.answer4.indexOf("_n")){
                    var newName = item.answer4.replace("_n","\n");
                    item.answer4 = newName
                    }
            } else {
                item.open4 = false;
            }
            return item;
        }))
    }
    return(
       
        <View style={s.faqs}>

            <TouchableOpacity
            style={s.faq}
            onPress={() => toggleTrueFalse()}
            >
                 <View style = {styles.faqrow}>
                <Image style={[isToggled == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>
                <Text style={s.faqsection}>
                Phone numbers
                </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data = {items}
                renderItem={({item, index}) => (
                <View>
                    <TouchableOpacity
                        style={s.faq}
                        onPress={() => toggleFAQ(index)}
                    >
                        <View style = {styles.faqrow}>
                            <Text style={[isToggled == true ? s.faqquestionopen : s.faqquestion]} >
                                {item.question1}
                            </Text>
                        </View>
                            <Text style = {[item.open1 == true && isToggled ==true ? s.faqansweropen : s.faqanswer]} >
                                {item.answer1}
                            </Text>
                    </TouchableOpacity>
                </View>  
                )}
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            /> 
            <TouchableOpacity
            style={s.faq}
            onPress={() => toggleTrueFalse4()}
            >
                 <View style = {styles.faqrow}>
                <Image style={[isToggled4 == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>
                <Text style={s.faqsection}>
                Resident Guidelines
                </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data = {items}
                renderItem={({item, index}) => (
                <View>
                    
                    <TouchableOpacity
                        style={s.faq}
                        onPress={() => toggleFAQ4(index)}
                    >
                        <View style = {styles.faqrow}>
                            <Text style={[isToggled4 == true ? s.faqquestionopen : s.faqquestion]} >
                                {item.question4}
                            </Text>
                        </View>
                            <Text style = {[item.open4 == true && isToggled4 ==true ? s.faqansweropen : s.faqanswer]} >
                                {item.answer4}
                            </Text>
                    </TouchableOpacity>
                </View>  
                )}
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            /> 
            <TouchableOpacity
            style={s.faq}
            onPress={() => toggleTrueFalse1()}
            >
                 <View style = {styles.faqrow}>
                <Image style={[isToggled1 == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>
                <Text style={s.faqsection}>
                Housing Policies
                </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data = {items}
                renderItem={({item, index}) => (
                <View>
                    <TouchableOpacity
                        style={s.faq}
                        onPress={() => toggleFAQ1(index)}
                    >
                        <View style = {styles.faqrow}>
                            <Text style={[isToggled1 == true ? s.faqquestionopen : s.faqquestion]} >
                                {item.question}
                            </Text>
                        </View>
                            <Text style = {[item.open == true && isToggled1 ==true ? s.faqansweropen : s.faqanswer]} >
                                {item.answer}
                            </Text>
                    </TouchableOpacity>
                </View>  
                )}
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            /> 
            <TouchableOpacity
            style={s.faq}
            onPress={() => toggleTrueFalse2()}
            >
                 <View style = {styles.faqrow}>
                <Image style={[isToggled2 == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>
                <Text style={s.faqsection}>
                Lock Outs
                </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data = {items}
                renderItem={({item, index}) => (
                <View>
                    
                    <TouchableOpacity
                        style={s.faq}
                        onPress={() => toggleFAQ2(index)}
                    >
                        <View style = {styles.faqrow}>
                            <Text style={[isToggled2 == true ? s.faqquestionopen : s.faqquestion]} >
                                {item.question2}
                            </Text>
                        </View>
                            <Text style = {[item.open2 == true && isToggled2 ==true ? s.faqansweropen : s.faqanswer]} >
                                {item.answer2}
                            </Text>
                    </TouchableOpacity>
                </View>  
                )}
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            /> 
            <TouchableOpacity
            style={s.faq}
            onPress={() => toggleTrueFalse3()}
            >
                 <View style = {styles.faqrow}>
                <Image style={[isToggled3 == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>
                <Text style={s.faqsection}>
                Miscellaneous
                </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data = {items}
                renderItem={({item, index}) => (
                <View>
                    
                    <TouchableOpacity
                        style={s.faq}
                        onPress={() => toggleFAQ3(index)}
                    >
                        <View style = {styles.faqrow}>
                            <Text style={[isToggled3 == true ? s.faqquestionopen : s.faqquestion]} >
                                {item.question3}
                            </Text>
                        </View>
                            <Text style = {[item.open3 == true && isToggled3 ==true ? s.faqansweropen : s.faqanswer]} >
                                {item.answer3}
                            </Text>
                    </TouchableOpacity>
                </View>  
                )}
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            /> 
        </View>
        );
}

export default QuestionsIndex;