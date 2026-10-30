import { View, Text, StyleSheet } from "react-native";

const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 },
];

const disponibles = produits.filter((p) => p.stock > 0);
const valeurStock = produits.reduce((t, p) => t + p.prix * p.stock, 0);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Catalogue de la boutique</Text>
      <Text style={styles.ligne}>
        Produits disponibles : {disponibles.length}
      </Text>
      <Text style={styles.ligne}>Valeur totale du stock : {valeurStock} DH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  titre: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  ligne: { fontSize: 18, marginVertical: 4 },
});