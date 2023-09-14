import Widget from "../../components/widget/widget.component";
import { DashboardWrapper } from "./dashboard.styles";
import {
  selectSleepRecords,
  selectSleepRecordsError,
} from "../../store/sleeprecords/sleeprecords.selector";

import { ReactComponent as ActivityIcon } from "../../assets/activity.svg";
import { ReactComponent as SleepIcon } from "../../assets/sleep.svg";
import { ReactComponent as GoalsIcon } from "../../assets/goals.svg";
import { useSelector } from "react-redux";
import { countSleeprecordsAverageTime } from "../../utils/utils";

const Dashboard = () => {
  const sleepRecords = useSelector(selectSleepRecords);
  const isSleepRecordsError = useSelector(selectSleepRecordsError);
  console.log(isSleepRecordsError);
  const sleepRecordsAverageTime = !isSleepRecordsError
    ? countSleeprecordsAverageTime(sleepRecords)
    : 0;

  return (
    <DashboardWrapper>
      <Widget
        image={<ActivityIcon />}
        title="Hi!"
        text="Plan your activities to be more productive and healthy!"
        fullWidth={true}
        background="#F3C188"
      />
      <Widget
        image={<SleepIcon />}
        title="Your average sleep"
        text={sleepRecordsAverageTime + " hours"}
        fullWidth={false}
        background="#FFF"
      />
      <Widget
        image={<GoalsIcon />}
        title="Check your Goals!"
        text="Check your Goals! And check what you can complete today!"
        fullWidth={false}
        background="#99D5E8"
        buttonLink="/goals"
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
