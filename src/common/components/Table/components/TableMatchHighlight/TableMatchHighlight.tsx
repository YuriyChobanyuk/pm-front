import React from 'react';
import styled from 'styled-components';

const HighlightedSpan = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
`;

interface Props {
  search?: string;
  text: string;
}

const TableMatchHighlight: React.FC<Props> = ({ search, text }) => {
  if (!search || text === '-') return <span>{text}</span>;

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'i'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <HighlightedSpan>{part}</HighlightedSpan>
          ) : (
            <span>{part}</span>
          )
        )}
      </span>
    );
  };
  return getHighlightedText(text, search);
};

export default TableMatchHighlight;
