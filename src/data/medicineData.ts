export interface CompositionItem {
  ingredient: string;
  strength: string;
}

export interface DosageItem {
  animal: string;
  dose: string;
}

export interface MedicineData {
  name: string;
  category: string;
  color: string;
  type: "human" | "veterinary";
  description: string;
  servingSize: string; // e.g., "Each 5 ml contains:" or "Each uncoated bolus contains:"
  composition: CompositionItem[];
  indications: string[];
  dosage: string | DosageItem[]; // Can be simple string or detailed dosage table
  sideEffects: { effect: string; severity: "low" | "medium" | "high" }[];
  contraindications: string[];
  storage: string;
  shelfLife: string;
  pdfUrl?: string;
}

export const medicineData: Record<string, MedicineData> = {
  // Human Healthcare
  "geniliv": {
    name: "Geniliv",
    category: "Complete Liver Care",
    color: "#16a34a",
    type: "human",
    description: "A synergistic triple-strength formula to detoxify the liver from alcohol, drugs, and pollutants.",
    servingSize: "Each 5 ml contains:",
    composition: [
      { ingredient: "Lecithin I.P.", strength: "125 mg" },
      { ingredient: "Silymarin", strength: "35 mg" }
    ],
    indications: [
      "Fatty and Chronic liver disease",
      "Liver damage caused by alcohol, toxins",
      "Hepatoprotective, antioxidant",
      "Fatigue, poor appetite, and indigestion"
    ],
    dosage: "As directed by the Physician",
    sideEffects: [
      { effect: "Mild gastrointestinal disturbance", severity: "low" },
      { effect: "Allergic reactions (rare)", severity: "medium" }
    ],
    contraindications: [
      "Hypersensitivity to any component",
      "Pregnancy and lactation (consult physician)"
    ],
    storage: "Store in a cool, dry place below 30°C. Keep away from direct sunlight.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/geniliv-brochure.pdf"
  },

  // Veterinary Healthcare
  "genical-ds-gold": {
    name: "Genical-DS Gold",
    category: "Calcium & Lactation",
    color: "#f59e0b",
    type: "veterinary",
    description: "Double strength of calcium, phosphorus and Vitamin AD3 with galactagogues for enhanced milk production and better health.",
    servingSize: "Each 100 ml contains:",
    composition: [
      { ingredient: "Calcium", strength: "3256 mg" },
      { ingredient: "Phosphorus", strength: "1628 mg" },
      { ingredient: "Vitamin A", strength: "90000 IU" },
      { ingredient: "Vitamin D3", strength: "16000 IU" },
      { ingredient: "Vitamin B12", strength: "200 mcg" },
      { ingredient: "Leptadenia Reticulata Ext.", strength: "500 mg" },
      { ingredient: "Jatamansi", strength: "200 mg" },
      { ingredient: "Shatavari", strength: "750 mg" },
      { ingredient: "Piper Longum", strength: "200 mg" },
      { ingredient: "Klongi", strength: "100 mg" }
    ],
    indications: [
      "Improves milk yield & health",
      "Enhances milk let-down",
      "Better growth, strong bones",
      "Butterfat in milk and SNF content"
    ],
    dosage: [
      { animal: "Cow & Buffalo", dose: "50 ml Daily" },
      { animal: "Post Parturated & High Yielder", dose: "100 ml Daily" },
      { animal: "Sheep & Goat", dose: "5 ml Daily" },
      { animal: "Calves", dose: "20 ml Daily" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place. Keep container tightly closed.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genical-ds-gold-brochure.pdf"
  },

  "genical-ds": {
    name: "Genical-DS",
    category: "Calcium Supplement",
    color: "#0ea5e9",
    type: "veterinary",
    description: "Double power liquid feed supplement with calcium, phosphorus and Vitamin AD3 for improved milk production and health.",
    servingSize: "Each 50 ml contains:",
    composition: [
      { ingredient: "Vitamin A", strength: "45000 I.U." },
      { ingredient: "Vitamin D3", strength: "8000 I.U." },
      { ingredient: "Vitamin B12", strength: "100 mcg" },
      { ingredient: "Calcium", strength: "1700 mg" },
      { ingredient: "Phosphorus", strength: "850 mg" },
      { ingredient: "Vitamin B1 HCl", strength: "10 mg" },
      { ingredient: "Vitamin B6 HCl", strength: "2 mg" }
    ],
    indications: [
      "Increased milk production",
      "Better growth, strong bones",
      "Fulfills calcium & phosphorus needs",
      "Must for reproduction & lactation"
    ],
    dosage: [
      { animal: "Cow & Buffalo", dose: "50 ml Daily" },
      { animal: "Post Parturated & High Yielder", dose: "100 ml Daily" },
      { animal: "Sheep & Goat", dose: "5 ml Daily" },
      { animal: "Calves", dose: "As advised" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genical-ds-brochure.pdf"
  },

  "geniboost": {
    name: "Geniboost",
    category: "Immunomodulator",
    color: "#dc2626",
    type: "veterinary",
    description: "Powerful immunomodulator that boosts and maintains immune system, reduces stress and prevents bacterial & viral outbreaks.",
    servingSize: "Each 10 ml contains:",
    composition: [
      { ingredient: "Glycine", strength: "100 mg" },
      { ingredient: "Vitamin E", strength: "27 mg" },
      { ingredient: "Selenium", strength: "1.2 ppm" },
      { ingredient: "Vitamin C", strength: "21 mg" },
      { ingredient: "Sodium Chloride", strength: "13 mg" },
      { ingredient: "Potassium Chloride", strength: "10 mg" },
      { ingredient: "Manganese Sulphate", strength: "5 mg" },
      { ingredient: "Yeast Extract", strength: "20 mg" },
      { ingredient: "Amino Nitrogen", strength: "20000 ppm" }
    ],
    indications: [
      "Boosts & maintains immune system",
      "Reduces stress, maintains homeostasis",
      "Improves WBC activity & FCR",
      "Can be used with antibiotics"
    ],
    dosage: [
      { animal: "Cattle, Buffalo & Horse", dose: "25 to 30 ml daily for 4 to 5 days" },
      { animal: "Calf, Sheep, Goat & Pig", dose: "5 to 10 ml daily for 5 days" },
      { animal: "Dog & Cat", dose: "5 to 10 ml for 10 days" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place. Protect from light.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/geniboost-brochure.pdf"
  },

  "geniliv-vet": {
    name: "Geniliv Vet",
    category: "Liver Tonic",
    color: "#16a34a",
    type: "veterinary",
    description: "Powerful liver tonic for cattle & poultry that relieves anorexia, rejuvenates from hepatic problems and prevents fatty liver syndrome.",
    servingSize: "Each 5 ml contains:",
    composition: [
      { ingredient: "Tricholine Citrate", strength: "700 mg" },
      { ingredient: "Vitamin B12", strength: "10 mcg" },
      { ingredient: "Niacinamide", strength: "15 mg" },
      { ingredient: "Inositol", strength: "12 mg" },
      { ingredient: "Biotin", strength: "10 mcg" },
      { ingredient: "DL Methionine", strength: "5 mg" },
      { ingredient: "Base enriched with extract of Liver and Yeast", strength: "Q.S." }
    ],
    indications: [
      "Relieves anorexia",
      "Rejuvenates from hepatic problems",
      "Prevents fatty liver syndrome",
      "Co-therapy with antibiotics"
    ],
    dosage: [
      { animal: "Cattle, Buffalo & Horse", dose: "25 to 30 ml" },
      { animal: "Calf, Sheep, Goat & Pig", dose: "5 to 10 ml" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/geniliv-vet-brochure.pdf"
  },

  "genimix-bolus": {
    name: "Genimix Bolus",
    category: "Probiotic & Enzyme",
    color: "#8b5cf6",
    type: "veterinary",
    description: "Accomplished mixture of prebiotic, probiotic, enzyme & growth stimulants for improved ruminal function and appetite.",
    servingSize: "Each uncoated bolus contains approx.:",
    composition: [
      { ingredient: "Live Yeast Culture", strength: "1.5 gm" },
      { ingredient: "Protein Hydrolysate", strength: "750 mg" },
      { ingredient: "Tribasic Calcium Phosphate", strength: "2.4 gm" },
      { ingredient: "Lactobacillus Sporogenes", strength: "20 million CFU" },
      { ingredient: "Liver Extract", strength: "5 mg" },
      { ingredient: "Vitamin A Acetate", strength: "1600 I.U." },
      { ingredient: "Vitamin D3", strength: "4000 I.U." },
      { ingredient: "Vitamin B12", strength: "30 mcg" },
      { ingredient: "Vitamin E Acetate", strength: "75 mg" },
      { ingredient: "Selenium Elemental", strength: "0.1 mg" },
      { ingredient: "Copper Sulphate", strength: "25 mg" },
      { ingredient: "Cobalt Chloride", strength: "10 mg" },
      { ingredient: "Ferrous Sulphate", strength: "25 mg" },
      { ingredient: "Raw Musa Spp.", strength: "5 mg" },
      { ingredient: "Excipients", strength: "Q.S." }
    ],
    indications: [
      "Prevents pathogenic bacteria",
      "Increases ruminal microflora",
      "Normalizes appetite in anorexia",
      "Helps prevent diarrhea"
    ],
    dosage: "½ to 2 Bolus twice daily (depending upon the weight and severity of disease of the animal) OR as directed by veterinary practitioner",
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place. Keep away from moisture.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genimix-bolus-brochure.pdf"
  },

  "geniplex": {
    name: "Geniplex",
    category: "B-Complex",
    color: "#7c3aed",
    type: "veterinary",
    description: "Complete B-complex rich in vitamins B1 and H for proper metabolism, nervous system function and energy conversion.",
    servingSize: "Each 5 ml contains:",
    composition: [
      { ingredient: "Vitamin B1", strength: "7 mg" },
      { ingredient: "Vitamin B2", strength: "2.5 mg" },
      { ingredient: "Niacinamide (B3)", strength: "75 mg" },
      { ingredient: "Calcium Pantothenate (B5)", strength: "2.5 mg" },
      { ingredient: "Vitamin B6", strength: "1 mg" },
      { ingredient: "Biotin (B7 or H)", strength: "25 mcg" },
      { ingredient: "Vitamin B12", strength: "12.5 mcg" },
      { ingredient: "Choline Chloride", strength: "10 mg" },
      { ingredient: "Methionine", strength: "10 mg" },
      { ingredient: "L-Lysine", strength: "20 mg" }
    ],
    indications: [
      "Transforms stunted growth",
      "Eliminates anaemia & anorexia",
      "Boosts immunity",
      "Supports pregnancy nutrition"
    ],
    dosage: [
      { animal: "Calf, Sheep, Goat & Pig", dose: "10 to 20 ml daily" },
      { animal: "Cattle, Buffalo & Horse", dose: "30 to 50 ml daily" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/geniplex-brochure.pdf"
  },

  "gromivit": {
    name: "Gromivit",
    category: "Anti-Stress Vitamin",
    color: "#06b6d4",
    type: "veterinary",
    description: "Optimal powerful concentration of anti-stress liquid vitamin feed supplement for cattle and poultry.",
    servingSize: "Nutritional value per ml:",
    composition: [
      { ingredient: "Vitamin A", strength: "50,000 IU" },
      { ingredient: "Vitamin D3", strength: "5,000 IU" },
      { ingredient: "Vitamin E", strength: "50 mg" },
      { ingredient: "Vitamin C", strength: "50 mg" },
      { ingredient: "Vitamin B12", strength: "25 mcg" }
    ],
    indications: [
      "Removes stress from vaccination/transport",
      "Builds body resistance to infection",
      "Improves growth & fertility",
      "Better egg & milk production"
    ],
    dosage: [
      { animal: "Poultry - Chick (per 100 birds)", dose: "3 ml" },
      { animal: "Poultry - Grower/Broiler & Layer (per 100 birds)", dose: "5 ml" },
      { animal: "Large Animals", dose: "5 ml" },
      { animal: "Small Animals", dose: "2 ml for 7-10 days every month" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place. Protect from light.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/gromivit-brochure.pdf"
  },

  "genizole-nt-bolus": {
    name: "Genizole-NT Bolus",
    category: "Anti-Bacterial/Protozoal",
    color: "#ef4444",
    type: "veterinary",
    description: "Unique combination for bacterial and protozoal infections including mixed gut infections, diarrhea and dysentery.",
    servingSize: "Each uncoated bolus contains:",
    composition: [
      { ingredient: "Norfloxacin I.P.", strength: "1200 mg" },
      { ingredient: "Tinidazole I.P.", strength: "1800 mg" }
    ],
    indications: [
      "Bacterial & protozoal infections",
      "Mixed gut infections & diarrhea",
      "Calf scour treatment",
      "Bovine coccidiosis & enteritis"
    ],
    dosage: [
      { animal: "Large Animals", dose: "2 boli twice daily" },
      { animal: "Small Animals", dose: "½ or 1 bolus twice daily" }
    ],
    sideEffects: [
      { effect: "Use with caution", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian",
      "Not for use in animals producing milk for human consumption during treatment"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genizole-nt-bolus-brochure.pdf"
  },

  "genimol-plus": {
    name: "Genimol-Plus",
    category: "Pain & Fever Relief",
    color: "#f97316",
    type: "veterinary",
    description: "Highly effective in controlling fever, pain, inflammation and tissue swelling for systemic infections and musculoskeletal pain.",
    servingSize: "Each uncoated bolus contains:",
    composition: [
      { ingredient: "Meloxicam I.P.", strength: "100 mg" },
      { ingredient: "Paracetamol I.P.", strength: "2000 mg" },
      { ingredient: "Serratiopeptidase I.P.", strength: "75 mg (1,50,000 units as enteric coated granules)" }
    ],
    indications: [
      "Controls fever & inflammation",
      "Mastitis & metritis treatment",
      "Musculoskeletal pain relief",
      "Post-surgical pain management"
    ],
    dosage: "1 bolus per 150–200 kg body weight. Repeat after 24 hours only if needed. Maximum 2 bolus doses in 48 hours or as directed by the veterinarians",
    sideEffects: [
      { effect: "Gastrointestinal effects (rare)", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian",
      "Avoid in animals with kidney issues"
    ],
    storage: "Store in a cool, dry place. Protect from light.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genimol-plus-brochure.pdf"
  },

  "pmelogen-injection": {
    name: "Pmelogen Injection",
    category: "NSAID Injection",
    color: "#ec4899",
    type: "veterinary",
    description: "Anti-inflammatory, analgesic & antipyretic injection that relieves fever, pain and inflammation in various conditions.",
    servingSize: "Each ml contains:",
    composition: [
      { ingredient: "Meloxicam I.P.", strength: "5 mg" },
      { ingredient: "Paracetamol I.P.", strength: "150 mg" },
      { ingredient: "Benzyl Alcohol I.P.", strength: "1% v/v" },
      { ingredient: "Water for Injection I.P.", strength: "Q.S." }
    ],
    indications: [
      "Controls pyrexia",
      "Arthritis & osteoarthritis",
      "Mastitis & metritis",
      "Laminitis & pneumonia"
    ],
    dosage: "2 ml then follow up by 1 ml (as per severity) / 20 kg body weight by I.M / I.V. / S.C. route, up to 3-5 days. OR as directed by the Veterinarians",
    sideEffects: [
      { effect: "Injection site reaction (rare)", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian",
      "Avoid in dehydrated animals"
    ],
    storage: "Store in a cool, dry place. Protect from light and freezing.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/pmelogen-injection-brochure.pdf"
  },

  "improcef-s": {
    name: "Improcef-S",
    category: "Antibiotic",
    color: "#3b82f6",
    type: "veterinary",
    description: "Powerful combination of Ceftriaxone with Sulbactam for serious bacterial infections and surgical prophylaxis.",
    servingSize: "Composition:",
    composition: [
      { ingredient: "Ceftriaxone Sodium USP", strength: "2:1 ratio" },
      { ingredient: "Sulbactam Sodium USP", strength: "Combined" }
    ],
    indications: [
      "Mastitis treatment",
      "Respiratory tract infections",
      "Septicaemia & meningitis",
      "Pre parturition & dystocia"
    ],
    dosage: "5-10 mg/kg body weight, once or twice daily depending on severity of infections. Route: I/M, I/V or as advised by the Practitioner",
    sideEffects: [
      { effect: "Allergic reactions (rare)", severity: "medium" }
    ],
    contraindications: [
      "Hypersensitivity to cephalosporins or penicillins",
      "Use as directed by veterinarian"
    ],
    storage: "Store below 25°C. Protect from light.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/improcef-s-brochure.pdf"
  },

  "genimec": {
    name: "Genimec",
    category: "Anti-Parasitic",
    color: "#84cc16",
    type: "veterinary",
    description: "100% effective in killing both endo and ectoparasites, safe for pregnant animals throughout pregnancy.",
    servingSize: "Each ml contains:",
    composition: [
      { ingredient: "Ivermectin I.P.", strength: "10 mg" },
      { ingredient: "Benzyl Alcohol I.P. (As preservative)", strength: "3% v/v" },
      { ingredient: "Propylene Glycol I.P.", strength: "Q.S." }
    ],
    indications: [
      "Kills endo & ectoparasites",
      "Safe for pregnant animals",
      "Prolonged activity",
      "Fewer treatments required"
    ],
    dosage: "0.2 mg per kg body weight or as directed by veterinarian",
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place. Protect from light.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genimec-brochure.pdf"
  },

  "geniorm": {
    name: "Geniorm",
    category: "Anthelmintic",
    color: "#22c55e",
    type: "veterinary",
    description: "Highly effective, tasty and safe broad spectrum anthelmintic for roundworms, tapeworms, lungworms and adult liver flukes.",
    servingSize: "Each ml contains / Each uncoated bolus contains:",
    composition: [
      { ingredient: "Albendazole I.P. (Liquid)", strength: "25 mg per ml" },
      { ingredient: "Albendazole I.P. (Bolus)", strength: "1500 mg per bolus" }
    ],
    indications: [
      "Ovicidal & larvicidal",
      "Cysticidal & wormicidal",
      "Control all major worms",
      "Safe for all animals"
    ],
    dosage: [
      { animal: "General Dose", dose: "5 mg per kg of body weight" },
      { animal: "Large Animals", dose: "60 ml or 1500 mg bolus" },
      { animal: "Small Animals", dose: "5-10 ml" },
      { animal: "Dogs & Cats", dose: "25 mg per kg body weight or 3-5 ml BD for 3 days" }
    ],
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/geniorm-brochure.pdf"
  },

  "genifen-bolus": {
    name: "Genifen Bolus",
    category: "Anthelmintic",
    color: "#14b8a6",
    type: "veterinary",
    description: "Broad-spectrum anthelmintic for gastrointestinal parasites with high safety margin and long-lasting action.",
    servingSize: "Each uncoated bolus contains:",
    composition: [
      { ingredient: "Fenbendazole I.P.", strength: "1500 mg" }
    ],
    indications: [
      "Wormicidal & larvicidal",
      "Wide margin of safety",
      "Faster intestinal absorption",
      "Short milk residue period"
    ],
    dosage: "5 mg/kg body weight",
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genifen-bolus-brochure.pdf"
  },

  "floxenro": {
    name: "Floxenro",
    category: "Antibacterial & Mucolytic",
    color: "#a855f7",
    type: "veterinary",
    description: "Distinctive combination of antibacterial and mucolytic for respiratory infections and Mycoplasma control.",
    servingSize: "Each ml contains:",
    composition: [
      { ingredient: "Enrofloxacin", strength: "200 mg" },
      { ingredient: "Bromhexine HCl I.P.", strength: "15 mg" }
    ],
    indications: [
      "Rapid antibacterial activity",
      "Controls Mycoplasma",
      "Reduces respiratory complications",
      "Speedy recovery"
    ],
    dosage: "Sheep and Goat: 1 ml per 20 kg body weight for 3-5 days orally or as recommended by the Veterinarian",
    sideEffects: [
      { effect: "Use with caution in young animals", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian",
      "Not recommended for very young animals"
    ],
    storage: "Store in a cool, dry place. Protect from light.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/floxenro-brochure.pdf"
  },

  "genizole-ct": {
    name: "Genizole-CT",
    category: "Antibacterial/Antiprotozoal",
    color: "#f43f5e",
    type: "veterinary",
    description: "Excellent combination of broad spectrum antibacterial and antiprotozoal for mixed infections in poultry.",
    servingSize: "Each 100 gm contains:",
    composition: [
      { ingredient: "Ciprofloxacin", strength: "10 gm" },
      { ingredient: "Tinidazole", strength: "12 gm" }
    ],
    indications: [
      "Broad spectrum antibacterial",
      "Treats all types of diarrhea",
      "E. coli & Salmonella",
      "Fowl cholera & coryza"
    ],
    dosage: [
      { animal: "Preventive", dose: "10 gm for 1000 chicks in drinking water for 3-5 days" },
      { animal: "Curative", dose: "15 gm for 1000 birds in drinking water for 3-5 days" }
    ],
    sideEffects: [
      { effect: "Use as directed", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian",
      "Observe withdrawal period before slaughter"
    ],
    storage: "Store in a cool, dry place below 25°C.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/genizole-ct-brochure.pdf"
  },

  "improlexin": {
    name: "Improlexin",
    category: "Water-Soluble Antibiotic",
    color: "#0891b2",
    type: "veterinary",
    description: "Broad-spectrum water-soluble powder antibiotic with low protein binding and fast action for poultry.",
    servingSize: "Each gram contains:",
    composition: [
      { ingredient: "Cephalexin I.P.", strength: "75 mg" }
    ],
    indications: [
      "Prevents early chick mortality",
      "Fast acting antibiotic",
      "Coryza & fowl typhoid",
      "Higher safety & efficacy"
    ],
    dosage: "To prevent Early Chick Mortality: 20 gm sachet daily in drinking water for first 5 days in 40L water or for 1500 chicks",
    sideEffects: [
      { effect: "Generally well tolerated", severity: "low" }
    ],
    contraindications: [
      "Use as directed by veterinarian",
      "Observe withdrawal period"
    ],
    storage: "Store in a cool, dry place. Keep container tightly closed.",
    shelfLife: "As mentioned on pack",
    pdfUrl: "/pdfs/improlexin-brochure.pdf"
  }
};

// Helper function to get medicine by URL slug
export function getMedicineBySlug(slug: string): MedicineData | undefined {
  return medicineData[slug];
}

// Get all medicine slugs
export function getAllMedicineSlugs(): string[] {
  return Object.keys(medicineData);
}
