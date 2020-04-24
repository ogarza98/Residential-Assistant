import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import s from './styles';
import firebase from 'firebase';
import styles from './styles';
import arrow from './arrowDown.png';

function QuestionsIndex({items}) {
    const [faqs, setfaqs]= useState(items);
    const toggleFAQ = id => {
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
    //const toggleSection = id => {
       // setfaqs(faqs.map((item,i) => {
          //  if (i==id) {
               //     item.opensection = !item.opensection;
            //} else {
             //   item.opensection = false;
           // }
           // return item;
        //}))
    //}
    return(
       
        <View style={s.faqs}>
            <FlatList
                data = {items}
                renderItem={({item, index}) => (
                  
                  //<TouchableOpacity
                  //style={s.faq}
                  //onPress={() => toggleSection(index)}
//>
                     // <View style = {styles.faqrow}>
                     // <Image style={[item.opensection == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>
                     //       <Text style={s.faqsection} >
                     //           {item.Section}
                                
                     //       </Text>
                     // </View>
                 
                  

                <View>
                    
                    <TouchableOpacity
                        style={s.faq}
                        onPress={() => toggleFAQ(index)}
                    >
                        <View style = {styles.faqrow}>
                         <Image style={[item.open == true ? s.faqButtonopen : s.faqButton]} source={arrow}/>

                            <Text style={s.faqquestionopen} >
                                {item.question}
                                
                            </Text>
                        </View>

                            <Text style = {[item.open == true ? s.faqansweropen : s.faqanswer]} >
                                {item.answer}
                            </Text>
                           
                    </TouchableOpacity>
                </View>  
                 //</TouchableOpacity>
                )}
                enableEmptySections={true}
                keyExtractor={(item, index) => index.toString()}
            /> 
            
                
        </View>
            
        );
}

export default QuestionsIndex;