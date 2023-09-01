import PropTypes from 'prop-types';
import { StatisticsSection } from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection className="statistics">
      {title && <h2 className={title}>Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
            className="item"
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
    ).isRequired
};
