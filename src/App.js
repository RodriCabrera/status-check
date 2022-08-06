import { useEffect, useState } from "react";
import { checkEndpoint } from "./api";
import { StatusCard } from "./Card";
import { CardContainer, PageWrapper } from "./common.styles";
import { useInterval } from "./useInterval";

const endpointsToCheck = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

function App() {
  const [statusData, setStatusData] = useState([]);

  const updateStatus = () => {
    Promise.allSettled(endpointsToCheck.map(checkEndpoint)).then((data) => {
      setStatusData(data);
    });
  };

  useEffect(() => {
    updateStatus();
  }, []);

  useInterval(() => {
    updateStatus();
  }, 15000);

  return (
    <PageWrapper>
      <h1>STATUS PAGE</h1>
      <CardContainer>
        {statusData.map((status, index) => {
          return (
            <StatusCard
              key={status.value?.data.hostname}
              data={status}
              name={endpointsToCheck[index]}
            />
          );
        })}
      </CardContainer>
    </PageWrapper>
  );
}

export default App;
