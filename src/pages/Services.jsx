// src/pages/Services.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  "Qıfıllı yiv, BTS, OTTM, EUE və NUE yiv ilə keçiricilərin hazırlanması",
  "Bütün növ qolcuqların hazırlanması",
  "Şlisli valların hazırlanması",
  "SNS 180 və SNS 300 nasoslarının ehtiyyat hissələrinin hazırlanması və təmiri",
  "Şkivlərin istehsalı",
  "Bolt, sancaq, qayka istehsalı",
  "Flanşların hazırlanması",
  "Əyri boruların düzəldilməsi",
  "Mühərrik hissələrinin bərpası",
  "Kipləyici halqaların hazırlanması",
  "Yuma başlıqlarının hazırlanması",
  "Metal zolaqların istehsalı",
  "Əks-klapanların hazırlanması və təmiri",
  "Şablonların hazırlanması və təmiri",
  "Fırlangıcın (vertlyuq) təmiri",
  "Nasosların təmiri",
  "Qəza avadanlıqlarının və alətlərinin təmiri",
  "Katuşkaların hazırlanması",
  "Mancanaq dəzgah hissələrinin istehsalı",
  "Sifarişlə xüsusi avadanlıqların təmiri və istehsalı"
];

function Services() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Xidmətlərimiz</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
