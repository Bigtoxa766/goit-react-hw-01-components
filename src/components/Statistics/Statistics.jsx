import PropTypes from 'prop-types';

import { StatItem, StatList, StatSection, StatTitle } from "./Statistics.styled"



export const Statistics = ({ stats, title }) => {

  return (
    <StatSection className="statistics">
      {title && <StatTitle className="title">{title}</StatTitle>}

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
  
          <StatItem className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
    
      </StatList>
    </StatSection>
  )
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}