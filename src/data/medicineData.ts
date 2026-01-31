export interface MedicineData {
  name: string;
  category: string;
  color: string;
  type: "human" | "veterinary";
  description: string;
  composition: { ingredient: string; strength?: string; percentage: number }[];
  indications: string[];
  dosage: string;
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
    category: "Liver Care",
    color: "#16a34a",
    type: "human",
    description: "Advanced hepatoprotective formula designed to support liver function and promote hepatic regeneration.",
    composition: [
      { ingredient: "Silymarin", strength: "140mg", percentage: 35 },
      { ingredient: "L-Ornithine L-Aspartate", strength: "250mg", percentage: 25 },
      { ingredient: "Vitamin E", strength: "10mg", percentage: 15 },
      { ingredient: "Zinc Sulfate", strength: "15mg", percentage: 10 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 15 }
    ],
    indications: [
      "Supports liver detoxification",
      "Promotes hepatic cell regeneration",
      "Reduces oxidative stress",
      "Improves liver enzyme levels"
    ],
    dosage: "As directed by physician",
    sideEffects: [
      { effect: "Mild gastrointestinal disturbance", severity: "low" },
      { effect: "Allergic reactions (rare)", severity: "medium" }
    ],
    contraindications: [
      "Hypersensitivity to any component",
      "Pregnancy and lactation (consult physician)"
    ],
    storage: "Store in a cool, dry place below 25°C. Keep away from direct sunlight.",
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
    composition: [
      { ingredient: "Calcium", strength: "High concentration", percentage: 35 },
      { ingredient: "Phosphorus", strength: "Balanced ratio", percentage: 25 },
      { ingredient: "Vitamin A", strength: "Fortified", percentage: 15 },
      { ingredient: "Vitamin D3", strength: "Enhanced", percentage: 15 },
      { ingredient: "Galactagogues", strength: "Q.S.", percentage: 10 }
    ],
    indications: [
      "Improves milk yield & health",
      "Enhances milk let-down",
      "Better growth, strong bones",
      "Butterfat in milk and SNF content"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Calcium", strength: "Double strength", percentage: 40 },
      { ingredient: "Phosphorus", strength: "Balanced", percentage: 25 },
      { ingredient: "Vitamin A", strength: "Fortified", percentage: 15 },
      { ingredient: "Vitamin D3", strength: "Enhanced", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Increased milk production",
      "Better growth, strong bones",
      "Fulfills calcium & phosphorus needs",
      "Must for reproduction & lactation"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Glycine", percentage: 25.25 },
      { ingredient: "Vitamin E", percentage: 6.82 },
      { ingredient: "Selenium", percentage: 0.003 },
      { ingredient: "Vitamin C", percentage: 5.30 },
      { ingredient: "Sodium Chloride", percentage: 3.28 },
      { ingredient: "Potassium Chloride", percentage: 2.53 },
      { ingredient: "Manganese Sulphate", percentage: 1.26 },
      { ingredient: "Yeast Extract", percentage: 5.05 },
      { ingredient: "Amino Nitrogen", percentage: 50.50 }
    ],
    indications: [
      "Boosts & maintains immune system",
      "Reduces stress, maintains homeostasis",
      "Improves WBC activity & FCR",
      "Can be used with antibiotics"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Hepatoprotective agents", strength: "Active blend", percentage: 40 },
      { ingredient: "Liver regenerating compounds", strength: "Potent", percentage: 25 },
      { ingredient: "Antioxidants", strength: "Balanced", percentage: 20 },
      { ingredient: "Vitamins", strength: "Essential", percentage: 10 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Relieves anorexia",
      "Rejuvenates from hepatic problems",
      "Prevents fatty liver syndrome",
      "Co-therapy with antibiotics"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Probiotics", strength: "Live cultures", percentage: 35 },
      { ingredient: "Prebiotics", strength: "Fiber blend", percentage: 25 },
      { ingredient: "Digestive Enzymes", strength: "Active", percentage: 20 },
      { ingredient: "Growth Stimulants", strength: "Natural", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Prevents pathogenic bacteria",
      "Increases ruminal microflora",
      "Normalizes appetite in anorexia",
      "Helps prevent diarrhea"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Vitamin B1 (Thiamine)", strength: "High", percentage: 25 },
      { ingredient: "Vitamin B Complex", strength: "Complete", percentage: 35 },
      { ingredient: "Biotin (Vitamin H)", strength: "Enriched", percentage: 20 },
      { ingredient: "Folic Acid", strength: "Essential", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Transforms stunted growth",
      "Eliminates anaemia & anorexia",
      "Boosts immunity",
      "Supports pregnancy nutrition"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Vitamin A", strength: "High potency", percentage: 25 },
      { ingredient: "Vitamin D3", strength: "Fortified", percentage: 20 },
      { ingredient: "Vitamin E", strength: "Antioxidant", percentage: 20 },
      { ingredient: "Vitamin K", strength: "Essential", percentage: 15 },
      { ingredient: "Anti-stress compounds", strength: "Q.S.", percentage: 20 }
    ],
    indications: [
      "Removes stress from vaccination/transport",
      "Builds body resistance to infection",
      "Improves growth & fertility",
      "Better egg & milk production"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Antibacterial agent", strength: "Potent", percentage: 40 },
      { ingredient: "Antiprotozoal agent", strength: "Effective", percentage: 35 },
      { ingredient: "Supportive compounds", strength: "Balanced", percentage: 20 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Bacterial & protozoal infections",
      "Mixed gut infections & diarrhea",
      "Calf scour treatment",
      "Bovine coccidiosis & enteritis"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Analgesic compound", strength: "Effective", percentage: 40 },
      { ingredient: "Anti-inflammatory agent", strength: "Potent", percentage: 35 },
      { ingredient: "Antipyretic", strength: "Active", percentage: 20 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Controls fever & inflammation",
      "Mastitis & metritis treatment",
      "Musculoskeletal pain relief",
      "Post-surgical pain management"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "NSAID (Active)", strength: "Injectable solution", percentage: 50 },
      { ingredient: "Anti-inflammatory agent", strength: "Potent", percentage: 30 },
      { ingredient: "Stabilizers", strength: "Q.S.", percentage: 15 },
      { ingredient: "Water for injection", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Controls pyrexia",
      "Arthritis & osteoarthritis",
      "Mastitis & metritis",
      "Laminitis & pneumonia"
    ],
    dosage: "As directed by veterinarian - Injectable",
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
    composition: [
      { ingredient: "Ceftriaxone", strength: "High potency", percentage: 50 },
      { ingredient: "Sulbactam", strength: "Beta-lactamase inhibitor", percentage: 30 },
      { ingredient: "Stabilizers", strength: "Q.S.", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Mastitis treatment",
      "Respiratory tract infections",
      "Septicaemia & meningitis",
      "Pre parturition & dystocia"
    ],
    dosage: "As directed by veterinarian - Injectable",
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
    composition: [
      { ingredient: "Ivermectin", strength: "Potent", percentage: 45 },
      { ingredient: "Antiparasitic base", strength: "Effective", percentage: 35 },
      { ingredient: "Carriers", strength: "Q.S.", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Kills endo & ectoparasites",
      "Safe for pregnant animals",
      "Prolonged activity",
      "Fewer treatments required"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Broad-spectrum anthelmintic", strength: "Potent", percentage: 50 },
      { ingredient: "Flukicide", strength: "Effective", percentage: 30 },
      { ingredient: "Palatability enhancers", strength: "Q.S.", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Ovicidal & larvicidal",
      "Cysticidal & wormicidal",
      "Control all major worms",
      "Safe for all animals"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Fenbendazole", strength: "Potent", percentage: 50 },
      { ingredient: "Anthelmintic base", strength: "Effective", percentage: 30 },
      { ingredient: "Binding agents", strength: "Q.S.", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Wormicidal & larvicidal",
      "Wide margin of safety",
      "Faster intestinal absorption",
      "Short milk residue period"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Fluoroquinolone", strength: "Potent", percentage: 40 },
      { ingredient: "Mucolytic agent", strength: "Effective", percentage: 35 },
      { ingredient: "Respiratory support", strength: "Q.S.", percentage: 20 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Rapid antibacterial activity",
      "Controls Mycoplasma",
      "Reduces respiratory complications",
      "Speedy recovery"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Antibacterial agent", strength: "Broad spectrum", percentage: 40 },
      { ingredient: "Antiprotozoal agent", strength: "Effective", percentage: 35 },
      { ingredient: "Supportive compounds", strength: "Q.S.", percentage: 20 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Broad spectrum antibacterial",
      "Treats all types of diarrhea",
      "E. coli & Salmonella",
      "Fowl cholera & coryza"
    ],
    dosage: "As directed by veterinarian",
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
    composition: [
      { ingredient: "Fluoroquinolone", strength: "Water-soluble", percentage: 45 },
      { ingredient: "Antibiotic base", strength: "Fast acting", percentage: 35 },
      { ingredient: "Solubilizing agents", strength: "Q.S.", percentage: 15 },
      { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
    ],
    indications: [
      "Prevents early chick mortality",
      "Fast acting antibiotic",
      "Coryza & fowl typhoid",
      "Higher safety & efficacy"
    ],
    dosage: "As directed by veterinarian - dissolve in drinking water",
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
