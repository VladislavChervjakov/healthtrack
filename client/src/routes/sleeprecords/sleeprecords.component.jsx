import {
  SleepRecordDataUnit,
  SleepRecordDataWrapper,
  SleepRecordsHeading,
  SleepRecordsWrapper,
} from "./sleeprecords.styles";
import { useSelector } from "react-redux";
import { selectSleepRecords } from "../../store/sleeprecords/sleeprecords.selector";
import ControlWidget from "../../components/control-widget/control-widget.component";
import { DashboardWrapper } from "../dashboard/dashboard.styles";

const Sleeprecords = () => {
  const sleepRecords = useSelector(selectSleepRecords);
  return (
    <DashboardWrapper>
      {sleepRecords.map((sleepRecord) => (
        <ControlWidget heading={sleepRecord.name}>
          <SleepRecordDataWrapper>
            <SleepRecordDataUnit>
              <span>Go to bed time</span>
              <span>{sleepRecord.goToBedDateTime}</span>
            </SleepRecordDataUnit>
            <SleepRecordDataUnit>
              <span>Get up time</span>
              <span>{sleepRecord.getUpDateTime}</span>
            </SleepRecordDataUnit>
            <SleepRecordDataUnit>
              <span>Comment</span>
              <span>{sleepRecord.comment}</span>
            </SleepRecordDataUnit>
          </SleepRecordDataWrapper>
        </ControlWidget>
      ))}
    </DashboardWrapper>
  );
};

export default Sleeprecords;
