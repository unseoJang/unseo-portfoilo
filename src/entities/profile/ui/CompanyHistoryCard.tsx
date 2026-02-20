import styles from "./CompanyHistoryCard.module.css";

const companies = [
  {
    name: "Docfriends",
    role: "Frontend Engineer",
    period: "2021.10 - 2025.05",
    detail:
      "프론트엔드 UI 고도화, 렌더링 성능 개선, 서비스 운영 효율화를 위한 화면 개발을 담당했습니다.",
  },
  {
    name: "PitaP.at",
    role: "Web Developer",
    period: "2018.08 - 2021.05",
    detail:
      "반응형 웹 구축/유지보수와 사용자 플로우 개선 작업을 중심으로 제품 완성도를 높였습니다.",
  },
];

export function CompanyHistoryCard() {
  return (
    <article className={styles.infoCard}>
      <h2>다녔던 회사</h2>
      <ul className={styles.companyList}>
        {companies.map((company) => (
          <li key={company.name} className={styles.companyItem} tabIndex={0}>
            <div className={styles.companyTop}>
              <p className={styles.companyHead}>
                <strong>{company.name}</strong>
              </p>
              <span className={styles.companyRole}>{company.role}</span>
            </div>
            <p className={styles.companyMeta}>{company.period}</p>
            <p className={styles.companyDetail}>{company.detail}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
