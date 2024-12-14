import React from "react";

const faqs = [
  { question: "What services do you offer?", answer: "We provide event decoration, planning, and management services." },
  { question: "Can I customize the themes?", answer: "Yes, we offer custom themes tailored to your preferences." },
  { question: "Do you handle large-scale events?", answer: "Absolutely, we specialize in both small and large events." },
  { question: "How can I contact you?", answer: "Use the contact form below or call us directly!" },
];

const FAQ = () => {
  return (
    <div className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-50">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
