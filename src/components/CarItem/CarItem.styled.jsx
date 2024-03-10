import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageWrap = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const List = styled.ul`
  width: 255px;
  height: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  margin-bottom: 28px;
  overflow: hidden;
`;

export const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  :not(:last-child) {
    margin-right: 6px;
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const TitleWrap = styled.div`
  width: 274px;
  color: #121417;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;
