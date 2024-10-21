export default function HashtagList({ companyList }) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <li>
            <button>{company}</button>
          </li>
        );
      })}
    </ul>
  );
}
