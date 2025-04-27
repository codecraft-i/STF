import React from 'react';
import './BachelorDocs.css';

import Logo from '@assets/Logo.png'

import { useTranslation } from 'react-i18next';

const BachelorDocs = () => {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Logo;
    link.download = 'Logo.png';
    link.click();
  };

  const documents = [
    t('passport'),
    t('photo'),
    t('certificate_translation'),
    t('bank_statement'),
    t('language_certificate'),
    t('birth_certificate_copy'),
    t('parents_passport_copy'),
    t('parents_income_documents'),
    t('study_plan'),
    t('single_certificate'),
  ];

  return (
    <div className="docs-container">
      <div><h2 style={{ color: "#eee", margin: "0 0 25px 0" }}>{t('bachelor_visa_documents')}</h2></div>
      <div className="docs-wrapper">
        {documents.map((doc, index) => (
          <div className="doc-item" key={index}>
            <div className="doc-badge">{index + 1}</div>
            <p className="doc-text">{doc}</p>
          </div>
        ))}
      </div>

      <div className="download-btn-wrapper">
        <button className="download-btn" onClick={handleDownload}>
          <span>📥</span> {t('download_document_list')}
        </button>
      </div>
    </div>
  );
};

export default BachelorDocs;