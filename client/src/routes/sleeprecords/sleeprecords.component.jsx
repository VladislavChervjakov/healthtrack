import {
  SleepRecordDataUnit,
  SleepRecordDataWrapper,
  SleepRecordsHeading,
} from "./sleeprecords.styles";
import {
  DashboardWrapper,
  DashboardContainer,
} from "../dashboard/dashboard.styles";
import { useSelector } from "react-redux";
import { selectSleepRecords } from "../../store/sleeprecords/sleeprecords.selector";
import ControlWidget from "../../components/control-widget/control-widget.component";
import Button from "../../components/button/button.component";

const Sleeprecords = () => {
  const sleepRecords = useSelector(selectSleepRecords);
  return (
    <DashboardWrapper>
      <SleepRecordsHeading>
        <h2>Sleep Records</h2>
        <Button buttonType="base">Add new +</Button>
      </SleepRecordsHeading>
      <DashboardContainer columns="1fr 1fr 1fr">
        {sleepRecords
          ? sleepRecords.map((sleepRecord, id) => (
              <ControlWidget
                key={id}
                heading={sleepRecord.name}
                background="#fff"
              >
                <SleepRecordDataWrapper>
                  <SleepRecordDataUnit>
                    <span>Go to bed time: </span>
                    <span>
                      {new Date(sleepRecord.goToBedDateTime).toLocaleString()}
                    </span>
                  </SleepRecordDataUnit>
                  <SleepRecordDataUnit>
                    <span>Get up time: </span>
                    <span>
                      {new Date(sleepRecord.getUpDateTime).toLocaleString()}
                    </span>
                  </SleepRecordDataUnit>
                  <SleepRecordDataUnit>
                    <span>Comment: </span>
                    <span>{sleepRecord.comment}</span>
                  </SleepRecordDataUnit>
                </SleepRecordDataWrapper>
              </ControlWidget>
            ))
          : ""}
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Sleeprecords;
