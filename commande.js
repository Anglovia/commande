const nomClient = "Awa";

const nomProduit = "Ordinateur";

const prixUnitaire = 250000; 

const quantite = 2;

const fraisLivraison = 5000; 

const tauxTVA = 18; 

const remise = 10000; 

const montantProduits = prixUnitaire * quantite;

const montantTVA = (montantProduits * tauxTVA) / 100;

const montantTTC = montantProduits + montantTVA;

const totalAPayer = montantTTC + fraisLivraison;

const prixMoyenTTC = montantTTC / quantite;

const totalAvecRemise = totalAPayer - remise;

console.log("===== REÇU DE COMMANDE =====");

console.log(`Client :  ${nomClient}`);

console.log(`Produit : ${nomProduit}`);

console.log(`Prix unitaire : ${prixUnitaire} FCFA`);

console.log(`Quantité :  ${quantite}`);

console.log("");

console.log(`Montant des produits :  ${montantProduits}  FCFA`);

console.log(`TVA ( ${tauxTVA} "%) :   montantTVA   FCFA`);

console.log(`Montant TTC : ${montantTTC}   FCFA`);

console.log(`Livraison : ${fraisLivraison} FCFA`);

console.log(`TOTAL A PAYER : ${totalAPayer} FCFA`);

console.log("");

console.log(`Prix moyen TTC par produit : ${prixMoyenTTC} FCFA`);

console.log(`Type du nom : ${typeof nomClient}`);

console.log(`Type du prix : ${typeof prixUnitaire}`);

console.log(`Type de la quantité : ${typeof quantite}`);

console.log("");

console.log("--- BONUS ---");

console.log(`Remise :  ${remise} FCFA`);

console.log(`TOTAL A PAYER APRES REMISE : ${totalAvecRemise} FCFA`);
