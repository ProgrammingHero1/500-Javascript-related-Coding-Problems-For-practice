//তুই কিছু শহরের নাম লিখে রাখছিস: ‘ঢাকা’, ‘চট্টগ্রাম’, ‘সিলেট’। এখন তুই ভাবলি আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের ‘রাজশাহী’ যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, ‘রাজশাহী’ আছে কিনা, এবং বুঝতে পারবি ছোট হাতের ‘রাজশাহী’ আর বড় হাতের ‘রাজশাহী’ আলাদা।
let cities = ["Dhaka", "Chattogram", "Sylhet", "rajshahi"];
console.log(
  "Problem 9:",
  cities.includes("Rajshahi") ? "'Rajshahi' আছে" : "'Rajshahi' নেই"
);
