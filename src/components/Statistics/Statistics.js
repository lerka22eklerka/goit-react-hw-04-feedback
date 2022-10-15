import PropTypes from 'prop-types';
import { StatsData} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatsData>{`Good: ${good}`}</StatsData>
      <StatsData>{`Neutral: ${neutral}`}</StatsData>
      <StatsData>{`Bad: ${bad}`}</StatsData>
      <StatsData>{`Total: ${total}`}</StatsData>
      <StatsData>{`Positive feedback: ${positivePercentage}`}</StatsData>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
