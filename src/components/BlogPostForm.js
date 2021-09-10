import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const BlogPostFrom = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContetnt] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}> Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}> Enter content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContetnt(text)}
      />
      <Button title="Add Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostFrom.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostFrom;
