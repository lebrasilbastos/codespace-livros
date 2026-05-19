import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Book } from "../data/books";

interface Props {
  book: Book;
  onGoBack: () => void;
}

export default function BookReader({ book, onGoBack }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.description}>{book.description}</Text>
        <View style={styles.divider} />
        <Text style={styles.body}>{book.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fafafa",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  backText: {
    fontSize: 16,
    color: "#1a1a2e",
    fontWeight: "600",
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#888",
    fontStyle: "italic",
    marginBottom: 20,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginBottom: 20,
  },
  body: {
    fontSize: 17,
    color: "#333",
    lineHeight: 28,
    letterSpacing: 0.3,
  },
});
