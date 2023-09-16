import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";

export const SleepRecordsHeading = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  ${BaseButton} {
    width: fit-content;
    margin-left: 1rem;
    padding: 0.5rem;
    line-height: 0.5rem;
  }
`;
export const SleepRecordDataWrapper = styled.div``;
export const SleepRecordDataUnit = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
