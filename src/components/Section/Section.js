import PropTypes from 'prop-types';
import { FeedbackBox, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackBox>
      <Title>{title}</Title>
          {children}
    </FeedbackBox>
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
};