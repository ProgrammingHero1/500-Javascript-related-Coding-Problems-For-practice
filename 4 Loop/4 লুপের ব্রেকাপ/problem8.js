//ধর তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস। কিন্তু তোর ইচ্ছা হলো 5 আর 15 এর পরে প্রিন্ট করা বন্ধ করতে। প্রথমে 5 পর্যন্ত প্রিন্ট হবে, পরে আবার 15 পর্যন্ত প্রিন্ট হবে, তারপর থেমে যাবে।
for (let i = 1; i <= 30; i++) {
  if (i > 5 && i <= 15) console.log(i);
  if (i > 15) break;
}
