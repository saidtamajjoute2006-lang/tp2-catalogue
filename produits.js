const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 },
];
const estValide = (produit) =>
  Number.isFinite(produit.prix) &&
  Number.isFinite(produit.stock) &&
  produit.prix >= 0 &&
  produit.stock >= 0;
function afficherCatalogue(liste) {
  console.log("--- Catalogue ---");
  liste.forEach((p) => console.log(`${p.nom} : ${p.prix} DH`));
}
const getDisponibles = (liste) => liste.filter((p) => p.stock > 0);
const valeurStock = (liste) =>
  liste.reduce((total, p) => total + p.prix * p.stock, 0);
function produitMoinsCher(disponibles) {
  if (disponibles.length === 0) return null;
  return disponibles.reduce((min, p) => (p.prix < min.prix ? p : min));
}
const resume = (liste) =>
  liste.map((p) => `${p.nom} - ${p.prix} DH - ${p.stock} unités`);
function analyser(liste) {
  console.log("\n=== Analyse ===");
  afficherCatalogue(liste);
  const disponibles = getDisponibles(liste);
  console.log(`\nProduits disponibles : ${disponibles.length}`);
  disponibles.forEach((p) => console.log(` - ${p.nom}`));
  console.log(`Valeur totale du stock : ${valeurStock(liste)} DH`);
  const moinsCher = produitMoinsCher(disponibles);
  if (moinsCher) {
    const { nom, prix } = moinsCher;
    console.log(`Produit disponible le moins cher : ${nom} (${prix} DH)`);
  } else {
    console.log("Aucun produit disponible.");
  }
  console.log("\nRésumé :");
  resume(liste).forEach((ligne) => console.log(ligne));
}
analyser(produits);
analyser(produits.map((p) => ({ ...p, stock: 0 })));
analyser([]);
console.log("\nDonnées valides :", produits.every(estValide));
const apres = produits.map((p) =>
  p.nom === "Souris" ? { ...p, prix: p.prix + 10 } : p
);
console.log("Valeur du stock si Souris +10 DH :", valeurStock(apres), "DH");
 