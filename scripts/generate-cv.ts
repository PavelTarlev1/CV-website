import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { personalInfo } from '../src/config/personalInfo';
import { experiences } from '../src/data/experiences';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../external-cv');

const { name, title, contact, about, summary, languages, hobbies } = personalInfo;

const expCardsHtml = experiences.map(exp => `
        <div class="exp-card">
          <div class="exp-header">
            <h3>${exp.title}</h3>
            <div class="exp-meta">
              <span class="exp-company">${exp.company}</span>
              <span class="exp-period">${exp.period.replace('-', '–')}</span>
            </div>
          </div>
          ${exp.project ? `<div class="exp-project">${exp.project}</div>` : ''}
          ${exp.projectInfo ? `<p class="proj-overview">${exp.projectInfo}</p>` : ''}
          <ul class="exp-list">
            ${exp.description.map(d => `<li>${d}</li>`).join('\n            ')}
          </ul>
          <div class="tech-tags">
            ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>`).join('\n');

const langItemsHtml = languages.map(l => {
  const filled = '★'.repeat(l.proficiency);
  const empty = '☆'.repeat(5 - l.proficiency);
  return `<div class="lang-item"><span>${l.name}</span><span class="lang-stars">${filled}${empty}</span></div>`;
}).join('\n          ');

const hobbiesHtml = hobbies.map(h => {
  const iconMap: Record<string, string> = {
    Music: 'fa-music', Motorcycle: 'fa-motorcycle', Travel: 'fa-plane', Hiking: 'fa-hiking'
  };
  return `<div class="hobby"><i class="fas ${iconMap[h.label] ?? 'fa-star'}"></i><span>${h.label}</span></div>`;
}).join('\n            ');

const sidebarHtml = `
      <div class="sidebar">
        <div class="sidebar-card">
          <div class="profile">
            <div class="profile-img"><img src="profile-photo.jpg" alt="${name}"></div>
            <h3>${name}</h3>
            <p>${title}</p>
          </div>
          <div class="sb-section">
            <h4 class="sb-title">Contact</h4>
            <div class="contact-item"><i class="fas fa-envelope"></i><a href="mailto:${contact.email}">${contact.email}</a></div>
            <div class="contact-item"><i class="fas fa-phone"></i><a href="tel:${contact.phoneRaw}">${contact.phone}</a></div>
            <div class="contact-item"><i class="fab fa-linkedin"></i><a href="${contact.linkedin.url}">${contact.linkedin.display}</a></div>
            <div class="contact-item"><i class="fab fa-github"></i><a href="${contact.github}">${contact.github.replace('https://', '')}</a></div>
            <div class="contact-item"><i class="fas fa-globe"></i><a href="https://paveltarlev1.github.io/My-AWS-hosted-CV-website/">Personal Website</a></div>
          </div>
          <div class="sb-section">
            <h4 class="sb-title">Languages</h4>
            ${langItemsHtml}
          </div>
          <div class="sb-section">
            <h4 class="sb-title">Hobbies</h4>
            <div class="hobbies">
              ${hobbiesHtml}
            </div>
          </div>
          <div class="sb-section">
            <h4 class="sb-title">Bio</h4>
            <p class="bio-text">${about}</p>
          </div>
        </div>
      </div>`;

function buildHtml(theme: 'dark' | 'light'): string {
  const dark = theme === 'dark';
  const accent = dark ? '#00bcd4' : '#ff6600';
  const year = new Date().getFullYear();

  const css = dark ? `
    html, body { background: #1a1a1a; color: #e0e0e0; }
    .page { background: #242424; }
    .header { border-bottom: 2px solid ${accent}; }
    .header h1 { color: ${accent}; }
    .header p { color: #aaa; }
    .section-title { color: ${accent}; border-bottom: 1px solid #3a3a3a; }
    .summary-text { color: #bbb; background: #2e2e2e; border-left: 3px solid ${accent}; }
    .tech-stack { background: #2e2e2e; }
    .tech-item { background: #2e3a3a; color: #b0e0e0; border: 1px solid #1a3a3a; }
    .tech-item i { color: ${accent}; }
    .exp-card { background: #2e2e2e; border: 1px solid #3a3a3a; border-left: 3px solid ${accent}; }
    .exp-header h3 { color: #e8e8e8; }
    .exp-company { color: ${accent}; }
    .exp-period { color: #777; }
    .exp-project { color: #999; }
    .proj-overview { color: #999; background: #272727; border-left: 2px solid #006064; }
    .exp-list li { color: #b8b8b8; }
    .exp-list li::before { color: ${accent}; }
    .tech-tag { background: #2e3a3a; color: #80deea; border: 1px solid #1a3a3a; }
    .sidebar-card { background: #2a2a2a; border: 1px solid #3a3a3a; }
    .profile h3 { color: ${accent}; }
    .profile p { color: #999; }
    .profile-img { border: 2px solid ${accent}; }
    .sb-title { color: #e0e0e0; border-bottom: 2px solid ${accent}; }
    .contact-item { color: #aaa; }
    .contact-item i { color: ${accent}; }
    .contact-item a { color: #aaa; }
    .lang-item { color: #aaa; }
    .lang-stars { color: ${accent}; }
    .hobby { background: #333; color: #bbb; border: 1px solid #3a3a3a; }
    .hobby i { color: ${accent}; }
    .bio-text { color: #aaa; }
    .footer { border-top: 1px solid #333; color: #555; }
  ` : `
    html, body { background: #f8fafc; color: #333; }
    .page { background: #ffffff; }
    .header { border-bottom: 2px solid ${accent}; }
    .header h1 { color: ${accent}; }
    .header p { color: #666; }
    .section-title { color: ${accent}; border-bottom: 1px solid #e2e8f0; }
    .summary-text { color: #555; background: #fff8f4; border-left: 3px solid ${accent}; }
    .tech-stack { background: #fff8f4; }
    .tech-item { background: #ffe0c2; color: #333; border: 1px solid #ffc899; }
    .tech-item i { color: ${accent}; }
    .exp-card { background: #ffffff; border: 1px solid #e2e8f0; border-left: 3px solid ${accent}; }
    .exp-header h3 { color: #2c3e50; }
    .exp-company { color: ${accent}; }
    .exp-period { color: #999; }
    .exp-project { color: #888; }
    .proj-overview { color: #666; background: #fff8f4; border-left: 2px solid #ffb380; }
    .exp-list li { color: #555; }
    .exp-list li::before { color: ${accent}; }
    .tech-tag { background: #fff5eb; color: ${accent}; border: 1px solid #ffddb3; }
    .sidebar-card { background: #fff8f4; border: 1px solid #ffddb3; }
    .profile h3 { color: ${accent}; }
    .profile p { color: #888; }
    .profile-img { border: 2px solid ${accent}; }
    .sb-title { color: #2c3e50; border-bottom: 2px solid ${accent}; }
    .contact-item { color: #555; }
    .contact-item i { color: ${accent}; }
    .contact-item a { color: #555; }
    .lang-item { color: #2c3e50; }
    .lang-stars { color: ${accent}; }
    .hobby { background: #f8fafc; color: #555; border: 1px solid #e2e8f0; }
    .hobby i { color: ${accent}; }
    .bio-text { color: #666; }
    .footer { border-top: 1px solid #e2e8f0; color: #aaa; }
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name} - ${title}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%;
      font-family: 'Segoe UI', Roboto, Ubuntu, sans-serif;
      font-size: 13px;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    @page { margin: 0; }
    .page { width: 100%; padding: 9mm 14mm; }
    .header { padding-bottom: 7px; margin-bottom: 10px; }
    .header h1 { font-size: 27px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { font-size: 13px; margin-top: 2px; }
    .layout { display: grid; grid-template-columns: 1fr 190px; gap: 16px; }
    .section { margin-bottom: 10px; }
    .section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; padding-bottom: 4px; margin-bottom: 8px; }
    .summary-text { font-size: 12px; line-height: 1.55; padding: 8px 12px; border-radius: 5px; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 12px; border-radius: 5px; }
    .tech-item { display: flex; align-items: center; gap: 6px; padding: 3px 9px; border-radius: 12px; font-size: 11.5px; }
    .tech-item i { font-size: 12px; }
    .exp-card { border-radius: 5px; padding: 9px 13px; margin-bottom: 8px; break-inside: avoid; page-break-inside: avoid; }
    .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
    .exp-header h3 { font-size: 13.5px; font-weight: 600; }
    .exp-meta { text-align: right; flex-shrink: 0; margin-left: 10px; }
    .exp-company { font-weight: 600; font-size: 12px; display: block; }
    .exp-period { font-size: 11px; }
    .exp-project { font-size: 11.5px; margin-bottom: 6px; font-style: italic; }
    .proj-overview { font-size: 11px; line-height: 1.5; padding: 6px 9px; border-radius: 3px; margin-bottom: 8px; }
    .exp-list { list-style: none; margin-bottom: 8px; }
    .exp-list li { position: relative; padding-left: 15px; margin-bottom: 3px; font-size: 11.5px; line-height: 1.45; }
    .exp-list li::before { content: '▶'; position: absolute; left: 0; font-size: 8px; top: 3px; }
    .tech-tags { display: flex; flex-wrap: wrap; gap: 5px; }
    .tech-tag { padding: 2px 8px; border-radius: 10px; font-size: 10.5px; font-weight: 500; }
    .sidebar { display: flex; flex-direction: column; }
    .sidebar-card { border-radius: 6px; padding: 14px; }
    .profile { text-align: center; margin-bottom: 14px; }
    .profile-img { width: 90px; height: 90px; border-radius: 50%; overflow: hidden; margin: 0 auto 8px; }
    .profile-img img { width: 100%; height: 100%; object-fit: cover; }
    .profile h3 { font-size: 14px; font-weight: 700; }
    .profile p { font-size: 11px; margin-top: 3px; }
    .sb-section { margin-bottom: 13px; }
    .sb-section:last-child { margin-bottom: 0; }
    .sb-title { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding-bottom: 4px; margin-bottom: 8px; }
    .contact-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; font-size: 11px; word-break: break-all; }
    .contact-item i { width: 13px; font-size: 12px; flex-shrink: 0; margin-top: 1px; }
    .contact-item a { text-decoration: none; }
    .lang-item { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 11.5px; }
    .lang-stars { font-size: 11px; }
    .hobbies { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .hobby { display: flex; align-items: center; gap: 5px; padding: 5px 8px; border-radius: 10px; font-size: 11px; }
    .hobby i { font-size: 11px; }
    .bio-text { font-size: 11px; line-height: 1.55; }
    .footer { margin-top: 14px; padding-top: 8px; text-align: center; font-size: 11px; }
    ${css}
  </style>
</head>
<body>
<div class="page">
  <div class="header">
    <h1>${name}</h1>
    <p>${title}</p>
  </div>
  <div class="layout">
    <div class="main">
      <div class="section">
        <h2 class="section-title">Professional Summary</h2>
        <p class="summary-text">${summary}</p>
      </div>
      <div class="section">
        <h2 class="section-title">Professional Experience</h2>
        ${expCardsHtml}
      </div>
      <div class="footer">© ${year} ${name} · ${title}</div>
    </div>
    ${sidebarHtml}
  </div>
</div>
</body>
</html>`;
}

writeFileSync(resolve(outDir, 'black-a4.html'), buildHtml('dark'));
writeFileSync(resolve(outDir, 'white-a4.html'), buildHtml('light'));

console.log('Generated black-a4.html and white-a4.html');
